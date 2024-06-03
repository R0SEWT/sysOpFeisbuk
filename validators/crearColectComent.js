db.createCollection("comentarios", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["publicacion_id", "usuario_id", "contenido", "creado_en"],
      "properties": {
        "publicacion_id": {
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
        },
        "me_gustas": {
          "bsonType": "array",
          "items": {
            "bsonType": "objectId"
          }
        }
      }
    }
  }
})
