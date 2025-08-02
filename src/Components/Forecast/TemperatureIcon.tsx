type TempType = "fría" | "templada" | "cálida";

const getColor = (tipo: TempType) => {
  switch (tipo) {
    case "fría":
      return "#2196F3"; // azul
    case "templada":
      return "#FFC107"; // amarillo
    case "cálida":
      return "#F44336"; // rojo
  }
};

export const TemperatureIcon = ({ tipo }: { tipo: TempType }) => {
  const color = getColor(tipo);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 2048 2048"
    >
      <rect width="2048" height="2048" rx="256" ry="256" style={{ fill: color }} />
      <path
        fill="#fffffe"
        d="M1184.13 1151.94H1376v64h-191.87zM1184.14 1024H1280v64h-95.86zM1184.13 895.998H1376V960h-191.87zM1184.14 768.001H1280v64.001h-95.86zM1184.13 640.001H1376v64.002h-191.87zM1184.14 512H1280v64.002h-95.86zM1184.13 384.124H1376v64.002h-191.87z"
      />
      <path
        d="M992.003 1411.89c31.344 6.364 59.362 21.89 81.133 43.664 28.956 28.954 46.866 68.955 46.866 113.134 0 44.18-17.91 84.181-46.866 113.134-28.954 28.956-68.955 46.866-113.134 46.866-44.18 0-84.18-17.91-113.134-46.866-28.956-28.953-46.866-68.954-46.866-113.134 0-44.179 17.91-84.18 46.866-113.134 21.771-21.773 49.79-37.3 81.134-43.664V736.691h64.001v675.202z"
        fill="#fffffe"
      />
    </svg>
  );
};
