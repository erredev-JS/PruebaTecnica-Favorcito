
# 🌤️ WeatherApp

Aplicación web del clima que permite buscar una ciudad y visualizar información meteorológica actual y del pronóstico diario, usando datos de la API de [Open-Meteo](https://open-meteo.com/).

## 🚀 Demo

👉 [Ver en GitHub Pages](https://tu-usuario.github.io/tu-repo/)  
*(reemplazar con el link real una vez desplegado)*

---

## 🧠 Tecnologías utilizadas

- ⚛️ **React + TypeScript** – UI moderna y tipada
- ⚡ **Vite** – Empaquetador ultrarrápido
- 🌪️ **Zustand** – Manejo de estado global
- 📦 **Axios** – Llamadas HTTP a APIs
- 🌤️ **Open-Meteo API** – Datos meteorológicos actualizados
- 🎨 **Tailwind CSS** – Estilizado rápido y responsive

---

## 📸 Características

- Búsqueda de ciudades con autocompletado
- Visualización del clima actual:
  - Temperatura real y aparente
  - Velocidad del viento
  - Humedad relativa
  - Cobertura de nubes
- Pronóstico extendido por días
- Cambio dinámico de imágenes según el estado del cielo y si es de día o de noche
- Persistencia de estado (`firstSearch`, `activeWeather`) con Zustand y `persist`
- UI responsive y moderna

---

## 🛠️ Instalación local

1. Cloná el repo:

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```

2. Instalá dependencias:

   ```bash
   npm install
   ```

3. Ejecutá en modo desarrollo:

   ```bash
   npm run dev
   ```

---

## 🧾 Scripts disponibles

| Comando         | Descripción                          |
|-----------------|--------------------------------------|
| `npm run dev`   | Inicia el servidor de desarrollo     |
| `npm run build` | Compila la app para producción       |
| `npm run preview` | Previsualiza la app en producción |
| `npm run deploy`| Publica en GitHub Pages              |

---

## 🌍 Despliegue en GitHub Pages

1. Configurá el archivo `vite.config.ts` con la base del repositorio:

   ```ts
   export default defineConfig({
     base: "/tu-repo/",
     plugins: [react()],
   });
   ```

2. Luego ejecutá:

   ```bash
   npm run deploy
   ```

---

## 📁 Estructura del proyecto

```
src/
│
├── components/         # Tarjetas del clima, íconos, etc.
├── hooks/              # Custom hooks
├── services/           # Lógica para consumir Open-Meteo
├── store/              # Estado global con Zustand
├── utils/              # Helpers (fecha, clasificación, imágenes)
├── assets/             # Imágenes SVG del clima
└── App.tsx             # Componente raíz
```

---

## 📌 To Do / Mejoras futuras

- [ ] Soporte multilingüe (EN/ES)
- [ ] Indicador visual para cambios día/noche
- [ ] Agregar favoritos o ciudades guardadas
- [ ] Modo oscuro

---

## 📄 Licencia

MIT — Libre de usar, modificar y distribuir.

---

## 🙌 Autor

Desarrollado por [Rodrigo Zapata](https://github.com/rodrigozapata).  
Estudiante de la UTN – Técnico Universitario en Programación.  
¡Gracias por visitar el proyecto! 😊
