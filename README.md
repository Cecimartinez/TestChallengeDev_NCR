# Test Challenge NCR 💼💰

Descripción: Este proyecto es una aplicación web para consultar el sueldo de las cuentas de una entidad financiera. Cuyos datos de son consumidos desde una API y muestra la información de las cuentas que cumplan ciertos criterios.

## Front-end 💻🌐

La interfaz de usuario está desarrollada utilizando React. Al cargar la página, se realiza una solicitud a la siguiente API: `https://api.npoint.io/97d89162575a9d816661` para obtener los datos de las cuentas.

Las cuentas que cumplen con los siguientes criterios serán mostradas:
- Moneda: Peso o Dólar.
- Tipo de Cuenta: Caja de Ahorro (CA) o Cuenta Corriente (CC).

### React Router 🚦

Se utiliza React Router para gestionar las rutas de la aplicación. Las siguientes rutas están implementadas:

- `/account`: Página principal que muestra las cuentas que cumplen con los criterios especificados.
- `/balance/:id`: Página de detalles de una cuenta específica.

### Tailwind CSS 🎨

Se utiliza Tailwind CSS para la maquetación y estilos de la aplicación.

### Pruebas Unitarias 🧪

Las pruebas unitarias se realizan utilizando vitest. Puedes ejecutar las pruebas ejecutando `npm test`.

## Instrucciones de instalación 🛠️

1. Clona este repositorio en tu máquina local. 🖥️
2. Asegúrate de tener instalado Node.js versión 12 o superior. 📦
3. Ejecuta el comando `npm install` en la raíz del proyecto para instalar las dependencias. ⚙️

## Estructura del proyecto 📂

- `/src`: Contiene el código fuente de la aplicación.
- `/public`: Contiene los archivos estáticos.
- `src/tests`: Contiene los archivos de pruebas unitarias.

## Instrucciones de ejecución ▶️

1. Asegúrate de estar en el directorio raíz del proyecto.
2. Ejecuta el comando `npm run dev` para iniciar el servidor de desarrollo.
3. Abre tu navegador y visita `http://localhost:3000` para acceder a la aplicación.

## Contribuciones y soporte 🤝

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue los pasos:

1. Realiza un fork de este repositorio.
2. Crea una rama con el nombre descriptivo de tu mejora.
3. Realiza los cambios y realiza commits descriptivos.
4. Envía una solicitud de pull.

Si tienes alguna pregunta o encuentras algún problema, puedes abrir un issue en este repositorio.

## Contacto 📧

Si tienes alguna pregunta o comentario, puedes contactarme por correo electrónico a martinezcecilia2707@gmail.com ✉️
