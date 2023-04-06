const jobsheetController = require('../controllers/jobsheet');
const router = require('express').Router();

router.post('/one', jobsheetController.sumbitOne);
router.post('/many', jobsheetController.sumbitMany);

module.exports = router;