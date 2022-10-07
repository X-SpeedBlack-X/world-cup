import { CardPlay } from "../../components/CardPlay";
import { DateSelect } from "../../components/DateSelect";
import { Icon } from "../../components/Icon";

export function Profile() {
  return (
    <>
      <header className="bg-red-300 text-white">
        <div className="container max-w-3xl flex justify-between p-4">
          <img
            src="/assets/logo/logo-fundo-vermelho.svg"
            alt=""
            className="w-28 md:w-40"
          />
        </div>
      </header>

      <main className="space-y-6">
        <section id="header" className="bg-red-300 text-white">
          <div className="container max-w-3xl space-y-2 p-4">
            <a href="/dashboard">
              <Icon name="Back" className="w-10" />
            </a>
            <h3 className="text-2xl font-bold">Isaque de Sousa</h3>
          </div>
        </section>

        <section id="content" className="container max-w-3xl p-4 space-y-4 ">
          <h2 className="text-red-300 text-xl font-bold">Seus palpites</h2>

          <div className="flex items-center justify-center space-x-4 p-4">
            <DateSelect />
          </div>

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
