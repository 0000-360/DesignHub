import streamlit as st
import os
import tempfile
from src.ingest import process_pdf
from src.store import add_documents_to_store, clear_vector_store
from src.rag import RAGSystem

st.set_page_config(page_title="RAG PIPELINE", layout="wide")

st.title("📄RAG PIPELINE")

# Sidebar for Setup
with st.sidebar:
    st.header("Document Upload")
    uploaded_file = st.file_uploader("Upload a PDF", type="pdf")
    
    if st.button("Reset Knowledge Base"):
        clear_vector_store()
        st.success("Knowledge base cleared.")

if uploaded_file is not None:
    # Save uploaded file to temp file to process
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp_file:
        tmp_file.write(uploaded_file.getvalue())
        tmp_path = tmp_file.name

    st.write(f"Processing `{uploaded_file.name}`...")
    
    try:
        if st.button("Ingest Document"):
            with st.spinner(" extracting text and creating embeddings..."):
                chunks = process_pdf(tmp_path)
                add_documents_to_store(chunks)
            st.success(f"Ingested {len(chunks)} chunks from the document!")
            os.remove(tmp_path) 
    except Exception as e:
        st.error(f"Error processing file: {e}")

st.divider()

# Chat Interface
st.header("Ask a Question")

if "messages" not in st.session_state:
    st.session_state.messages = []

# Display chat history
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# User Input
if prompt := st.chat_input("What would you like to know about the document?"):
    st.chat_message("user").markdown(prompt)
    st.session_state.messages.append({"role": "user", "content": prompt})

    # Generate Answer
    try:
        rag = RAGSystem()
        with st.spinner("Thinking..."):
            result = rag.answer_question(prompt)
            answer = result["answer"]
            sources = result["source_documents"]
            
        with st.chat_message("assistant"):
            st.markdown(answer)
            with st.expander("View Sources"):
                for i, doc in enumerate(sources):
                    st.markdown(f"**Source {i+1}:**")
                    st.text(doc.page_content[:300] + "...")
                    
        st.session_state.messages.append({"role": "assistant", "content": answer})
        
    except ValueError as ve:
         st.error(f"Configuration Error: {ve}")
    except Exception as e:
        st.error(f"An error occurred: {e}")
