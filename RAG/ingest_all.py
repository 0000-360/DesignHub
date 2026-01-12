import os
import glob
from bs4 import BeautifulSoup
from langchain_core.documents import Document
from src.store import add_documents_to_store, clear_vector_store
from src.ingest import process_pdf

WEBSITE_DIR = "d:/Designhub/new website/src/pages"
PDF_PATH = "d:/Designhub/new website/rag/DESIGN HUB.pdf"

def ingest_website_content():
    print("Ingesting Website Content...")
    documents = []
    
    # improved to walk through subdirectories too if needed, or just glob
    # Glob for all .jsx files in pages and subdirectories
    files = glob.glob(os.path.join(WEBSITE_DIR, "**/*.jsx"), recursive=True)
    
    print(f"Found {len(files)} JSX files.")
    
    for file_path in files:
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Simple text extraction: remove imports, treat as loose HTML
            # We can use BeautifulSoup to strip tags
            soup = BeautifulSoup(content, "html.parser")
            text = soup.get_text(separator=" ", strip=True)
            
            # Create a Document
            # We add metadata so the RAG knows where it came from
            relative_path = os.path.relpath(file_path, WEBSITE_DIR)
            doc = Document(
                page_content=text,
                metadata={"source": f"Website: {relative_path}"}
            )
            documents.append(doc)
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
            
    if documents:
        # We might want to chunk these website docs if they are huge, 
        # but pages are usually small-ish. 
        # For now, let's treat them as single chunks or rely on underlying store logic if it chunks.
        # However, checking src/store.py or src/ingest.py would confirm. 
        # Assuming add_documents_to_store handles lists of Documents.
        
        # Let's verify if we need to chunk. src.ingest.process_pdf sends chunks.
        # I'll use a simple character splitter here just in case.
        from langchain_text_splitters import RecursiveCharacterTextSplitter
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
        chunks = text_splitter.split_documents(documents)
        
        add_documents_to_store(chunks)
        print(f"Added {len(chunks)} website chunks to store.")
    else:
        print("No website documents found.")

def ingest_pdf():
    if os.path.exists(PDF_PATH):
        print(f"Ingesting PDF: {PDF_PATH}")
        try:
            chunks = process_pdf(PDF_PATH)
            add_documents_to_store(chunks)
            print(f"Added {len(chunks)} PDF chunks to store.")
        except Exception as e:
            print(f"Error ingesting PDF: {e}")
    else:
        print(f"PDF not found at {PDF_PATH}")

def main():
    # Clear store first for a fresh start
    clear_vector_store() 
    
    ingest_website_content()
    ingest_pdf()
    print("Ingestion Complete.")

if __name__ == "__main__":
    main()
