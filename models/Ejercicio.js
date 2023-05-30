import mongoose from 'mongoose'

let schema = new mongoose.Schema(
  {

    user_id: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    name: { type: String, required: false, ref: "user" },
    mail: { type: String, required: false, ref: "user" },
    photo: { type: String, required: false, ref: "user" },
    title: { type: String, required: true },
    fondo: { type: String, required: false },
    img: { type: String, required: false },
    description: { type: String, required: true },
    categoria: { type: String, required: true },
    paso1: { type: String, required: false },
    paso2: { type: String, required: false },
    paso3: { type: String, required: false },
    paso4: { type: String, required: false },
    paso5: { type: String, required: false },
    paso6: { type: String, required: false },
    paso7: { type: String, required: false },
    paso8: { type: String, required: false },
    paso9: { type: String, required: false },
    paso10: { type: String, required: false },
    consejo1: { type: String, required: false },
    consejo2: { type: String, required: false },
    consejo3: { type: String, required: false },
    consejo4: { type: String, required: false },
    consejo5: { type: String, required: false },

  }, {
  timestamps: true
}

);
let Destino = mongoose.model("ejercicio", schema);
export default Destino;


