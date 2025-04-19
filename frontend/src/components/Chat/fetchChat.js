import rawToChat from "./rawToChat";
import axios from "axios";

export default async function fetchChat(
  API_URL,
  error,
  setChat,
  setIsLoading,
  setError
) {
  try {
    const response = await axios.get(
      `${API_URL}/getChats/?char_id=2&persona_id=1`
    );
    const chats = response["data"];
    const rawChat = chats[0]["chat"];
    const entries = Object.entries(rawChat).map((a) => rawToChat(a));
    setChat(entries);
    setError(null);
  } catch (err) {
    setError(err);
    console.error("Error al obtener el chat", error);
    setChat([]);
  } finally {
    setIsLoading(false);
  }
}
