export function clasificarTemperatura(temp: number): "fría" | "templada" | "cálida" {
  if (temp >= 25) return "cálida";
  if (temp >= 15) return "templada";
  return "fría";
}


export function getTodayAsString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); 
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
