-------------------------------------------------------------------------------------------------------------------------------------------

# FORMULARIO ANGULAR, JAVA, NODE, SPRINGBOOT, TOMCAT

El sistema cuenta con una arquitectura separada en capas:

- 🖥️ **Frontend Angular** (solo envía los datos por POST).
- 🛠️ **Backend Java Spring Boot**, que expone un endpoint `/api/usuarios`.
- 🗄️ **Base de datos H2** en memoria, que guarda los datos enviados.

## 🔎 Validación de funcionamiento

- ✅ **Desde el cliente** → vía formulario Angular.
- ✅ **Desde el servidor** → validando respuesta 200 (éxito).
- ✅ **Desde la base de datos** → consultando la tabla `usuario` en la consola de H2 (`/h2-console`).

---

## 📄 INFORME TÉCNICO DE HERRAMIENTAS UTILIZADAS

### 🔙 BACKEND (Spring Boot + Maven)

- **Lenguaje:** Java  
- **Framework:** Spring Boot  
- **Gestión de dependencias:** Maven  
- **Controladores:** `@RestController`, `@RequestMapping`  
- **Persistencia:** Spring Data JPA  
- **Base de datos:** H2 (en memoria)  
- **Testing:** Postman + pruebas integradas desde Angular  
- **Servidor embebido:** Apache Tomcat  

---

### 🎨 FRONTEND (Angular Standalone)

- **Lenguaje:** TypeScript  
- **Framework:** Angular 17  
- **Componentes:** `AppComponent`, `UsuarioService`  
- **Formularios:** Template-driven (`NgModel`)  
- **Estilos:** CSS  
- **Comunicación con backend:** `HttpClient`  
- **Testing:** Karma + Jasmine  
- **Pruebas HTTP:** `HttpClientTestingModule`, `HttpTestingController`  
- **Modo standalone:** No se usa `app.module.ts`, todo se importa directamente en los componentes  

---

### 🧪 PRUEBAS IMPLEMENTADAS

- ✅ Envío y respuesta del formulario (`POST`)  
- ✅ Lectura de la lista de usuarios (`GET`)  
- ✅ Simulación de backend sin conexión real (mock)  

---

### 🗄️ BASE DE DATOS

- **Motor:** H2 Database (modo `mem:formulario`)  
- **Conexión:** vía JDBC  
- **Interfaz web:** `/h2-console`  
- **ORM:** Hibernate (`H2Dialect`)  

---

### 🌐 SERVIDOR Y ENTORNOS

- **Servidor embebido:** Apache Tomcat (via Spring Boot)  
- **Cliente de pruebas HTTP:** Postman  
- **Navegador para UI:** Google Chrome  
- **Framework de testing frontend:** Karma v6.4.4 + Chrome Headless  
- **IDE usados:** IntelliJ IDEA (Java) y VS Code (Angular)  

---

> Proyecto desarrollado para validar integración frontend-backend con persistencia en H2 en memoria.
