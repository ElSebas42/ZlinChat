function ChatInput() {
  return (
    <fieldset className="bg-theme-2 h-[100px] w-[100%] flex flex-row z-1 border-t-theme-3 border-t-4 px-10 justify-center gap-2">
      <input type="text" placeholder="Ingresa tu prompt" className="max-w-[80%] grow-1 bg-theme-3 border-4 border-slate-800 rounded-xl px-2 focus:outline-0"></input>
      <button className="hover:cursor-pointer bg-amber-800 w-[100px] rounded-xl hover:border-2 active:bg-amber-600">Enviar</button>
    </fieldset>
  )
}

export default ChatInput