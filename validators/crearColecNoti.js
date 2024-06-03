db.createCollection("notificaciones", {
    validator: {
      $jsonSchema: {
        "bsonType": "object",
        "required": ["usuario_id", "tipo", "mensaje", "creado_en"],
        "properties": {
          "usuario_id": {
            "bsonType": "objectId",
            "description": "debe ser un ObjectId y es requerido"
          },
          "tipo": {
            "bsonType": "string",
            "enum": ["comentario", "me_gusta", "amigo", "mensaje"],
            "description": "debe ser uno de los tipos permitidos y es requerido"
          },
          "mensaje": {
            "bsonType": "string",
            "description": "debe ser una cadena y es requerido"
          },
          "creado_en": {
            "bsonType": "date",
            "description": "debe ser una fecha y es requerido"
          },
          "leido": {
            "bsonType": "bool",
            "description": "debe ser un booleano"
          }
        }
      }
    }
  })
  