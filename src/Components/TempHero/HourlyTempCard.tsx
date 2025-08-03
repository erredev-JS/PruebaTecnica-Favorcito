import type { FC } from "react";
import type { IHourlyTemp } from "../../types/IHourlyTemp";

interface Props {
  hourlyTemp: IHourlyTemp;
}
export const HourlyTempCard: FC<Props> = ({ hourlyTemp }) => {
  return (
    <div className="flex flex-col  px-2 py-1 border w-1/4 rounded-2xl max-h-[85px] max-w-[100px] ">
      <span >{hourlyTemp.hour}</span>
      <span >{hourlyTemp.temp}º</span>
    </div>
  );
};
