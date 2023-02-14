import { useState, useEffect } from "react";
import { supabase } from "../supabaseCliente";
import Send from "./icons/Send"

const SendMessage = ({ scroll }) => {

    const [newMessage, setNewMessage] = useState("")
    const [user, setUser] = useState()

    const sendMessage = async e => {
        e.preventDefault();
        if(newMessage !== ""){
            const insert = await supabase.from("messages").insert({
                content: newMessage,
                email: user
            })
            setNewMessage("")
        }
        scroll.current.scrollIntoView({Behavior: 'smooth'})
    }

    const getSession  = async () => {
        const { data } = await supabase.auth.getSession();
        setUser(data.session.user.email)
        // console.log(data)
    }

    useEffect(() => {
        getSession()
    }, [])

    return (
        <section className="send-message">
            <form onSubmit={sendMessage}>
                <input type="text" 
                    name="message"
                    placeholder="Escribe tu mensaje..."
                    onChange={e => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <button type="submit"><Send/></button>
            </form>
        </section>
    );
}
 
export default SendMessage;