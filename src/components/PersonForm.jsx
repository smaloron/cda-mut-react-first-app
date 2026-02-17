import { useForm } from 'react-hook-form';


function PersonForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSuccess = (data) => {
        console.log(data)
    }

    const onError = (error) => {
        console.log(error)
    }

    return (
        <form onSubmit={handleSubmit(onSuccess, onError)}>
            <div>
                <input type="text" {...register("name",{
                    required:"Le nom est obligatoire"
                })} />
                <label htmlFor="name">Name</label>
                {errors.name && (<p style={{color:'red'}}>{errors.name.message}</p>)}
            </div>
            <div>
                <input type="number" {...register("age", {
                    required:"L'âge est obligatoire",
                    min:{value:18, message: "L'âge doit être supérieur à 18"},
                    max:{value: 130, message: "Désolé ce site est interdit aux tortues"},
                    valueAsNumber: true
                })} />
                <label htmlFor="age">Age</label>
                {errors.age && (<p style={{color:'red'}}>{errors.age.message}</p>)}
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default PersonForm;

