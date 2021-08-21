from typing import List
from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from database import engine, get_db
from repository import usuarioRepository
from schemas import usuarioSchema
from models import usuarioModel

router = APIRouter(

        prefix="/usuarios",
        tags=['Usuarios']

)

usuarioModel.Base.metadata.create_all(bind=engine)


@router.get("/", response_model=List[usuarioSchema.MostrarUsuario])
async def listar_todos(db: Session = Depends(get_db)):
    return usuarioRepository.listar_usuarios(db)


@router.get('/{id}', status_code=status.HTTP_200_OK, response_model=usuarioSchema.Usuario)
async def buscar_usuario_por_id(_id: int, db: Session = Depends(get_db)):
    return usuarioRepository.bucar_usuario(_id, db)


@router.post('/', status_code=status.HTTP_201_CREATED)
async def crear_usuario(request: usuarioSchema.Usuario, db: Session = Depends(get_db)):
    return usuarioRepository.crear_usuario(request, db)


@router.put('/{id}', status_code=status.HTTP_202_ACCEPTED, response_model=usuarioSchema.Usuario)
async def actualizar_usuario(_id: int, request: usuarioSchema.Usuario, db: Session = Depends(get_db)):
    return usuarioRepository.modificar_usuario(_id, request, db)


@router.delete('/{id}', status_code=status.HTTP_200_OK)
async def borrar_usuario(_id: int, db: Session = Depends(get_db)):
    return usuarioRepository.eliminar_usuario(_id, db)