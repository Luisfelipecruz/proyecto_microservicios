from fastapi import FastAPI
from controller import usuarioController
from fastapi.middleware.cors import CORSMiddleware

# from .hashing import Hash
app = FastAPI()
origins = [
        'http://localhost:3000'
]
app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
)


app.include_router(usuarioController.router)
