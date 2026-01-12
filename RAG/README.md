# RAG PDF Assistant

A Retrieval-Augmented Generation (RAG) pipeline powered by **Google Gemini** and **ChromaDB**.

## Setup

1.  **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```
2.  **Environment Variables**:
    Ensure your `.env` file contains:
    ```
    GOOGLE_API_KEY=your_api_key_here
    ```

## Usage

**Run the Web Interface**:
```bash
streamlit run app.py
```

**Features**:
*   Upload PDF documents.
*   Ingest and index content (text + preservation of structure).
*   Ask semantic questions using Gemini.
