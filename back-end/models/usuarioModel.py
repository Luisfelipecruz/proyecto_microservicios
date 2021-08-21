from sqlalchemy import Column, Integer, String
from database import Base


class Usuario(Base):
    __tablename__ = 'usuarios'
    ID = Column(Integer, primary_key=True, index=True, autoincrement=True)
    CODIGO = Column(Integer)
    NOMBRE = Column(String(30))
    APELLIDO = Column(String(30))
    EMAIL = Column(String(20))
    TELEFONO = Column(String(15))
    ROL_USUARIO = Column(String(15))
    USER = Column(String(20))
    PASSWORD = Column(String(15))
    ESTADO = Column(String(15))
