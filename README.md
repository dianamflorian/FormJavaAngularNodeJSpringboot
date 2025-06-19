# FormJavaAngularNodeJSpringboot
FORMULARIO ANGULAR, JAVA, NODE, SPRINGBOOT, TOMCAT

El sistema cuenta con una arquitectura separada en capas:
·	Frontend Angular (solo envía los datos por POST).
·	Backend Java Spring Boot, que expone un endpoint /api/usuarios.
·	Base de datos H2 en memoria, que guarda los datos enviados.
La validación de funcionamiento se realiza:
·	Desde el cliente → vía formulario.
·	Desde el servidor → validando respuesta 200.
·	Desde la base de datos → consultando la tabla usuario en la consola de H2.


INFORME TÉCNICO DE HERRAMIENTAS UTILIZADAS
🔙 BACKEND (Spring Boot + Maven)
·	Lenguaje: Java
·	Framework: Spring Boot
·	Gestión de dependencias: Maven
·	Controladores: @RestController y @RequestMapping
·	Persistencia: Spring Data JPA
·	Base de datos: H2 (en memoria)
·	Testing: Se realiza desde Postman y desde Angular como integración
·	Servidor embebido: Tomcat
🎨 FRONTEND (Angular Standalone)
·	Lenguaje: TypeScript
·	Framework: Angular 17
·	Componentes: AppComponent, UsuarioService
·	Formularios: Template-driven con NgModel
·	Estilos: CSS
·	Comunicación con backend: HttpClient
·	Testing: Karma + Jasmine
·	Módulo de pruebas HTTP: HttpClientTestingModule
·	Controlador simulado: HttpTestingController
🧪 Pruebas implementadas
·	Envío y respuesta del formulario (POST)
·	Lectura de la lista de usuarios (GET)
·	Simulación de backend sin conexión real
·	

·	Modo standalone: No se usa app.module.ts, todo se importa de forma directa en los componentes
🗄️ BASE DE DATOS
·	Motor: H2 Database (modo mem:formulario)
·	Conexión: vía JDBC
·	Interfaz web: /h2-console
·	Dialectos y ORM: Hibernate + H2Dialect
🌐 SERVIDOR Y ENTORNOS
·	Servidor embebido: Apache Tomcat (en Spring Boot)
·	Cliente de pruebas HTTP: Postman
·	Navegador para UI: Chrome
·	Framework de testing frontend: Karma v6.4.4 + Chrome Headless
·	IDE: IntelliJ IDEA (Java) y VS Code (Angular)

