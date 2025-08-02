export function clasificarTemperatura(temp: number): "fría" | "templada" | "cálida" {
  if (temp >= 25) return "cálida";
  if (temp >= 15) return "templada";
  return "fría";
}
