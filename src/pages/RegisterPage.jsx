import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function RegisterPage({onRegister}) {
    const [serverError, setServerError] = useState(null);

    const initialFormValuse = {
        email: '',
        password: '',
        name: ''
    };
    const {register, handleSubmit, formState: {errors}} = useForm({
        initialValues: initialFormValuse
    });

    const navigate = useNavigate();

    const onSubmit = async ({email, password, name}) => {

        try {
            await onRegister(email, password, name);
            navigate("/app/quiz");
        } catch (error) {
            setServerError(error);
        }
    }

    return (
        <article>

            {serverError && (<div style={{color: "red"}}>{serverError}</div>)}

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Nom
                    <input type="text"
                           placeholder="Nom"
                           {...register("name", {required: "Le nom est obligatoire"})}
                           aria-invalid={errors.name}
                    />
                    {errors.name && <small style={{color: "red"}}>{errors.name}</small>}
                </label>
                <label>
                    Adresse email
                    <input type="email"
                           placeholder="email"
                           {...register("email", {required: "L'email est obligatoire"})}
                           aria-invalid={errors.email}
                    />
                    {errors.email && <small style={{color: "red"}}>{errors.email}</small>}
                </label>
                <label>
                    Mot de passe
                    <input type="password"
                           placeholder="Mot de passe"
                           {...register("password", {required: "Le mot de passe est obligatoire"})}
                           aria-invalid={errors.password}
                    />
                    {errors.password && <small style={{color: "red"}}>{errors.password}</small>}
                </label>

                <button type="submit">Valider</button>
            </form>

        </article>
    )
}

export default RegisterPage;
