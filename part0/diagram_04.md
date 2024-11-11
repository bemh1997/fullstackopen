
sequenceDiagram
  participant user as Usuario
  participant browser as Navegador
  participant server as Servidor

  user->>browser: Completa el formulario y hace clic en "Enviar"
  browser->>server: POST /new_note (datos del formulario)
  activate server
  server-->>browser: HTTP 302 Redirección a /notes
  deactivate server

  browser->>server: GET /notes
  activate server
  server-->>browser: HTML document (Página de Notas)
  deactivate server

  browser->>server: GET /main.css
  activate server
  server-->>browser: CSS file
  deactivate server

  browser->>server: GET /main.js
  activate server
  server-->>browser: JavaScript file
  deactivate server

  browser->>server: GET /data.json
  activate server
  server-->>browser: JSON data (notas actuales)
  deactivate server

  Note left of server: El servidor accede a los datos en req.body y crea una nueva nota en el arreglo notes (temporal, sin base de datos)
