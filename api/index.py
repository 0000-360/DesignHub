import sys
import os

# Monkey-patch sqlite3 for ChromaDB on Vercel/Linux
# Chroma requires SQLite > 3.35, but Vercel's base image is older.
if os.environ.get("VERCEL"):
    try:
        __import__("pysqlite3")
        sys.modules["sqlite3"] = sys.modules.pop("pysqlite3")
    except ImportError:
        pass

try:
    # Ensure the project root is in sys.path so we can import 'rag'
    sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    
    from rag.api import app as fastapi_app
    app = fastapi_app
except Exception as e:
    # Fallback to a basic app that displays the error
    from fastapi import FastAPI
    from fastapi.responses import JSONResponse
    
    app = FastAPI()
    
    @app.api_route("/{path_name:path}", methods=["GET", "POST", "PUT", "DELETE"])
    def catch_all(path_name: str):
        return JSONResponse(
            status_code=500,
            content={"status": "error", "message": "Failed to import application", "detail": str(e)}
        )
