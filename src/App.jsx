import { useState, useEffect } from 'react'
import './App.css'
import Messages from './components/Messages'
import Login from './components/Login'
import { supabase } from './supabaseCliente'

function App() {
  const [session, setSession] = useState(null);

  const getSession  = async () => {
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
  }

  useEffect(() => {
      getSession()
  }, [])

  return (
    <div className="App">
      { session ? "" : 
      <div>
        <h1>WhatsApp Clone</h1>
        <p>Creado por Luis Ramos</p>
      </div> }
      { session ? <Messages/> : <Login/> }
    </div>
  )
}

export default App
