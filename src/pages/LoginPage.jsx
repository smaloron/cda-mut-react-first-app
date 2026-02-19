import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function LoginPage({onLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        setError('');

        try {
            await onLogin(email, password);
            navigate('/app/quiz');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <h3>Connexion</h3>

            {error && <p style={{color: "red"}}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <label>Email
                    <input type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                           placeholder="Enter email"/>
                </label>
                <label>Mot de passe
                    <input type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required
                           placeholder="Enter password"/>
                </label>

                <button type="submit">Login</button>
            </form>

            <div style={{marginTop: '1.5rem'}}>
                Pas encore inscrit ? <Link to="/register">Cliquez ici</Link>
            </div>

        </div>
    )
}

export default LoginPage;
