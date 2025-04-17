# **🚀 Onboarding Project - Angular & Bootstrap**  

Un proyecto modular con **Angular** y **Bootstrap** que incluye:  
✅ **Aplicación Web** (onboarding-web)  
✅ **Panel de Administración** (onboarding-admin)  
✅ **Librería compartida** (onboarding-common)  

---

## **📦 Estructura del Proyecto**  

```plaintext
projects/
├── onboarding-admin/       # Aplicación de administración
├── onboarding-web/         # Aplicación web pública
└── onboarding-common/      # Librería compartida (componentes, servicios, guards)
```
---

## **✨ Características**  

### **🔹 Aplicación Web (onboarding-web)**  
- Dashboard con subrutas (`/home`, `/profile`, `/settings`).  
- Login integrado con `SharedLogin` (reutilizado desde `onboarding-common`).  
- Protección de rutas con `AuthGuard` y `NoAuthGuard`.  

### **🔹 Panel de Admin (onboarding-admin)**  
- Dashboard con Sidebar dinámico.  
- Guards personalizados para permisos de administrador.  
- Integración con servicios de autenticación.  

### **🔹 Librería Compartida (onboarding-common)**  
- **Componentes reutilizables:**  
  - `SharedLogin` (formulario de login).  
  - `Sidebar` (navegación lateral).  
  - `Navbar` (barra superior con logout).  
- **Servicios:**  
  - `LocalStorageService` (gestión de tokens).  
  - `LoggingService` (registro de eventos).  
- **Guards:**  
  - `AuthGuard` (protección de rutas privadas).  
  - `NoAuthGuard` (evita acceso a login si ya hay sesión).  

---

## **⚙️ Configuración**  

### **1. Instalación**  
```bash
npm install
```

### **2. Ejecutar en desarrollo**  
```bash

# Common
ng build onboarding-common

# Aplicación Web
ng serve onboarding-web --port=4200

# Panel de Admin
ng serve onboarding-admin --port=4300
```

## **🛠️ Tecnologías Usadas**  
- Angular 18  
- Bootstrap 
- LESS (preprocesador CSS)  
- Guards & Routing (protección de rutas)  
- LocalStorage (gestión de tokens)  

---

## **📌 Ejercicios Prácticos**  
El proyecto incluye ejercicios para implementar:  
✔ **Login compartido** entre apps.  
✔ **Sidebar dinámico** con rutas anidadas.  
✔ **Guards** para control de acceso.  
✔ **Servicio de localStorage** para manejo de tokens.  

---
