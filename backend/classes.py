from typing import Optional, Dict, Any
from pydantic import BaseModel


class NewCharacter(BaseModel):
    name: str
    title: Optional[str]
    description: str
    first_message: str

class NewPersona(BaseModel):
    name: str
    description: Optional[str]

class NewChat(BaseModel):
    char_id: int
    persona_id: int
    chat: Dict[str, Any] 