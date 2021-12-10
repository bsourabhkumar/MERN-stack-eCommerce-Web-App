const express = require('express');
const {
  getAllProducts,
  addNewProduct,
  updateProduct,
  getSingleProduct,
  deleteProduct,
  findProducts,
} = require('../controllers/productsController');

const router = express.Router();

router.route('/').get(getAllProducts).post(addNewProduct);
router
  .route('/:id')
  .patch(updateProduct)
  .get(getSingleProduct)
  .delete(deleteProduct);
router.route('/search').post(findProducts);

module.exports = router;
