# lafise-test

Proyecto de ejemplo construido con **Next.js (App Router)**, **Tailwind CSS** y **TypeScript**.

Este repositorio implementa una **interfaz de usuario para la gestión de cuentas y transacciones**, integrando **Redux Toolkit**, **componentes reutilizables** y **rutas API internas** que funcionan como _proxy/aggregadores_ hacia servicios externos.

---

## Estructura principal

Estructura general del proyecto (carpetas más relevantes):

- **`src/app/`** — Entradas principales de la aplicación (Next.js App Router).  
  Contiene el `layout.tsx`, los estilos globales y las rutas.

  - `globals.css` — estilos globales y variables base.
  - `layout.tsx` — layout principal; importa fuentes y envuelve la app con los providers necesarios (cliente/servidor).

- **`src/components/`** — Componentes UI reutilizables (sidebar, tablas, stepper, inputs, icon wrapper, etc.).

  - `icon/` — componentes SVG y wrapper principal `Icon`.
  - `ui/` — componentes base (Input, Table primitives, etc.).
  - `searchInput.tsx` — componente de búsqueda compuesto por `Input` + icono.
  - Otros componentes — cards, sections, wrappers, etc.

- **`src/data/`** — Datos estáticos (por ejemplo `menuOptions.ts`).

- **`src/store/`** — Configuración de Redux Toolkit (`transaction`, `user/account`, `app` slices).

- **`src/hooks/`** — Hooks personalizados (`useGetUser`, `useAddTransaction`, etc.).

- **`src/providers/`** — Wrappers cliente (por ejemplo `ReduxProvider` para compatibilidad con Server Components).

---

## Rutas API (Next.js)

- **`GET /api/user`**  
  Implementado en `src/app/api/user/route.ts`.  
  Retorna información general del usuario, junto con el catálogo de **cuentas** y **tarjetas**.

- **`GET /api/transactions`**  
  Implementado en `src/app/api/transactions/route.ts`.  
  Permite agregar una nueva transacción.

> **Nota:**  
> Los endpoints Next.js actúan como _proxy/aggregadores_ y esperan los servicios externos en  
> `http://localhost:5566` (`accounts/`, `transactions/`, `users/`).  
> Asegúrate de tener el backend o los mocks corriendo en ese puerto si dependes de datos reales.

---

## Mock API requerida

Para que la aplicación funcione correctamente, es necesario levantar el servicio **`mobile-frontend-challenge-mock`**, el cual provee los datos de usuario, cuentas, tarjetas y transacciones.

### Levantar el mock:

Desde la carpeta del mock:

```bash
npm run start-mock
```

---

## Dependencias principales

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **@reduxjs/toolkit**, **react-redux**
- **react-hook-form**
- **@radix-ui/react-select**
- **react-currency-input-field**
 - **shadcn/ui** — componentes y utilidades de interfaz reutilizables (shadcn)

Consulta el archivo `package.json` para ver la lista completa y las versiones exactas.

## Comandos clave

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

Construir la app para producción:

```bash
npm run build
npm run start
```

Formatear el código (Prettier):

```bash
npm run format        # aplica prettier --write
npm run format:check  # verifica sin cambiar archivos
```
