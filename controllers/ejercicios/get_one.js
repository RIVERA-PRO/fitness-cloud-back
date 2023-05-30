import Ejercicio from "../../models/Ejercicio.js";

const oneEje = {
    getOne: async (req, res, next) => {
        try {
            const ejercicio = await Ejercicio.findOne({ _id: req.params.id });

            if (ejercicio) {
                return res.status(200).json({
                    ejercicio: ejercicio
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "This Ejercicio doesn't exist!",
                });
            }
        } catch (error) {
            next(error);
        }
    },
};

export default oneEje;
