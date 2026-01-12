import os
import shutil
from typing import List
from langchain_community.embeddings.fastembed import FastEmbedEmbeddings
from langchain_chroma import Chroma
import chromadb
from langchain_core.documents import Document

# Get the absolute path of the directory containing this file (src/)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Go up one level to rag/
RAG_DIR = os.path.dirname(BASE_DIR)
PERSIST_DIRECTORY = os.path.join(RAG_DIR, "chroma_db")

def get_vector_store():
    """
    Initialize and return the Chroma vector store with FastEmbed embeddings.
    """
    # FastEmbed options
    # Use bundled model in rag/models to avoid runtime download
    models_dir = os.path.join(RAG_DIR, "models")
    
    # Ensure it exists (it should if bundled)
    if not os.path.exists(models_dir):
         # If missing, it will try to download (fail on Vercel if large, but fallback)
         print(f"Warning: Model directory {models_dir} not found. Using partial cache or default.")

    embedding_function = FastEmbedEmbeddings(
        model_name="BAAI/bge-small-en-v1.5",
        cache_dir=models_dir
    )
    
    # Check if running in Vercel (read-only filesystem)
    if os.environ.get("VERCEL"):
        # In Vercel, we can only read from the directory
        # We need to construct the absolute path relative to the runtime execution
        # usually /var/task/rag/chroma_db or similar
        # For simplicity, we assume the bundled processing copies it correctly.
        # However, Chroma might try to write lock. 
        # setting client_settings to read only if possible or just using ephemeral for query?
        # Standard Chroma persistent client tries to write.
        # We try to use the directory as is.
        pass

    vector_store = Chroma(
        persist_directory=PERSIST_DIRECTORY,
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
