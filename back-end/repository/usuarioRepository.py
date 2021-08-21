from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from schemas import usuarioSchema
from models import usuarioModel


def listar_usuarios(db: Session):
    usuarios = db.query(usuarioModel.Usuario).all()
    return usuarios


def bucar_usuario(_id: int, db: Session):
    usuario = db.query(usuarioModel.Usuario).filter(usuarioModel.Usuario.ID == _id).first()
    if not usuario:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"El usuario con id {_id} no esta disponible")
    return usuario


def crear_usuario(request: usuarioSchema.Usuario, db: Session):
    nuevo_usuarios = usuarioModel.Usuario(CODIGO=request.Codigo,
                                          NOMBRE=request.UsuNom,
                                          APELLIDO=request.UsuApe,
                                          EMAIL=request.UsuEmail,
                                          TELEFONO=request.UsuTelMov,
                                          ROL_USUARIO=request.UsuRol,
                                          USER=request.User,
                                          PASSWORD=request.Password,
                                          ESTADO=request.UsuarioEstado
                                          )
    db.add(nuevo_usuarios)
    db.commit()
    db.refresh(nuevo_usuarios)
    return nuevo_usuarios


def modificar_usuario(_id: int, request: usuarioSchema.Usuario, db: Session):
    usuario_actualizado = db.query(usuarioModel.Usuario).filter(usuarioModel.Usuario.ID == _id).first()
    if not usuario_actualizado:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"El usuario con id {_id} no esta disponible")

    usuario_actualizado.CODIGO = request.Codigo
    usuario_actualizado.NOMBRE = request.UsuNom
    usuario_actualizado.APELLIDO = request.UsuApe
    usuario_actualizado.EMAIL = request.UsuEmail
    usuario_actualizado.TELEFONO = request.UsuTelMov
    usuario_actualizado.ROL_USUARIO = request.UsuRol
    usuario_actualizado.USER = request.User
    usuario_actualizado.PASSWORD = request.Password
    usuario_actualizado.ESTADO = request.UsuarioEstado

    db.commit()
    db.refresh(usuario_actualizado)
    return usuario_actualizado


def eliminar_usuario(_id: int, db: Session):
    usuario = db.query(usuarioModel.Usuario).filter(usuarioModel.Usuario.ID == _id).first()
    if not usuario:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"El usuario con id {_id} no esta disponible")
    else:
        usuario.delete(synchronize_session=False)
    db.commit()
    return 'eliminado'