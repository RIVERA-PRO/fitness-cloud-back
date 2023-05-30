import Ejercicio from "../../models/Ejercicio.js";

const destroyE = {
    destroy: async (req, res, next) => {
        try {
            let ejercicio = await Ejercicio.findOneAndDelete(
                { _id: req.params.id }
            );
            if (ejercicio) {
                return res.status(200).json({
                    success: true,
                    message: "ejercicio eliminado",
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: "ejercicio not found",
                });
            }
        } catch (error) {
            next(error);
        }
    },
};

export default destroyE;
