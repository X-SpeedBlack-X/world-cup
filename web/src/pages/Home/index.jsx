export function Home() {
  return (
    <div className="flex flex-col items-center bg-red-600 text-white min-h-screen p-4 ">
      <header className="container max-w-5xl flex justify-center p-4">
        <img
          src="/assets/logo/logo-fundo-vinho.svg"
          alt="Logo"
          className="w-40"
        />
      </header>

      <div className="container max-w-5xl flex-1 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6 p-4">
        <div className="md:flex-1 flex justify-center">
          <img
            src="/assets/imagem/image.png"
            alt=""
            className="w-full max-w-md"
          />
        </div>

        <div className="flex md:flex-1 flex-col space-y-6">
          <h1 className="text-3xl text-center md:text-left font-bold">
            Dê o seu palpite na Copa do Mundo do Catar 2022!
          </h1>
          <a
            href="/signup"
            className="text-center bg-white text-red-600 text-xl px-8 py-4 rounded-2xl"
          >
            Criar minha conta
          </a>

          <a
            href="/login"
            className="text-center text-white border border-white px-8 py-4 rounded-2xl"
          >
            Fazer login
          </a>
        </div>
      </div>
    </div>
  );
}
