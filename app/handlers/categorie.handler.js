const Categorie = require('../models/Categorie'); // Importar el modelo Categorie

const listCategories = async (req, res) => {
    try {
        const categories = await Categorie.getCategories();
        res.json(categories); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const insertCategorie = async (req, res) => {
    try {
        const { name, description } = req.body;

        // Verificar que el campo obligatorio está presente
        if (!name) {
            return res.status(400).json({ error: 'El campo name es obligatorio' });
        }

        const categorie = await Categorie.insert({ name, description });
        res.status(201).json(categorie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCategorie = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;

        if (!name && !description) {
            return res.status(400).json({ error: 'Debe proporcionar al menos uno de los campos a actualizar: name, description' });
        }

        const categorie = await Categorie.update({ name, description }, id);
        res.json(categorie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCategorie = async (req, res) => {
    try {
        await Categorie.delete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listCategories,
    insertCategorie,
    updateCategorie,
    deleteCategorie,
};
    