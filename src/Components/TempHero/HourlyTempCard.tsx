import type { FC } from "react";
import type { IHourlyTemp } from "../../types/IHourlyTemp";

interface Props {
  hourlyTemp: IHourlyTemp;
}
export const HourlyTempCard: FC<Props> = ({ hourlyTemp }) => {
  return (
<div className="flex flex-col items-center justify-center  py-1 border rounded-2xl w-[22vw] max-w-[70px] min-w-[50px] max-h-[85px] text-xs sm:text-sm md:text-base">
      <span >{hourlyTemp.hour}</span>
      <span >{hourlyTemp.temp}º</span>
    </div>
  );
};
