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

from fastapi import FastAPI
from rag.api import app as fastapi_app

# Vercel entry point
# It expects a variable named 'app'
app = fastapi_app
