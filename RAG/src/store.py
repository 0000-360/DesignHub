import os
import shutil
from typing import List
# from langchain_community.embeddings.fastembed import FastEmbedEmbeddings
# from langchain_chroma import Chroma
# import chromadb
# from langchain_core.documents import Document

# Get the absolute path of the directory containing this file (src/)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Go up one level to rag/
RAG_DIR = os.path.dirname(BASE_DIR)
PERSIST_DIRECTORY = os.path.join(RAG_DIR, "chroma_db")

def get_vector_store():
    """
    Initialize and return the Chroma vector store with FastEmbed embeddings.
    """
    # Lazy imports
    # from langchain_community.embeddings.fastembed import FastEmbedEmbeddings
    from langchain_community.embeddings import HuggingFaceInferenceAPIEmbeddings
    from langchain_chroma import Chroma
    import chromadb
    
    # Use HuggingFace API for embeddings to save space on Vercel
    # This requires HUGGINGFACEHUB_API_TOKEN in .env
    api_key = os.getenv("HUGGINGFACEHUB_API_TOKEN")
    
    # Fallback/Warning if no key (will fail at runtime if not set, but build will pass)
    if not api_key:
        print("WARNING: HUGGINGFACEHUB_API_TOKEN not set. Embeddings will fail.")

    embedding_function = HuggingFaceInferenceAPIEmbeddings(
        api_key=api_key,
        model_name="BAAI/bge-small-en-v1.5" 
    )
    
    # Check if running in Vercel (read-only filesystem)
    if os.environ.get("VERCEL"):
        # Copy the bundled database to /tmp so it's writable
        writable_dir = "/tmp/chroma_db"
        
        # Only copy if not already there (though Vercel instances are ephemeral, so usually it's clean)
        if not os.path.exists(writable_dir):
            try:
                print(f"Copying ChromaDB from {PERSIST_DIRECTORY} to {writable_dir}...")
                shutil.copytree(PERSIST_DIRECTORY, writable_dir)
                print("Copy complete.")
            except Exception as e:
                print(f"Error copying DB: {e}")
                # Fallback to original path if copy fails
                pass
        
        # Point to the writable directory
        persist_dir = writable_dir
    else:
        persist_dir = PERSIST_DIRECTORY

    vector_store = Chroma(
        persist_directory=persist_dir,
        embedding_function=embedding_function
    )
    return vector_store

def add_documents_to_store(documents: List[Document]):
    """
    Adds a list of documents to the vector store.
    """
    vector_store = get_vector_store()
    vector_store.add_documents(documents)
    # Chroma persists automatically in newer versions, but explicitly allowed usually.
    return vector_store

def clear_vector_store():
    """
    Clears the existing vector store by removing the persistence directory.
    """
    if os.path.exists(PERSIST_DIRECTORY):
        shutil.rmtree(PERSIST_DIRECTORY)
