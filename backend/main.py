from fastapi import FastAPI
from db import engine, Chat, Character, Persona
from sqlmodel import Session, select
from classes import NewCharacter, NewPersona, NewChat
from fastapi.middleware.cors import CORSMiddleware

frontend_port = "5173"

app = FastAPI()

origins = [
    "http://localhost",
    f"http://localhost:{frontend_port}",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/")
def welcome():
    return {
        "Message": "Hi, if you want to go to the API documentation go to: http://localhost:8000/docs"
    }


@app.get("/getChats/")
def get_chat(char_id: int, persona_id:int):
    with Session(engine) as session:
        statement = select(Chat).where(
            Chat.char_id == char_id,
            Chat.persona_id == persona_id
        )
        result = session.exec(statement)
        chats = list(result)
    return chats
        

@app.post("/createPersona")
def create_persona(json: NewPersona):
    name = json.name
    description = json.description

    new_persona = Persona(name=name, description=description)

    with Session(engine) as session:
        session.add(new_persona)
        session.commit()

    return {
        "A character has been created with::": {"Name": name, "Description": description}
    }


@app.post("/createCharacter")
def create_character(json: NewCharacter):
    name = json.name
    title = json.title
    description = json.description
    first_message = json.first_message

    new_character = Character(
        name=name, title=title, description=description, first_message=first_message
    )

    with Session(engine) as session:
        session.add(new_character)
        session.commit()
    return {"A character has been created with:": {
        "Name": name,
        "Title": title,
        "Description": description,
        "First Message": first_message,
    }}

@app.post("/createChat")
def create_chat(json: NewChat):
    char_id = json.char_id
    persona_id = json.persona_id
    if char_id < 1 or persona_id < 1:
        return {
            "Error": "The Character ID or the Persona ID isn't valid"
        }
    chat = json.chat

    new_chat = Chat(
        char_id=char_id, persona_id=persona_id, chat=chat
    )
    with Session(engine) as session:
        session.add(new_chat)
        session.commit()
    return {"A chat has been created with": {
        "Character ID": char_id,
        "Persona ID": persona_id,
        "Chat": chat
    }}