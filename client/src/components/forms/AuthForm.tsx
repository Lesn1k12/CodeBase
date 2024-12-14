import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

interface User {
    username: string
    password: string
}

interface FormProps {
    onSubmit: SubmitHandler<User>;
    formType: "login" | "register"; 
}

const AuthForm: React.FC<FormProps> = ({ onSubmit, formType }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<User>();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>{formType === "login" ? "Login" : "Register"}</h2>

            <label>Username</label>
            <input 
                {...register("username", { required: "Username is required", maxLength: { value: 20, message: "Max length is 20" } })}
                autoFocus
            />
            {errors.username && <p className="error">{errors.username.message}</p>}

            <label>Password</label>
            <input 
                type="password" 
                {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters" } })}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
            
            <input type="submit" value={formType === "login" ? "Log In" : "Register"} />
        </form>
    );
};

export default AuthForm