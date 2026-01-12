import pdfplumber
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_core.documents import Document
from typing import List, Dict, Any

def extract_text_from_pdf(pdf_path: str) -> str:
    """
    Extracts text from a PDF file using pdfplumber.
    Attempts to preserve some structure by handling tables separately if needed.
    For this MVP, we extract page by page text.
    """
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            # simple text extraction
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n\n"
            
            # TODO: Add specific table extraction logic here if needed
            # tables = page.extract_tables()
            # for table in tables:
            #     text += str(table) + "\n"
                
    return text

def create_chunks(text: str, chunk_size: int = 1000, chunk_overlap: int = 200) -> List[Document]:
    """
    Splits text into chunks using RecursiveCharacterTextSplitter.
    Returns a list of LangChain Document objects.
    """
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=200,
        separators=["\n\n", "\n", " ", ""]
    )
    
    # We turn the strings into Documents. 
    # In a real app, we might want to track page numbers in metadata.
    # For now, simplistic splitting of the whole text.
    
    chunks = splitter.create_documents([text])
    return chunks

def process_pdf(pdf_path: str) -> List[Document]:
    """
    Orchestrates the ingestion process: load -> extract -> chunk.
    """
    text = extract_text_from_pdf(pdf_path)
    chunks = create_chunks(text)
    
    # Add source metadata
    for chunk in chunks:
        chunk.metadata["source"] = pdf_path
        
    return chunks
