import React, { useState, FormEvent, ChangeEvent } from "react";

interface CustomError {
  name: string;
  message: string;
  code: string;
}

interface FormState {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [error] = useState<CustomError | null>(null);
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
  });

  //   const dispatch = useAppDispatch();

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // try {
    //   await dispatch(login(formState)).unwrap();
    // } catch (error: any) {
    //   setError(error);
    // }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center">
      <div className="flex h-screen flex-col flex-4 bg-teal-200">
        <div className="w-full h-full flex justify-center items-center">
          <img
            className="object-contain max-h-full max-w-full"
            src="src/assets/loginbg.png"
          />
        </div>
      </div>

      <form
        className="flex-1 w-full rounded shadow-lg px-8 pb-8 pt-6"
        onSubmit={handleLoginSubmit}
        name="login"
      >
        <div className="flex justify-center items-center">
          <img className="w-20" src="public/logo.svg" />
        </div>
        <div className="text-3xl text-center pb-5">Control Tower</div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            autoComplete="email"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            placeholder="email"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            autoComplete="current-password"
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5 flex items-center justify-between">
          <button
            className="w-full rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
            type="submit"
          >
            Login
          </button>
        </div>
        {error && (
          <div className="mb-5 rounded border border-red-600 p-2 text-red-500">
            {error.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
