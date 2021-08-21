from pydantic import BaseModel
from typing import Optional


class Usuario(BaseModel):
    IdUsuario: Optional[int] = None
    Codigo: Optional[int] = None
    UsuNom: Optional[str] = None
    UsuApe: Optional[str] = None
    UsuEmail: Optional[str] = None
    UsuTelMov: Optional[str] = None
    UsuRol: Optional[str] = None
    User: str
    Password: str
    UsuarioEstado: Optional[str] = None

    class Config:
        orm_mode = True


class MostrarUsuario(BaseModel):
    Codigo: Optional[int] = None
    UsuNom: Optional[str] = None
    UsuApe: Optional[str] = None
    UsuEmail: Optional[str] = None
    UsuTelMov: Optional[str] = None
    UsuRol: Optional[str] = None
    User: str
    UsuarioEstado: Optional[str] = None

    class Config:
        orm_mode = True