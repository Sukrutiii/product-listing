const router = require('express').Router()
const auth = require('../middlewares/auth')
const ProductCtrl = require('../controllers/productController')
router.route('/')
      .get(ProductCtrl.getProducts)
      .post(auth,ProductCtrl.createProduct)

router.route('/:id').put(auth,ProductCtrl.updateProduct).delete(auth,ProductCtrl.deleteProduct)
router.route('/comment/').post(auth,ProductCtrl.commentProduct);
router.route('/upvote/').post(auth,ProductCtrl.upvoteProduct);

module.exports = router