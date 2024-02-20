
# React | Landing Page

Este proyecto es un ejercicio práctico para desarrollar una landing page utilizando React. A lo largo de este tutorial, aprenderás a estructurar tu proyecto, crear componentes reutilizables y a manejar las dependencias necesarias utilizando Vite.

## Configuración Inicial

### Primera Iteración: Creación y Configuración del Proyecto

1. **Creación del Proyecto con Vite**

   Para comenzar, crea un nuevo proyecto React utilizando Vite. Vite es una herramienta de compilación moderna que proporciona un entorno de desarrollo más rápido. En tu terminal, ejecuta el siguiente comando:

   ```sh
   npm create vite@latest mi-landing-page -- --template react
   ```

   Esto creará una nueva carpeta llamada `mi-landing-page` con una plantilla inicial de React configurada por Vite.

2. **Instalación de Dependencias**

   Navega a tu nuevo directorio de proyecto y ejecuta la instalación de dependencias:

   ```sh
   cd mi-landing-page
   npm install
   ```

   Esto instalará todas las dependencias necesarias para tu proyecto.

3. **Arranque del Servidor de Desarrollo**

   Para visualizar la landing page durante el desarrollo, arranca el servidor de desarrollo de Vite. Ejecuta el siguiente comando:

   ```sh
   npm run dev
   ```

   Una vez que el servidor esté funcionando, podrás ver tu proyecto en `http://localhost:3000`.

## Desarrollo de la Landing Page

### Segunda Iteración: Creación de Componentes

1. **Análisis de la Estructura**

   Observa la siguiente imagen que representa el diseño objetivo para la landing page. Tu tarea es replicar este diseño creando componentes en React.

   ![Diseño de la Landing Page](https://user-images.githubusercontent.com/33903092/131349832-76642727-2460-4d26-8a82-9c8bba8f5e31.png)

2. **Planificación de Componentes**

   Analiza el diseño y planifica cómo dividirlo en componentes reutilizables. Algunas preguntas que te pueden ayudar son:

   - ¿Qué elementos se repiten y podrían ser un único componente?
   - ¿Cómo puedes estructurar el CSS para que sea fácil de mantener?
   - ¿Qué props necesitarán los componentes para ser dinámicos y reutilizables?

3. **Implementación**

   Una vez planificado, comienza a crear los componentes dentro de la carpeta `src`. Recuerda seguir las mejores prácticas de React y asegúrate de testear cada componente individualmente para verificar su funcionamiento.

