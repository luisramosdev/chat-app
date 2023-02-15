import { supabase } from "../supabaseCliente";

const Login = () => {
    const handleLoginFacebook = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'facebook'
        })
    }
    
    const handleLoginGoogle = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google'
        })
    }

    return (
        <section className="login">
            <button onClick={handleLoginFacebook}><i className="bi bi-facebook"></i> Iniciar con Facebook</button>
            <button onClick={handleLoginGoogle}><i className="bi bi-google"></i> Iniciar con Google</button>
        </section>
    );
}
 
export default Login;