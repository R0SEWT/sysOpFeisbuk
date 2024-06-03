// leer comentarios

db.usuarios.insertMany([
    {
      "nombre_usuario": "juan123",
      "correo": "juan@example.com",
      "contrasena": "password123",
      "nombre": "Juan Pérez",
      "fecha_nacimiento": new Date("1990-01-01"),
      "genero": "masculino",
      "ubicacion": "Lima, Perú",
      "url_foto_perfil": "https://example.com/juan.jpg",
      "amigos": [],
      "creado_en": new Date()
    },
    {
      "nombre_usuario": "maria456",
      "correo": "maria@example.com",
      "contrasena": "password456",
      "nombre": "María López",
      "fecha_nacimiento": new Date("1992-02-02"),
      "genero": "femenino",
      "ubicacion": "Cusco, Perú",
      "url_foto_perfil": "https://example.com/maria.jpg",
      "amigos": [],
      "creado_en": new Date()
    }
  ])
  
// remplazar ID de usuarios
db.publicaciones.insertMany([
  {
    "usuario_id": ObjectId("ID_DE_USUARIO_JUAN"),  // Reemplazar con el ID real
    "contenido": "Este es mi primer post en la plataforma!",
    "url_imagen": "https://example.com/imagen1.jpg",
    "creado_en": new Date(),
    "me_gustas": [],
    "comentarios": []
  },
  {
    "usuario_id": ObjectId("ID_DE_USUARIO_MARIA"),  // Reemplazar con el ID real
    "contenido": "Hola a todos! Encantada de estar aquí.",
    "url_imagen": "https://example.com/imagen2.jpg",
    "creado_en": new Date(),
    "me_gustas": [],
    "comentarios": []
  }
])
  
// remplazar ID de publicacion y usuario

db.comentarios.insertMany([
    {
      "publicacion_id": ObjectId("ID_DE_PUBLICACION_1"),  // Reemplazar con el ID real
      "usuario_id": ObjectId("ID_DE_USUARIO_MARIA"),  // Reemplazar con el ID real
      "contenido": "¡Qué buen post!",
      "creado_en": new Date(),
      "me_gustas": []
    },
    {
      "publicacion_id": ObjectId("ID_DE_PUBLICACION_2"),  // Reemplazar con el ID real
      "usuario_id": ObjectId("ID_DE_USUARIO_JUAN"),  // Reemplazar con el ID real
      "contenido": "¡Bienvenida!",
      "creado_en": new Date(),
      "me_gustas": []
    }
  ])
  
// remplazar ID de usuarios (remitente y destinatario)
db.mensajes.insertMany([
  {
    "remitente_id": ObjectId("ID_DE_USUARIO_JUAN"),  // Reemplazar con el ID real
    "destinatario_id": ObjectId("ID_DE_USUARIO_MARIA"),  // Reemplazar con el ID real
    "contenido": "Hola María, ¿cómo estás?",
    "enviado_en": new Date()
  },
  {
    "remitente_id": ObjectId("ID_DE_USUARIO_MARIA"),  // Reemplazar con el ID real
    "destinatario_id": ObjectId("ID_DE_USUARIO_JUAN"),  // Reemplazar con el ID real
    "contenido": "Hola Juan, estoy bien. ¿Y tú?",
    "enviado_en": new Date()
  }
])

// remplazar ID de usuarios
db.notificaciones.insertMany([
    {
      "usuario_id": ObjectId("ID_DE_USUARIO_JUAN"),  // Reemplazar con el ID real
      "tipo": "comentario",
      "mensaje": "María comentó en tu publicación.",
      "creado_en": new Date(),
      "leido": false
    },
    {
      "usuario_id": ObjectId("ID_DE_USUARIO_MARIA"),  // Reemplazar con el ID real
      "tipo": "amigo",
      "mensaje": "Juan te ha enviado una solicitud de amistad.",
      "creado_en": new Date(),
      "leido": false
    }
  ])
  