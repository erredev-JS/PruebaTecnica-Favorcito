export interface IWeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  current_units: {
    time: string; // e.g. "iso8601"
    interval: string; // e.g. "seconds"
    temperature_2m: string; // °C
    apparent_temperature: string; // °C
    is_day: string;
    rain: string; // mm
    precipitation: string; // mm
    relative_humidity_2m: string; // %
    wind_speed_10m: string; // km/h
    cloud_cover: string; // %
  };

  current: {
    time: string; // ISO string
    interval: number; // en segundos
    temperature_2m: number;
    apparent_temperature: number;
    is_day: number; // 1 o 0
    rain: number; // mm
    precipitation: number; // mm
    relative_humidity_2m: number; // %
    wind_speed_10m: number; // km/h
    cloud_cover: number; // %
  };

  hourly_units: {
    time: string;
    temperature_2m: string;
  };

  hourly: {
    time: string[];
    temperature_2m: number[];
  };
}
