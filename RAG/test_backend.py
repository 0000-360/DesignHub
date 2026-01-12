import os
from src.ingest import create_chunks
from src.store import add_documents_to_store, get_vector_store
from src.rag import RAGSystem

def test_pipeline():
    print("Testing Pipeline...")
    
    # 1. Create Dummy Content
    text = """
    Gemini is a family of multimodal AI models developed by Google DeepMind.
    It was announced in December 2023. 
    Gemini comes in three sizes: Ultra, Pro, and Nano.
    """
    print("1. text created.")
    
    # 2. Ingest
    chunks = create_chunks(text, chunk_size=200, chunk_overlap=50)
    print(f"2. Chunks created: {len(chunks)}")
    
    # 3. Store
    # Ensure clean state for test if possible, or just add
    add_documents_to_store(chunks)
    print("3. Stored in Chroma.")
    
    # 4. RAG
    # We need the API key to be set for this to work
    if not os.getenv("GROQ_API_KEY"):
        print("SKIPPING RAG TEST: No GROQ_API_KEY found.")
        return

    rag = RAGSystem()
    query = "When was Gemini announced?"
    print(f"4. Querying: {query}")
    
    result = rag.answer_question(query)
    print("5. Result:")
    print(f"Answer: {result['answer']}")
    print(f"Sources: {[d.page_content for d in result['source_documents']]}")
    
    assert "December 2023" in result['answer'] or "2023" in result['answer'], "Answer should contain the date."
    print("TEST PASSED!")

if __name__ == "__main__":
    test_pipeline()
