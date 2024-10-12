import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex justify-center mt-40">
      <div className="card card-compact max-w-4xl shadow-2xl shadow-zinc-600">
        <center>
          <img src="head.png" className="max-w-60 justify-self-center" />
        </center>
        <form className="px-20 pb-20">
          <label className="text-zinc-100" htmlFor="email">
            Email:
          </label>
          <input
            className="mb-5"
            id="email"
            name="email"
            type="email"
            required
          />
          <label className="text-zinc-100" htmlFor="password">
            Password:
          </label>
          <input id="password" name="password" type="password" required />
          <div className="pt-5 flex justify-center gap-3">
            <div>
              <button className="hover:bg-neutral-400" formAction={login}>
                Log in
              </button>
            </div>
            <div>
              <button className="hover:bg-neutral-400" formAction={signup}>
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
