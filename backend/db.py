from sqlalchemy.dialects.sqlite import JSON
from typing import Optional, Dict, Any, List
from datetime import datetime
from sqlmodel import Field, SQLModel, create_engine, Column, Relationship
from pathlib import Path


class Persona(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True, unique=True)
    description: Optional[str] = Field(default=None)
    created_at: datetime = Field(default_factory=datetime.now)
    chats: List["Chat"] = Relationship(back_populates="persona")


class Character(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True, unique=True)
    title: Optional[str] = Field(default=None)
    description: str
    first_message: str
    created_at: datetime = Field(default_factory=datetime.now)
    chats: List["Chat"] = Relationship(back_populates="character")


class UserSetting(SQLModel, table=True):
    setting: str = Field(primary_key=True, unique=True)
    text_value: Optional[str] = Field(default=None)
    number_value: Optional[int] = Field(default=None)
    bool_value: Optional[bool] = Field(default=None)
    json_value: Optional[Dict[str, Any]] = Field(
        default_factory=None, sa_column=Column(JSON)
    )


class Chat(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True) 
    char_id: int = Field(foreign_key="character.id")
    persona_id: int = Field(foreign_key="persona.id")
    chat: Dict[str, Any] = Field(sa_column=Column(JSON, nullable=False))
    created_at: datetime = Field(default_factory=datetime.now)
    character: Optional["Character"] = Relationship(back_populates="chats")
    persona: Optional["Persona"] = Relationship(back_populates="chats")


sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

engine = create_engine(sqlite_url, echo=True)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


database_path = Path(sqlite_file_name)
if (__name__ == "__main__") or (not database_path.is_file()):
    create_db_and_tables()