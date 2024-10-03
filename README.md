Evaluación para Desarrollador Fullstack

## Introducción

Este documento presenta un proyecto de evaluación para la posición de Desarrollador Fullstack. El objetivo es implementar una funcionalidad de venta de pasajes, que permite a los usuarios buscar y reservar rutas, así como realizar el pago y emitir boletos.

## Descripción del Proyecto

El proyecto consiste en una aplicación web que permite a los usuarios:

1. **Buscar rutas**
2. **Seleccionar fechas de viaje**.
3. **Especificar la cantidad y número de asientos**.
4. **Realizar el pago**.
5. **Emitir un boleto tras la verificación de la compra**.

## Vuelos Disponibles

A continuación, se listan algunas de las opciones de vuelos internos en Perú que pueden visualizarse en la aplicación:

1. **Lima (LIM) → Cusco (CUZ)** - **Fecha**: 2024-10-10
2. **Arequipa (AQP) → Lima (LIM)** - **Fecha**: 2024-10-11
3. **Trujillo (TRU) → Cusco (CUZ)** - **Fecha**: 2024-10-12
4. **Iquitos (IQT) → Lima (LIM)** - **Fecha**: 2024-10-13
5. **Tumbes (TBP) → Arequipa (AQP)** - **Fecha**: 2024-10-14
6. **Piura (PIU) → Trujillo (TRU)** - **Fecha**: 2024-10-15
7. **Pucallpa (PCL) → Iquitos (IQT)** - **Fecha**: 2024-10-16
8. **Cajamarca (CJA) → Lima (LIM)** - **Fecha**: 2024-10-17
9. **Cusco (CUZ) → Piura (PIU)** - **Fecha**: 2024-10-18
10. **Lima (LIM) → Pucallpa (PCL)** - **Fecha**: 2024-10-19

La aplicación está construida utilizando **Next.js** para el frontend y utiliza **mocks** para simular el backend.

## Tecnologías Utilizadas

- **Frontend**: Next.js
- **Estilos**: Tailwind CSS
- **Gestión de Estado**: Zustand
- **Validación**: Zod
- **Control de Formularios**: React Hook Form

## Consideraciones y Buenas Prácticas

### Patrones y Estrategias Utilizadas

- **Componentes Reutilizables**: Se han creado componentes reutilizables para facilitar el mantenimiento y mejorar la coherencia del diseño.
- **Separación de Preocupaciones**: Los componentes se han separado en contenedores y componentes de presentación, siguiendo principios de diseño de React.
- **Gestión de Estado**: Se utiliza Zustand para manejar el estado de la aplicación de forma sencilla y efectiva.
- **Validación de Formularios**: Se implementa Zod junto con React Hook Form para garantizar la validez de los datos ingresados por los usuarios.

## Pasos para hacer deploy de forma local

Para desplegar este aplicativo localmente , sigue estos pasos:

1. **Clonar el Repositorio:**
   Clona el repositorio desde GitHub o donde se encuentre alojado.

   ```
   git clone <url-del-repositorio>
   cd <nombre-del-proyecto>
   ```

2. **Instalar Dependencias:**
   Asegúrate de tener Node.js y npm (o yarn) instalados. Luego, instala las dependencias del proyecto.

   ```
   npm install
   ```

3. **Correr el Proyecto Localmente:**

   Inicia el servidor de desarrollo de Next.

   ```
   npm run dev
   ```
## Mejoras Futuras

A continuación, se presentan algunas áreas que se pueden mejorar en la aplicación:

### 1. Mejora de Mocks de Vuelos
Actualmente, los datos de vuelos están simulados con un conjunto estático de información. Algunas posibles mejoras incluyen:

### 2. Validaciones de Tarjetas de Pago
Actualmente, la validación de las tarjetas de pago es básica. Aquí hay mejoras sugeridas:
- **Validación Luhn**: Implementar el algoritmo de Luhn para validar los números de las tarjetas de crédito, asegurando que el formato sea correcto.
- **Validaciones Adicionales**: Añadir validaciones para fechas de vencimiento, CVV, y compatibilidad con diferentes tipos de tarjetas como Visa, MasterCard, etc.
- **Manejo de Errores**: Implementar un manejo más robusto de errores para mostrar mensajes claros en caso de que los detalles de la tarjeta no sean válidos.

### 3. Implementación de un Loader
Cuando se realizan peticiones de vuelos o pagos, la interfaz actual no muestra un indicador visual de que la solicitud está en proceso. Para mejorar la experiencia del usuario:
- **Loader para Búsquedas de Vuelos**: Mostrar un componente de carga (loader) mientras se realiza la búsqueda de vuelos, especialmente si la petición tarda más de lo esperado debido a la cantidad de datos o la latencia de la red.
- **Loader para Procesamiento de Pagos**: Incluir un indicador de carga durante el procesamiento del pago para evitar que los usuarios intenten realizar múltiples pagos o se confundan acerca del estado de la transacción.


### Estructura de Carpetas

```plaintext
src
├── app
|  ├── booking
|  |  ├── page.tsx
|  |  ├── payment
|  |  |  └── page.tsx
|  |  ├── seatmap
|  |  |  └── page.tsx
|  |  └── sucess
|  |     └── page.tsx
|  ├── favicon.ico
|  ├── fonts
|  |  ├── GeistMonoVF.woff
|  |  └── GeistVF.woff
|  ├── globals.css
|  ├── layout.tsx
|  ├── page.tsx
|  └── results
|     └── page.tsx
├── lib
│   └── utils.ts
├── modules
│   ├── payment
│   ├── reservation
│   └── search
│   └── shared
└── README.md

```
