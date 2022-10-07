export function CardPlay({ teamA, teamB, match }) {
  return (
    <div className="rounded-xl border border-gray-300 p-4 text-center space-y-4">
      <span className="text-sm md:text-base text-gray-600 font-bold">
        {match.time}
      </span>

      <div className="flex space-x-4 justify-center items-center">
        <span className="uppercase">{teamA.slug}</span>
        <img src={`/assets/flags/${teamA.slug}.png`} alt="" />

        <input
          type="number"
          className="bg-red-500/[0.2]  w-[55px] h-[55px] text-red-600 text-xl text-center"
        />
        <span className="text-red-300 font-bold">X</span>
        <input
          type="number"
          className="bg-red-500/[0.2]  w-[55px] h-[55px] text-red-600 text-xl text-center"
        />

        <img src={`/assets/flags/${teamB.slug}.png`} alt="" />
        <span className="uppercase">{teamB.slug}</span>
      </div>
    </div>
  );
}
