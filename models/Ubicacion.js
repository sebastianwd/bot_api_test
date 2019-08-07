const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const random = require("mongoose-simple-random");

const UbicacionSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true
    },
    descripcion: {
      type: String
    },
    horario_atencion: {
      type: String
    },
    direccion: {
      type: String
    },
    contacto: {
      type: String
    },
    imagen_url: {
      type: String
    },
    tipo: {
      type: String
    }
  },
  { collection: "ubicaciones" }
);
UbicacionSchema.plugin(random);

module.exports = Ubicacion = mongoose.model("ubicacion", UbicacionSchema);
