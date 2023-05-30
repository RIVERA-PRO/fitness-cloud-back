import Ejercicio from "../../models/Ejercicio.js";

const updateEjercicio = {
    update: async (req, res, next) => {
        try {
            const { id } = req.params;

            // Verificar si el ejercicio existe
            let ejercicio = await Ejercicio.findById(id);
            if (!ejercicio) {
                return res.status(404).json({
                    success: false,
                    message: "Ejercicio no encontrado",
                });
            }

            // Actualizar los datos del ejercicio si se proporcionan
            const { title, description, category, cover_photo } = req.body;

            const updatedFields = {};

            if (title) {
                updatedFields.title = title;
            }
            if (description) {
                updatedFields.description = description;
            }
            if (category) {
                updatedFields.category = category;
            }
            if (cover_photo) {
                updatedFields.cover_photo = cover_photo;
            }

            // Actualizar el ejercicio
            ejercicio = await Ejercicio.findByIdAndUpdate(
                id,
                { $set: updatedFields },
                { new: true }
            );

            return res.status(200).json({
                success: true,
                message: "Ejercicio actualizado exitosamente",
                ejercicio: ejercicio,
            });
        } catch (error) {
            next(error);
        }
    },
};

export default updateEjercicio;
