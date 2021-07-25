const router = require('express').Router();
const { productController } = require('../controllers');
const { validate } = require('../middlewares');
const {
  validationSchemas: { find },
} = require('../validations');

router.get('/', validate(find.list), productController.get);
router.get('/:id', validate(find.id), productController.findbyId);
router.get('/offers', validate(find.list), productController.offers);

module.exports.products = router;
