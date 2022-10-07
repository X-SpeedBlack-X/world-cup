import { Icon } from "~/components/Icon";
import { CardPlay } from "../../components/CardPlay";
import { DateSelect } from "../../components/DateSelect";

export function Dashboard() {
  return (
    <>
      <header className="bg-red-300 text-white">
        <div className="container max-w-3xl flex justify-between p-4">
          <img
            src="/assets/logo/logo-fundo-vermelho.svg"
            alt=""
            className="w-28 md:w-40"
          />
          <a href="/profile">
            <Icon name="Profile" className="w-10" />
          </a>
        </div>
      </header>

      <main className="space-y-6">
        <section id="header" className="bg-red-300 text-white">
          <div className="container max-w-3xl space-y-2 p-4">
            <span>Olá, Isaque</span>
            <h3 className="text-2xl font-bold">Qual é seu palpite?</h3>
          </div>
        </section>

        <section id="content" className="container max-w-3xl p-4 space-y-4 ">
          <DateSelect />

          <div className="space-y-4">
            <CardPlay
              timeA={{ slug: "sui" }}
              timeB={{ slug: "cam" }}
              match={{ time: "7:00" }}
            />

            <CardPlay
              timeA={{ slug: "uru" }}
              timeB={{ slug: "cor" }}
              match={{ time: "7:00" }}
            />

            <CardPlay
              timeA={{ slug: "por" }}
              timeB={{ slug: "gan" }}
              match={{ time: "7:00" }}
            />
          </div>
        </section>
      </main>
    </>
  );
}
