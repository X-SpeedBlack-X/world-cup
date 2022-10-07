import { Icon } from "~/components";
import { Input } from "~/components/Input";

export function Login() {
  return (
    <div>
      <header className="flex justify-center p-4 border-b-2 border-red-300">
        <div>
          <img
            src="/assets/logo/logo-fundo-branco.svg"
            alt="Logo"
            className="w-32 md:w-40"
          />
        </div>
      </header>

      <main className="container max-w-xl p-4">
        <div className="p-4 flex items-center space-x-4">
          <a href="/">
            <Icon name="Back" className="w-6" />
          </a>
          <h2 className="text-xl font-bold">Entre na sua conta</h2>
        </div>

        <form action="" className="space-y-6 p-4">
          <Input
            type="email"
            name="email"
            label="Seu email"
            placeholder="Digite seu email"
          />
          <Input
            type="password"
            name="password"
            label="Sua senha"
            placeholder="Digite sua senha"
          />

          <button className="w-full text-center bg-red-300 text-white  px-6 py-3 rounded-2xl">
            Entrar
          </button>
        </form>
      </main>
    </div>
  );
}
