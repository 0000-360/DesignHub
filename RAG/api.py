from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from rag.src.rag import RAGSystem
import uvicorn
import os

app = FastAPI(title="DesignHub RAG Chatbot API")

# Allow CORS for the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For dev, allow all. In prod, specify domain.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def health_check():
    return {"status": "ok", "service": "DesignHub RAG API"}

class ChatRequest(BaseModel):
    query: str

class ChatResponse(BaseModel):
    answer: str
    sources: list

# Global state
rag_system = None
init_error = None

@app.on_event("startup")
async def startup_event():
    global rag_system, init_error
    # Initialize RAG System on startup
    try:
        rag_system = RAGSystem()
        print("RAG System initialized successfully.")
    except Exception as e:
        init_error = str(e)
        print(f"Failed to initialize RAG System: {e}")

@app.get("/")
def health_check():
    status = "healthy" if rag_system else "degraded"
    return {
        "status": status,
        "service": "DesignHub RAG API",
        "rag_initialized": rag_system is not None,
        "error": init_error
    }

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    global rag_system
    if not rag_system:
        raise HTTPException(status_code=500, detail="RAG System not initialized")
    
    try:
        result = rag_system.answer_question(request.query)
        # Extract source content or simple names
        sources_list = [doc.page_content[:200] for doc in result["source_documents"]]
        return ChatResponse(answer=result["answer"], sources=sources_list)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run("api:app", host="0.0.0.0", port=8000, reload=True)
