import "./globals.css";

export const metadata = {
  title: "Prueba técnica",
  description: "Prueba técnica para la empresa Conteo hecho por Santiago Zapata",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`w-full h-full flex justify-center items-center bg-gray-300`}
      >
        {children}
      </body>
    </html>
  );
}
