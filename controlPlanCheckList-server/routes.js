const express = require('express');
const verifyToken = require('../../middlewares/verifyTokenAuthorization');

const {
  createModule,
  getByMonth,
  getModuleById,
  updateModule,
  deleteModule,
} = require('./controller');
const router = express.Router();

router.get('/monthly/:date', verifyToken, getByMonth);
router.post('/', verifyToken, createModule);
router.get('/:id', verifyToken, getModuleById);
router.put('/:id', verifyToken, updateModule);
router.delete('/:id', verifyToken, deleteModule);
module.exports = router;
