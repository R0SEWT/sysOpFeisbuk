db.createCollection("mensajes", {
    validator: {
      $jsonSchema: {
        "bsonType": "object",
        "required": ["remitente_id", "destinatario_id", "contenido", "enviado_en"],
        "properties": {
          "remitente_id": {
            "bsonType": "objectId",
            "description": "debe ser un ObjectId y es requerido"
          },
          "destinatario_id": {
            "bsonType": "objectId",
            "description": "debe ser un ObjectId y es requerido"
          },
          "contenido": {
            "bsonType": "string",
            "description": "debe ser una cadena y es requerido"
          },
          "enviado_en": {
            "bsonType": "date",
            "description": "debe ser una fecha y es requerido"
          },
          "leido_en": {
            "bsonType": "date",
            "description": "debe ser una fecha"
          }
        }
      }
    }
  })
  