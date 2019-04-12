const { Router } = require('express'); 
const path = require('path');
const router = new Router();

// ruta que pinta el formulario
router.get('/', (req, res) => {
    res.render('index');
});

// ruta q se encarga de recibir las imágenes
router.post('/uploads', (req, res) => {
    console.log(req.file);
    // res.send('uploaded');
});

module.exports = router;
