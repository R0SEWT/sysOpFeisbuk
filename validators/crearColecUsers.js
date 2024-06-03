db.createCollection("usuarios", {
    validator: {
      $jsonSchema: {
        "bsonType": "object",
        "required": ["nombre_usuario", "correo", "contrasena", "nombre", "fecha_nacimiento", "creado_en"],
        "properties": {
          "nombre_usuario": {
            "bsonType": "string",
            "description": "debe ser una cadena y es requerido"
          },
          "correo": {
            "bsonType": "string",
            "pattern": "^.+@.+\..+$",
            "description": "debe ser un correo válido y es requerido"
          },
          "contrasena": {
            "bsonType": "string",
            "description": "debe ser una cadena y es requerido"
          },
          "nombre": {
            "bsonType": "string",
            "description": "debe ser una cadena y es requerido"
          },
          "fecha_nacimiento": {
            "bsonType": "date",
            "description": "debe ser una fecha y es requerido"
          },
          "genero": {
            "bsonType": "string",
            "enum": ["masculino", "femenino", "otro"],
            "description": "solo puede ser uno de los valores enumerados"
          },
          "ubicacion": {
            "bsonType": "string",
            "description": "debe ser una cadena"
          },
          "url_foto_perfil": {
            "bsonType": "string",
            "description": "debe ser una cadena"
          },
          "amigos": {
            "bsonType": "array",
            "items": {
              "bsonType": "objectId"
            }
          },
          "creado_en": {
            "bsonType": "date",
            "description": "debe ser una fecha y es requerido"
          }
        }
      }
    }
  })
  