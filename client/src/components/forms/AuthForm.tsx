import React from 'react';
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form";

interface LoginData {
  username: string;
  password: string;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

interface FormProps {
  onSubmit: SubmitHandler<any>;
  formType: "login" | "register";
}

const AuthForm: React.FC<FormProps> = ({ onSubmit, formType }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<any>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <h2>{formType === "login" ? "Log in to your account" : "Create an account"}</h2>

      {/* Поле Username для логіну і реєстрації */}
      <div className="input-group">
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          {...register("username", {
            required: "Username is required",
            minLength: { value: 3, message: "Username must be at least 3 characters" },
            maxLength: { value: 20, message: "Username must be at most 20 characters" }
          })}
        />
        {errors.username?.message && <p className="error">{String(errors.username.message)}</p>}
      </div>

      {/* Додаткове поле Email для реєстрації */}
      {formType === "register" && (
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email?.message && <p className="error">{String(errors.email.message)}</p>}
        </div>
      )}

      {/* Поле Password */}
      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 8, message: "Password must be at least 8 characters" }
          })}
        />
        {errors.password?.message && <p className="error">{String(errors.password.message)}</p>}
      </div>

      <button type="submit" className="auth-button">
        {formType === "login" ? "Sign in" : "Sign up"}
      </button>
    </form>
  );
};

export default AuthForm;
