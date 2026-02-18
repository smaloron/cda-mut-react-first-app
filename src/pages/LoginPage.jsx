import {useState} from "react";
import {useNavigate} from "react-router-dom";

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
            navigate('/quiz');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <h3>Connexion</h3>

            <form onSubmit={handleSubmit}>
                <label>Email
                    <input type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required
                           placeholder="Enter email"/>
                </label>
                <label>Email
                    <input type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           required
                           placeholder="Enter password"/>
                </label>

                <button type="submit">Login</button>
            </form>

        </div>
    )
}

export default LoginPage;
