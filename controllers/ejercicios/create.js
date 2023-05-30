import Ejercicio from "../../models/Ejercicio.js";
import User from "../../models/User.js";

const ejercicios = {
    create: async (req, res, next) => {
        try {
            const { img, paso1, paso2, paso3, paso4, paso5, paso6, paso7, paso8, paso9, paso10, consejo1, consejo2, consejo3, consejo4, consejo5, fondo, mail, photo, name, title, categoria, description, user_id } = req.body;
            const user = await User.findById(user_id); // encuentra el usuario por su id

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found!",
                });
            }

            const ejercicio = await Ejercicio.create({

                title,
                img,
                fondo,
                description,
                categoria,
                name,
                photo,
                mail,
                consejo1,
                consejo2,
                consejo3,
                consejo4,
                consejo5,
                paso1,
                paso2,
                paso3,
                paso4,
                paso5,
                paso6,
                paso7,
                paso8,
                paso9,
                paso10,

                user_id: req.user._id // Agregar el user_id aquí
            });

            console.log(req.body)

            return res.status(201).json({
                success: true,
                message: "Ejercicio creado",
                ejercicio,
            });
        } catch (err) {
            next(err);
        }
    },
};

export default ejercicios;
