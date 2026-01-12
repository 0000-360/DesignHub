import os
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from langchain_core.prompts import PromptTemplate
from src.store import get_vector_store

load_dotenv()

class RAGSystem:
    def __init__(self):
        # Initialize LLM
        # Using llama3-70b-8192 via Groq for high performance
        api_key = os.getenv("GROQ_API_KEY")
        if not api_key:
            raise ValueError("GROQ_API_KEY not found in environment variables.")
            
        self.llm = ChatGroq(
            model="llama-3.3-70b-versatile",
            api_key=api_key,
            temperature=0.3
        )
        
        self.vector_store = get_vector_store()
        
        # Define the prompt template
        self.prompt_template = PromptTemplate(
            input_variables=["context", "question"],
            template="""You are the AI assistant for DesignHub. 
You are strictly limited to the provided context. 
Do NOT use your own outside knowledge. 
If the answer is not clearly stated in the context below, you MUST say "I cannot find this information in the company documents."

Context:
{context}

Question: 
{question}

Answer:"""
        )
        
        self.chain = self.prompt_template | self.llm

    def answer_question(self, query: str) -> dict:
        """
        Retrieves relevant documents and generates an answer.
        Returns a dictionary with 'answer' and 'source_documents'.
        """
        # 1. Retrieve
        # k=4 docs
        docs = self.vector_store.similarity_search(query, k=15)
        
        # 2. Prepare context
        context_text = "\n\n".join([doc.page_content for doc in docs])
        
        # 3. Generate
        response = self.chain.invoke({"context": context_text, "question": query})
        
        return {
            "answer": response.content,
            "source_documents": docs
        }
