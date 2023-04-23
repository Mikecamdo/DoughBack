const bodyParser = require('body-parser');
const express = require('express');
router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res, next) => {
    try {
        const { name, email, password} = req.body;
        const registerCeo = await req.models.ceo.createCeo(name, email, password);
        res.status(201).json(registerCeo);    
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            res.status(201).json({
                message: 'Email already in use. Please use another email or log in to your existing account.'
            });
        }
    }
    next();
})

router.get('/', async (req, res, next) => {
    if (req.query.ceo_id) {
        const ceoById = await req.models.ceo.getCeoById(req.query.ceo_id);
        res.json(ceoById);
        next();
    } else if (req.query.cemail) {
        const ceoByEmail = await req.models.ceo.getCeoByEmail(req.query.cemail);
        res.json(ceoByEmail);
        next();
    } else {
        const allCeo = await req.models.ceo.getAllCeo();
        res.json(allCeo);
        next();
    }
})

router.delete('/', async (req, res, next) => {
    if (req.query.ceo_id) {
        const DeleteCeoById = await req.models.ceo.DeleteCEOById(req.query.ceo_id);
        res.json(DeleteCeoById);
        next();
    }
})

module.exports = router;