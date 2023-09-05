import { useState, FormEvent, ChangeEvent } from "react";

interface CustomError {
  name: string;
  message: string;
  code: string;
}

interface FormState {
  email: string;
  password: string;
}

export default function Login() {
  const [error] = useState<CustomError | null>(null);
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
  });

  //   const dispatch = useAppDispatch();

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
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
    <div className="mb-4 flex w-full flex-col items-center rounded bg-white px-8 pb-8 pt-6">
      <form
        className="mb-4 w-full rounded bg-white px-8 pb-8 pt-6 shadow-md md:w-3/12"
        onSubmit={handleLoginSubmit}
        name="login"
      >
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
}
