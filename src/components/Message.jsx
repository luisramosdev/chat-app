import { useEffect, useState } from "react";
import { formatDate } from "../helpers/formatDate";
import { supabase } from "../supabaseCliente";


const Message = ({ message, date, email }) => {
    const [nameUser, setNameUser] = useState()
    const [user, setUser] = useState()

    const getSession  = async () => {
        const { data } = await supabase.auth.getSession();
        // console.log(data.session.user.email)
        setUser(data.session.user.email);
        setNameUser(data.session.user.user_metadata.name);
    }

    useEffect(() => {
        getSession()
    }, [])

    return ( 
        <div className={`card ${user === email ? "me" : ""}`}>
            <p>{message}</p>
            <span>{formatDate(date)}</span>
            <span className="user-email">{nameUser}</span>
        </div>
    );
}
 
export default Message;