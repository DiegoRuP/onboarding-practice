# Ejercicio Práctico: Login Compartido, Servicio de LocalStorage, Guards y Routing en Dashboard

Este ejercicio tiene como objetivo que el practicante edite y extienda el proyecto de ejemplo para integrar un sistema de autenticación que involucre un login compartido, gestión de tokens en localStorage y control de acceso mediante guards. Se trabajará tanto en la librería compartida **onboarding-common** como en las aplicaciones **onboarding-admin** y **onboarding-web**.

---

## 1. Componente SharedLogin y Flujo de Login

- **Objetivo:**  
  Crear un componente compartido en la librería **onboarding-common** que permita la entrada de credenciales y se reutilice en ambas aplicaciones.

- **Requisitos:**
  - **En *onboarding-common*:**
    - Crear el componente `SharedLogin`.
    - El componente debe incluir un formulario básico para ingresar credenciales (por ejemplo, usuario y contraseña).
    - Debe emitir las credenciales usando un `EventEmitter` para que los componentes receptores las puedan recibir.

  - **En las aplicaciones:**
    - Crear los componentes `LoginAdmin` (en **onboarding-admin**) y `LoginWeb` (en **onboarding-web**).
    - Configurar ambos componentes en la ruta `/login` de sus respectivos proyectos.
    - Los componentes receptores (LoginAdmin y LoginWeb) deben incluir el componente `SharedLogin` y suscribirse al evento de emisión de credenciales.
    - Al recibir las credenciales, el componente receptor debe almacenar en localStorage un campo llamado `Token` (puede ser una cadena de texto arbitraria) y luego redirigir al usuario a la vista `dashboard`.

---

## 2. Servicio de LocalStorage

- **Objetivo:**  
  Centralizar la gestión del localStorage en un único servicio compartido.

- **Requisitos:**
  - **En *onboarding-common*:**
    - Crear un servicio llamado `LocalStorageService`.
    - El servicio deberá tener al menos tres métodos:
      - `set(key: string, value: any)`: Guarda un valor en localStorage.
      - `get(key: string)`: Obtiene un valor de localStorage.
      - `remove(key: string)`: Elimina un valor de localStorage.
  - **Integración en el Navbar:**
    - En el componente `Navbar` (ubicado en **onboarding-common**), agregar una opción para "Cerrar Sesión".
    - Al activarse, la opción debe utilizar el `LocalStorageService` para eliminar el `Token` y redirigir al usuario a la ruta `/login`.

---

## 3. Guards para Control de Acceso

- **Objetivo:**  
  Proteger las rutas según el estado de autenticación (presencia o ausencia del token) usando guards.

- **Requisitos:**
  - **Crear un guard llamado `NoAuthGuard`:**
    - Su función es verificar si ya existe un `Token` guardado en localStorage.  
    - Si el token existe, se impide el acceso a la vista de login y se redirige al usuario al dashboard.
    - Este guard se debe aplicar a la ruta `/login` en ambas aplicaciones.
  
  - **Modificar el `AuthGuard` existente (ubicado en onboarding-common):**
    - Ajustar la lógica para que:
      - Si **no** hay token en localStorage, impida el acceso a las rutas protegidas y redirija al usuario a `/login`.
      - Si el token existe, permita el acceso.
    - De esta forma, se establece:
      - `NoAuthGuard` protege la ruta de login (evitando que usuarios ya autenticados vuelvan a acceder a login).
      - `AuthGuard` protege las rutas que requieren autenticación (redirigiendo al login si el token falta).

---

## 4. Subrutas en el Dashboard y Uso del Componente Sidebar

- **Objetivo:**  
  Configurar el Dashboard de las aplicaciones (admin y web) para que actúe como contenedor de subrutas y utilice el componente `Sidebar` para navegar entre ellas.

- **Requisitos:**
  - **Subcomponentes de Dashboard:**
    - Crear componentes adicionales en cada aplicación que serán renderizados como subrutas del Dashboard. Por ejemplo:
      - `HomeComponent`
      - `ProfileComponent`
      - `SettingsComponent`
    - Estos componentes se ubicarán dentro de la carpeta `components/dashboard` de cada aplicación.

  - **Configuración del Routing:**
    - En el routing de cada aplicación, la ruta `dashboard` deberá configurarse con rutas hijas (children) que correspondan a los subcomponentes.
    
      Por ejemplo, en **onboarding-admin**:
      ```typescript
      const routes: Routes = [
        {
          path: 'dashboard',
          component: DashboardComponent,
          children: [
            { path: 'home', component: HomeComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'settings', component: SettingsComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
          ]
        },
        // Otras rutas...
      ];
      ```
    
    - En el template de Dashboard (por ejemplo, `dashboard.component.html`), colocar un `<router-outlet>` para que se muestre el contenido de la subruta seleccionada.
    
      Ejemplo:
      ```html
      <div class="d-flex">
        <onboarding-common-sidebar [menuItems]="menuItems"></onboarding-common-sidebar>
        <div class="flex-grow-1">
          <!-- Renderizado de las subrutas del Dashboard -->
          <router-outlet></router-outlet>
        </div>
      </div>
      ```
      
  - **Configuración del Sidebar:**
    - El componente `Sidebar` recibirá, mediante un input, un arreglo de opciones de menú. Cada opción debe incluir:
      - `label`: Texto a mostrar en el menú.
      - `route`: La subruta (por ejemplo, "home", "profile", "settings").
    - En el template del Sidebar, usar `[routerLink]` para navegar:
      ```html
      <ul class="nav nav-pills flex-column mb-auto">
        <li *ngFor="let item of menuItems" class="nav-item">
          <a class="nav-link" [routerLink]="item.route">{{ item.label }}</a>
        </li>
      </ul>
      ```

---

Este ejercicio permite comprender cómo:

1. **Compartir y reutilizar componentes:**  
   El componente `SharedLogin` se crea en la librería común y se utiliza tanto en las aplicaciones admin como web.

2. **Centralizar el manejo del localStorage:**  
   Con el servicio `LocalStorageService` se gestionan todas las acciones relacionadas con el almacenamiento local.

3. **Controlar el acceso mediante guards:**  
   Con el `NoAuthGuard` y la versión modificada del `AuthGuard`, se protege la navegación según el estado de autenticación.

4. **Configurar rutas anidadas en el Dashboard:**  
   El Dashboard actúa como contenedor de subrutas, utilizando el componente `Sidebar` para navegar entre diferentes vistas hijas.

Este enfoque modular facilita el mantenimiento, la reutilización y la escalabilidad del código en un entorno de múltiples aplicaciones con recursos compartidos.

---

