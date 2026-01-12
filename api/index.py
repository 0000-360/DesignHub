from fastapi import FastAPI
from rag.api import app as fastapi_app

# Vercel entry point
# It expects a variable named 'app'
app = fastapi_app
