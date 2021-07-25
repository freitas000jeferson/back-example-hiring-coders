const { StatusCodes } = require('http-status-codes');
const { catchAsync } = require('../utils');

const data = {
  products: [
    {
      id: 1,
      name: 'Tenis nike',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 200.0,
      length: [39, 40, 41, 42, 45],
      color: ['red', 'blue', 'green'],
      rate: 5,
      deliveryDate: 20,
      isRebate: true,
    },
    {
      id: 2,
      name: 'Tenis nike',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 1050.0,
      length: [39, 40, 41, 42, 45],
      color: ['red', 'blue', 'green'],
      rate: 5,
      deliveryDate: 20,
      isRebate: false,
    },
    {
      id: 3,
      name: 'Tenis nike',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 230.0,
      length: [39, 40, 41, 42, 45],
      color: ['red', 'blue', 'green'],
      rate: 5,
      deliveryDate: 20,
      isRebate: true,
    },
    {
      id: 4,
      name: 'Tenis nike',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 200.0,
      length: [39, 40, 41, 42, 45],
      color: ['red', 'blue', 'green'],
      rate: 5,
      deliveryDate: 20,
      isRebate: true,
    },
    {
      id: 5,
      name: 'Tenis nike',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 100.0,
      length: [39, 40, 41, 42, 45],
      color: ['red', 'blue', 'green'],
      rate: 5,
      deliveryDate: 20,
      isRebate: false,
    },
    {
      id: 6,
      name: 'Tenis nike',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 200.0,
      length: [39, 40, 41, 42, 45],
      color: ['red', 'blue', 'green'],
      rate: 5,
      deliveryDate: 20,
      isRebate: true,
    },
    {
      id: 7,
      name: 'Tenis nike',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 480.0,
      length: [39, 40, 41, 42, 45],
      color: ['red', 'blue', 'green'],
      rate: 5,
      deliveryDate: 20,
      isRebate: false,
    },
    {
      id: 8,
      name: 'Tenis nike',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 500.0,
      length: [39, 40, 41, 42, 45],
      color: ['red', 'blue', 'green'],
      rate: 5,
      deliveryDate: 20,
      isRebate: false,
    },
  ],
  offers: [
    {
      id: 1,
      name: 'Tenis nike',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 200.0,
      length: [39, 40, 41, 42, 45],
      color: ['red', 'blue', 'green'],
      rate: 5,
      deliveryDate: 20,
      isRebate: true,
    },
    {
      id: 2,
      name: 'Tenis nike',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 1050.0,
      length: [39, 40, 41, 42, 45],
      color: ['red', 'blue', 'green'],
      rate: 5,
      deliveryDate: 20,
      isRebate: false,
    },
    {
      id: 3,
      name: 'Tenis nike',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 230.0,
      length: [39, 40, 41, 42, 45],
      color: ['red', 'blue', 'green'],
      rate: 5,
      deliveryDate: 20,
      isRebate: true,
    },
    {
      id: 4,
      name: 'Tenis nike',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 200.0,
      length: [39, 40, 41, 42, 45],
      color: ['red', 'blue', 'green'],
      rate: 5,
      deliveryDate: 20,
      isRebate: true,
    },
  ],
};
module.exports = {
  get: catchAsync(async (req, res) => {
    const response = data.products;
    return res.status(StatusCodes.OK).json(response);
  }),
  offers: catchAsync(async (req, res) => {
    const response = data.offers;
    return res.status(StatusCodes.OK).json(response);
  }),
  findbyId: catchAsync(async (req, res) => {
    const {
      params: { id },
    } = req;
    const response = data.products.find((e) => e.id === id);
    return res.status(StatusCodes.OK).json(response);
  }),
};
