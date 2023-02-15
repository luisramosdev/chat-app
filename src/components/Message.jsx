import { useEffect, useState } from "react";
import { formatDate } from "../helpers/formatDate";
import { supabase } from "../supabaseCliente";


const Message = ({ message, date, email, name_user }) => {
    const [user, setUser] = useState();

    const getSession  = async () => {
        const { data } = await supabase.auth.getSession();
        setUser(data.session.user.email);
    }

    useEffect(() => {
        getSession()
    }, [])

    return ( 
        <div className={`card ${user === email ? "me" : ""}`}>
            <p>{message}</p>
            <span>{formatDate(date)}</span>
            <span className="user-email">{name_user}</span>
        </div>
    );
}
 
export default Message;