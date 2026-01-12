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
# PERSIST_DIRECTORY = os.path.join(RAG_DIR, "chroma_db") # Removed as no longer used for Pinecone

def get_vector_store():
    """
    Initialize and return the Pinecone vector store with Cloud Embeddings.
    """
    # Lazy imports
    from langchain_community.embeddings import HuggingFaceInferenceAPIEmbeddings
    from langchain_pinecone import PineconeVectorStore
    from pinecone import Pinecone
    
    # 1. Embeddings (Hugging Face)
    api_key = os.getenv("HUGGINGFACEHUB_API_TOKEN")
    if not api_key:
        print("WARNING: HUGGINGFACEHUB_API_TOKEN not set.")

    embedding_function = HuggingFaceInferenceAPIEmbeddings(
        api_key=api_key,
        model_name="BAAI/bge-small-en-v1.5" 
    )

    # 2. Vector Store (Pinecone)
    pc_api_key = os.getenv("PINECONE_API_KEY")
    index_name = os.getenv("PINECONE_INDEX_NAME", "designhub-rag")

    if not pc_api_key:
        print("WARNING: PINECONE_API_KEY not set.")
        # Ensure it doesn't crash during build, but will fail at runtime if key missing
        return None

    # Connect to Pinecone
    vector_store = PineconeVectorStore(
        index_name=index_name,
        embedding=embedding_function,
        pinecone_api_key=pc_api_key
    )
    
    return vector_store

def add_documents_to_store(chunks: List[Document]):
    """
    Adds documents to the Pinecone store.
    """
    vector_store = get_vector_store()
    if vector_store:
        vector_store.add_documents(chunks)
        print(f"Added {len(chunks)} documents to Pinecone.")
    else:
        print("Failed to get vector store. Documents not added.")

def clear_vector_store():
    """
    Deletes all vectors in the Pinecone index.
    """
    from pinecone import Pinecone
    
    pc_api_key = os.getenv("PINECONE_API_KEY")
    index_name = os.getenv("PINECONE_INDEX_NAME", "designhub-rag")
    
    if not pc_api_key:
        print("Cannot clear store: PINECONE_API_KEY missing.")
        return

    try:
        pc = Pinecone(api_key=pc_api_key)
        index = pc.Index(index_name)
        index.delete(delete_all=True)
        print("Pinecone index cleared.")
    except Exception as e:
        print(f"Error clearing Pinecone index: {e}")
