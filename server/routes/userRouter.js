const router = require('express').Router();

router.post('/registration',(req, res) => {
    // обработчик для POST-запроса на /device
});
router.post('/login',(req, res) => {
    // обработчик для POST-запроса на /device
});
router.get('/auth', (req, res) => {
    res.json({message: 'AllWorking!'});
});


module.exports = router;