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
      image:
        'https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom1.jpg?ts=1569489111&ims=544x',
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
      image:
        'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1603739403&ims=544x',
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
      image: 'https://i.zst.com.br/thumbs/12/2a/37/1296513572.jpg',
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
      image:
        'https://www.guller.com.br/7706-home_default/t%C3%AAnis-verde-neon-sneakers-plataforma-esportivo-cano-m%C3%A9dio-prova-d%C2%B4%C3%A1gua-macio-flex%C3%ADvel-masculino.jpg',
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
      image: 'asd',
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
      image:
        'https://s.zst.com.br/cms-assets/2020/12/tenis-nike-revolution-5-analise-ficha-tecnica-3-.png',
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
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT1NbNJnc_wNL-3pz9QHxdF_TPUyKh2Sxb7K_mQesW0hxhqCTHo8PsX5-su5xAr9PhweE&usqp=CAU',
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
      image:
        'https://cdnv2.moovin.com.br/rainhacalcados/imagens/produtos/det/tenis-masculino-adidas-runfalcon-d986d6369e9e9e39c995ff7338eacf4b.png',
    },
  ],
  offers: [
    {
      id: 9,
      name: 'Tenis nike',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 200.0,
      length: [39, 40, 41, 42, 45],
      color: ['red', 'blue', 'green'],
      rate: 5,
      deliveryDate: 20,
      isRebate: true,
      image:
        'https://cdnv2.moovin.com.br/belinhacalcados/imagens/produtos/det/tenis-nike-943306-404-revolution-4-gs-b1d89c98bebca22f99f63506292fa35d.png',
    },
    {
      id: 10,
      name: 'Tenis nike',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 1050.0,
      length: [39, 40, 41, 42, 45],
      color: ['red', 'blue', 'green'],
      rate: 5,
      deliveryDate: 20,
      isRebate: false,
      image:
        'https://cdnv2.moovin.com.br/girardirun/imagens/produtos/det/tenis-adidas-solar-blaze-41bdfe1511f8b1e690475708d11cd5b7.png',
    },
    {
      id: 11,
      name: 'Tenis nike',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 230.0,
      length: [39, 40, 41, 42, 45],
      color: ['red', 'blue', 'green'],
      rate: 5,
      deliveryDate: 20,
      isRebate: true,
      image:
        'https://e7.pngegg.com/pngimages/770/886/png-clipart-sneakers-nike-air-max-shoe-tennis-nike.png',
    },
    {
      id: 12,
      name: 'Tenis nike',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 200.0,
      length: [39, 40, 41, 42, 45],
      color: ['red', 'blue', 'green'],
      rate: 5,
      deliveryDate: 20,
      isRebate: true,
      image:
        'https://images.lojanike.com.br/1024x1024/produto/tenis-nike-alphadunk-masculino-BQ5401-900-1.png',
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
    const response = data.products.find(e => e.id === id);
    return res.status(StatusCodes.OK).json(response);
  }),
};
