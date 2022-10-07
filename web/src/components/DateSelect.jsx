import { addDays, format, subDays } from "date-fns";
import { ptBR } from "date-fns/locale";

import { useState } from "react";
import { Icon } from "./Icon";

export const DateSelect = () => {
  const [currentDate, setCurrentDate] = useState(new Date("2022-11-20T00:00Z"));

  const prevDay = () => {
    const nextDate = subDays(currentDate, 1);
    setCurrentDate(nextDate);
  };

  const nextDay = () => {
    const nextDate = addDays(currentDate, 1);
    setCurrentDate(nextDate);
  };

  return (
    <div className="flex items-center justify-center space-x-4 p-4">
      <Icon name="ArrowLeft" className="w-6 text-red-300" onClick={prevDay} />
      <span className="font-bold">
        {format(currentDate, "d 'de' MMMM", { locale: ptBR })}
      </span>
      <Icon name="ArrowRight" className="w-6 text-red-300" onClick={nextDay} />
    </div>
  );
};
