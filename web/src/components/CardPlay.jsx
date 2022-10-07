export function CardPlay({ timeA, timeB, match }) {
  return (
    <div className="rounded-xl border border-gray-300 p-4 text-center space-y-4">
      <span className="text-sm md:text-base text-gray-600 font-bold">
        {match.time}
      </span>

      <div className="flex space-x-4 justify-center items-center">
        <span className="uppercase">{timeA.slug}</span>
        <img src={`/assets/flags/${timeA.slug}.png`} alt="" />

        <input
          type="number"
          className="bg-red-500/[0.2]  w-[55px] h-[55px] text-red-600 text-xl text-center"
        />
        <span className="text-red-300 font-bold">X</span>
        <input
          type="number"
          className="bg-red-500/[0.2]  w-[55px] h-[55px] text-red-600 text-xl text-center"
        />

        <img src={`/assets/flags/${timeB.slug}.png`} alt="" />
        <span className="uppercase">{timeB.slug}</span>
      </div>
    </div>
  );
}
