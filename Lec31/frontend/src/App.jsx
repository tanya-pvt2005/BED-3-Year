import { useEffect, useState, useRef } from "react"

function App() {

  //browser gives native support for websocket, so no library needed
    let [ws, setWs] = useState(null) //to create state variable

  //useEffect -> hook used to do side effct on react
  useEffect(() => {

    const socket = new WebSocket("ws://localhost:8888")
    let inputRef = useRef() //store any dom element reference, different than useState since it does not trigger re-rendering of component

    socket.onmessage = (e)=>{
      console.log(e.data)
    }
    setWs(socket)
  }, [])

  function sendMessage() {

    let message = inputRef.current.value
    ws.send(message)

  }
  return (
    <>
      <h1>Ping Pong</h1>
      <input type="text" ref = {inputRef}></input>
      <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default App
