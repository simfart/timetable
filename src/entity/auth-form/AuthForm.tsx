import { cn } from "@bem-react/classname";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "shared/hooks/useAuth";

import "./AuthForm.scss";
const CnForm = cn("authForm");

interface AuthFormProps {
  title: string;
  buttonText: string;
  linkUrl: string;
  linkText: string;
}

const initialFormState = {
  email: "",
  password: "",
  name: "",
};

export const AuthForm = ({ title, buttonText }: AuthFormProps) => {
  const [formState, setFormState] = useState(initialFormState);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userData = {
      userId: Math.floor(Math.random() * 10),
      name: formState.name || "",
      email: formState.email || "",
    };

    login(userData);

    navigate("/");
  };

  return (
    <form className={CnForm()} onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <input
        type="email"
        placeholder="E-mail"
        value={formState.email}
        onChange={(event) =>
          setFormState((prevState) => ({
            ...prevState,
            email: event.target.value,
          }))
        }
      />
      <input
        type="password"
        placeholder="Пароль"
        value={formState.password}
        onChange={(event) =>
          setFormState((prevState) => ({
            ...prevState,
            password: event.target.value,
          }))
        }
      />
      <div className={CnForm("checkbox")}>
        <input type="checkbox" id="stay" name="stay"></input>
        <label htmlFor="stay">Запомнить меня</label>
      </div>

      <button type="submit" className="ctaLink">
        {buttonText}
      </button>
      <div className={CnForm("links")}>
        <Link to={""}>Я забыл пароль</Link>
        <Link to={""}>Войти как тренер</Link>
      </div>
      <div className={CnForm("link")}>
        <p>Нет аккаунта?</p>
        <Link to={""}>Зарегестрироваться</Link>
      </div>
    </form>
  );
};
