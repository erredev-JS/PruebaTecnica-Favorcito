export interface IForecast {
    time: string[],
    temperature_2m_max: number[],
    temperature_2m_min: number[],
    precipitacion_sum: number[],
    windspeed_10m_max: number[],
    sunrise: string[],
    sunset: string[]
}