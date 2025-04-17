function ChatInput() {
  return (
    <fieldset className="bg-theme-2 h-[100px] w-[100%] flex flex-row z-1">
      <input type="text" placeholder="Ingresa tu prompt" className="w-[90%]"></input>
      <button className="button">Enviar</button>
    </fieldset>
  )
}

export default ChatInput