# Guía de Estructura y Configuración del Proyecto de Ejemplo

Esta guía describe en detalle la estructura final del proyecto de ejemplo, ideal para el onboarding de los becarios. Se explica cómo se organiza el workspace, la separación entre aplicaciones y librería, la gestión de assets, environments y builds para desarrollo y producción.

---

## 1. Visión General del Proyecto de Ejemplo

El proyecto se ha dividido en tres partes principales:

- **onboarding-admin**  
  Aplicación Angular dedicada al área de administración. Contiene componentes específicos (por ejemplo, un Dashboard), servicios, guards y assets propios del panel administrativo.

- **onboarding-web**  
  Aplicación Angular orientada a la interfaz web o de usuario final. Cuenta con sus propios componentes (como su versión del Dashboard), servicios y guards particulares.

- **onboarding-common**  
  Librería Angular que centraliza recursos compartidos entre ambas aplicaciones. Aquí se encuentran:
  - **Componentes reutilizables:** Ejemplo, Navbar y Sidebar.
  - **Modelos (interfaces):** Para definir la estructura de datos (por ejemplo, `user.model.ts`).
  - **Servicios comunes:** Por ejemplo, un LoggingService para registrar eventos.
  - **Guards globales:** Como un AuthGuard para validaciones que afectan a ambas aplicaciones.

Esta división permite la **reutilización de código** y garantiza que cada aplicación se mantenga organizada, mientras se comparten recursos comunes para mantener coherencia en diseño y lógica.

---

## 2. Estructura del Proyecto

A continuación se muestra la estructura final del workspace:


projects
├── onboarding-admin
│   ├── public
│   │   ├── admin.webp
│   │   └── favicon.ico
│   ├── src
│   │   ├── app
│   │   │   ├── app.component.html
│   │   │   ├── app.component.less
│   │   │   ├── app.component.spec.ts
│   │   │   ├── app.component.ts
│   │   │   ├── app.config.ts
│   │   │   ├── app.routes.ts
│   │   │   ├── components
│   │   │   │   └── dashboard
│   │   │   │       ├── dashboard.component.html
│   │   │   │       ├── dashboard.component.less
│   │   │   │       └── dashboard.component.ts
│   │   │   ├── guards
│   │   │   │   └── admin.guard.ts
│   │   │   └── services
│   │   │       └── admin-user.service.ts
│   │   ├── environments
│   │   │   ├── environment.prod.ts
│   │   │   └── environment.ts
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.less
│   ├── tsconfig.app.json
│   └── tsconfig.spec.json
├── onboarding-common
│   ├── README.md
│   ├── ng-package.json
│   ├── package.json
│   ├── src
│   │   ├── environments
│   │   │   ├── environment.prod.ts
│   │   │   └── environment.ts
│   │   ├── lib
│   │   │   ├── components
│   │   │   │   ├── navbar
│   │   │   │   │   ├── navbar.component.html
│   │   │   │   │   ├── navbar.component.less
│   │   │   │   │   ├── navbar.component.spec.ts
│   │   │   │   │   └── navbar.component.ts
│   │   │   │   └── sidebar
│   │   │   │       ├── sidebar.component.html
│   │   │   │       ├── sidebar.component.less
│   │   │   │       ├── sidebar.component.spec.ts
│   │   │   │       └── sidebar.component.ts
│   │   │   ├── guards
│   │   │   │   └── auth.guard.ts
│   │   │   ├── models
│   │   │   │   ├── content.model.ts
│   │   │   │   ├── menu-item.model.ts
│   │   │   │   └── user.model.ts
│   │   │   ├── onboarding-common.component.spec.ts
│   │   │   ├── onboarding-common.component.ts
│   │   │   ├── onboarding-common.service.spec.ts
│   │   │   ├── onboarding-common.service.ts
│   │   │   └── services
│   │   │       └── logging.service.ts
│   │   └── public-api.ts
│   ├── tsconfig.lib.json
│   ├── tsconfig.lib.prod.json
│   └── tsconfig.spec.json
└── onboarding-web
    ├── public
    │   ├── favicon.ico
    │   └── web.webp
    ├── src
    │   ├── app
    │   │   ├── app.component.html
    │   │   ├── app.component.less
    │   │   ├── app.component.spec.ts
    │   │   ├── app.component.ts
    │   │   ├── app.config.ts
    │   │   ├── app.routes.ts
    │   │   ├── components
    │   │   │   └── dashboard
    │   │   │       ├── dashboard.component.html
    │   │   │       ├── dashboard.component.less
    │   │   │       └── dashboard.component.ts
    │   │   ├── guards
    │   │   │   └── web.guard.ts
    │   │   └── services
    │   │       └── content.service.ts
    │   ├── environments
    │   │   ├── environment.prod.ts
    │   │   └── environment.ts
    │   ├── index.html
    │   ├── main.ts
    │   └── styles.less
    ├── tsconfig.app.json
    └── tsconfig.spec.json

---

## 3. Explicación Detallada de Cada Sección

### A. Aplicaciones: onboarding-admin y onboarding-web

#### 1. Carpeta **public (Assets Específicos)**
- **Ubicación:**  
  Cada aplicación tiene su propia carpeta `public` (por ejemplo, `projects/onboarding-admin/public` y `projects/onboarding-web/public`).
- **Función:**  
  Aquí se almacenan los archivos propios de cada aplicación, como imágenes, banners, o favicons.
- **Gestión en Build:**  
  Mediante la configuración en *angular.json*, estos assets se copian durante el build a carpetas específicas en el directorio de salida (por ejemplo, `assets/admin` o `assets/web`), evitando colisiones con archivos globales.

#### 2. Carpeta **src (Código Fuente)**
- **Archivos Base:**  
  - `index.html` define la estructura básica de la aplicación.  
  - `main.ts` es el punto de entrada para bootstrap de Angular.  
  - `styles.less` contiene los estilos globales en LESS.
- **Environments:**  
  Dentro de `src/environments` se encuentran dos archivos:
  - `environment.ts`: Configuración para desarrollo.
  - `environment.prod.ts`: Configuración para producción.
  
  Estos archivos definen variables como `production` y campos específicos (por ejemplo, `adminField` para onboarding-admin o `webField` para onboarding-web). Además, usan valores comunes importados desde la librería **onboarding-common** para mantener la consistencia.
  
- **Carpeta app:**
  - **components:**  
    Se agrupan los componentes visuales. Por ejemplo, el DashboardComponent se ubica en `projects/onboarding-admin/src/app/components/dashboard` y en `projects/onboarding-web/src/app/components/dashboard`.  
    *Nota:* Inicialmente los componentes se generaban en la raíz de `app`, pero se creó la carpeta **components** para separar la lógica visual de la lógica de negocio.
  - **services:**  
    Incluye los servicios específicos de cada aplicación.  
    Ejemplos:  
    - En onboarding-admin: `admin-user.service.ts` para gestionar usuarios administrativos.  
    - En onboarding-web: `content.service.ts` para cargar contenido dinámico.
  - **guards:**  
    Contiene los guards (servicios que protegen rutas).  
    Ejemplos:  
    - En onboarding-admin: `admin.guard.ts` verifica privilegios administrativos.  
    - En onboarding-web: `web.guard.ts` aplica restricciones propias para el usuario final.

### B. Librería: onboarding-common

- **src/lib:**  
  Centraliza recursos compartidos que pueden ser utilizados por ambas aplicaciones.
  - **components:**  
    Incluye componentes reutilizables como el **Navbar** y el **Sidebar**.
  - **services:**  
    Contiene servicios comunes, por ejemplo, el **LoggingService**, que registra eventos y errores de forma centralizada.
  - **models:**  
    Define interfaces para estructurar los datos, como `user.model.ts`, `menu-item.model.ts` y `content.model.ts`.
  - **guards:**  
    Contiene guards generales, como `AuthGuard`, que pueden utilizarse en ambas aplicaciones.
- **src/environments:**  
  Aunque las librerías no utilizan file replacements, se incluyen archivos de environment para exponer valores comunes que luego se importan en los environments de las aplicaciones.
- **public-api.ts:**  
  Es el punto de entrada de la librería, donde se exportan todos los recursos públicos (componentes, servicios, modelos y guards).

### C. Configuración de Assets, Environments y Builds

#### Assets

- **Globales:**  
  Una carpeta global (por ejemplo, `public` en la raíz) contiene archivos comunes, como un logotipo. En angular.json se configura para copiar estos archivos a una carpeta de salida específica (por ejemplo, `assets/global`).
- **Específicos:**  
  Cada aplicación tiene su propia carpeta `public` para los assets particulares, que se copian a carpetas diferenciadas (como `assets/admin` o `assets/web`) durante el build.

#### Environments

- **Aplicaciones:**  
  En `src/environments` se definen dos archivos para cada aplicación:
  - `environment.ts` (desarrollo)
  - `environment.prod.ts` (producción)
  
  Estos archivos contienen variables específicas (por ejemplo, `adminField` o `webField`) y extienden la configuración común importando el environment de **onboarding-common** para agregar, por ejemplo, un `commonField`.
  
- **Librería Common:**  
  La librería tiene sus propios archivos de environment (aunque habitualmente no se usan en builds) para exponer valores que se integran en los environments de las aplicaciones.

#### Builds de Desarrollo y Producción

- **OutputPath Diferenciado:**  
  En la configuración de build (angular.json) se define un outputPath distinto para desarrollo y producción.  
  Ejemplo:
  - Desarrollo: `dist/development/onboarding-admin` o `dist/development/onboarding-web`
  - Producción: `dist/production/onboarding-admin` o `dist/production/onboarding-web`
- **File Replacements:**  
  Durante el build de producción, se reemplaza el archivo `environment.ts` por `environment.prod.ts` para cada aplicación.
- **Optimización y Flags:**  
  En producción se activan opciones como `optimization: true` y `outputHashing: "all"`, mientras que en desarrollo se habilitan `sourceMap: true` y se desactiva la optimización.

#### Scripts de Build

En el `package.json` se han definido scripts para facilitar la construcción en cada ambiente:
- Ejemplos (ajustados a la configuración final):
  - **onboarding-admin:**  
    - `build:admin:dev`: Compila en modo desarrollo.
    - `build:admin:prod`: Compila en modo producción.
  - **onboarding-web:**  
    - `build:web:dev`: Compila en modo desarrollo.
    - `build:web:prod`: Compila en modo producción.

Estos comandos ejecutan `ng build` con la opción `--configuration` correspondiente, generando outputs separados y aplicando los file replacements adecuados.

---

## 4. Conclusión

Este proyecto de ejemplo muestra una organización modular y escalable que permite:

- **Reutilización de código:**  
  La librería **onboarding-common** centraliza elementos reutilizables (componentes, servicios, modelos y guards) que se usan en ambas aplicaciones.
  
- **Organización clara:**  
  Cada aplicación (onboarding-admin y onboarding-web) está organizada en carpetas específicas para assets, código fuente, environments y lógica funcional (components, services y guards). La incorporación de la carpeta **components** mejora la separación y claridad del código.
  
- **Configuración avanzada de builds:**  
  Las configuraciones de angular.json separan builds de desarrollo y producción, utilizando file replacements para gestionar los environments y definiendo outputPaths distintos para evitar la colisión de archivos.
  
- **Gestión de Assets:**  
  Se gestionan assets globales y específicos de forma separada, copiándolos a carpetas distintas en el output (por ejemplo, `assets/global`, `assets/admin` y `assets/web`).

Esta estructura y configuración sirven de base para que los nuevos integrantes del equipo comprendan cómo se organiza un workspace Angular de gran escala, facilitando el mantenimiento, la escalabilidad y la reutilización de código en un entorno real. Si se requieren más detalles o ajustes adicionales, estos se podrán ampliar conforme evolucionen las necesidades del equipo.
