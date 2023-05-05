const router = require('express').Router();


router.post('/', (req, res) => {
    // обработчик для POST-запроса на /device
});

router.get('/', (req, res) => {
    // обработчик для GET-запроса на /device
});

router.get('/:id', (req, res) => {
    // обработчик для GET-запроса на /device/:id
});



module.exports = router;