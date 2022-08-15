const { sales } = require('../database/models');

const createSale = async (newSale) => {
  const { 
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products, 
  } = newSale;

  const saleDate = new Date();
  const status = 'pendente';
  const result = await sales.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status,
    products,
  });

  const { id } = result.dataValues;
  return id;
};

const getAllSales = async () => {
  const result = await sales.findAll();

  return result;
};

const getSaleById = async (id) => {
  const result = await sales.findOne({
    where: { id },
  });

  return result;
};

module.exports = {
  createSale,
  getAllSales,
  getSaleById,
}; 