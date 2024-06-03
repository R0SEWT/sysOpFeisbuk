db.createCollection("publicaciones", {
    validator: {
      $jsonSchema: {
        "bsonType": "object",
        "required": ["usuario_id", "contenido", "creado_en"],
        "properties": {
          "usuario_id": {
            "bsonType": "objectId",
            "description": "debe ser un ObjectId y es requerido"
          },
          "contenido": {
            "bsonType": "string",
            "description": "debe ser una cadena y es requerido"
          },
          "url_imagen": {
            "bsonType": "string",
            "description": "debe ser una cadena"
          },
          "creado_en": {
            "bsonType": "date",
            "description": "debe ser una fecha y es requerido"
          },
          "me_gustas": {
            "bsonType": "array",
            "items": {
              "bsonType": "objectId"
            }
          },
          "comentarios": {
            "bsonType": "array",
            "items": {
              "bsonType": "object",
              "required": ["comentario_id", "usuario_id", "contenido", "creado_en"],
              "properties": {
                "comentario_id": {
                  "bsonType": "objectId",
                  "description": "debe ser un ObjectId y es requerido"
                },
                "usuario_id": {
                  "bsonType": "objectId",
                  "description": "debe ser un ObjectId y es requerido"
                },
                "contenido": {
                  "bsonType": "string",
                  "description": "debe ser una cadena y es requerido"
                },
                "creado_en": {
                  "bsonType": "date",
                  "description": "debe ser una fecha y es requerido"
                }
              }
            }
          }
        }
      }
    }
  })
  