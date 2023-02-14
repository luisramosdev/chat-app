import { supabase } from "../supabaseCliente";

const Login = () => {
    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        })
    }

    return (
        <section className="login">
            <button onClick={handleLogin}>Iniciar</button>
        </section>
    );
}
 
export default Login;