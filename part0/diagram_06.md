sequenceDiagram
  participant User
  participant Browser
  participant Server

  User->>Browser: Completa el formulario y hace clic en "Agregar Nota"
  Note right of Browser: JavaScript captura la acción del formulario y procesa la nueva nota sin recargar la página

  Browser->>Server: POST /new_note (datos en JSON)
  activate Server
  Server-->>Browser: Respuesta 201 Created (éxito, sin redirección)
  deactivate Server

  Note right of Browser: Navegador actualiza la lista de notas dinámicamente sin recargar la página

  Browser->>Server: GET /data.json (opcional)
  activate Server
  Server-->>Browser: JSON data (notas actualizadas, si es necesario)
  deactivate Server

  Note right of Browser: La SPA representa la nueva nota en la página sin solicitar todo el HTML nuevamente