
import Arrow from './icons/Arrow'
import Dots from './icons/Dots'
import { supabase } from '../supabaseCliente'
import { useState, useEffect } from 'react'

const Header = () => {
    const [user, setUser] = useState("Luis")
    const [avatar, setAvatar] = useState()
    const [open, setOpen] = useState(false)
    
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut()
        window.location.reload()
    }

    const getSession  = async () => {
        const { data } = await supabase.auth.getSession();
        setUser(data.session.user.user_metadata.name)
        setAvatar(data.session.user.user_metadata.avatar_url)
        // console.log(data)
    }

    useEffect(() => {
        getSession()
    }, [])

    const handleDots = () => {
        setOpen(current => !current)
    }

    return (
        <div className="header">
            <div className="left">
                <p className="logout" onClick={handleLogout}><Arrow/></p>
                <img src={avatar} alt="" />
                <p className="name">{user}
                <span>En línea</span>
                </p>
            </div>
            <p className="dots" onClick={handleDots}>
                <Dots/>
            </p>
            <div className={`float-out ${open ? "open" : ""}`} onClick={handleLogout}>
                Cerrar Sesión
            </div>
        </div>
    );
}
 
export default Header;