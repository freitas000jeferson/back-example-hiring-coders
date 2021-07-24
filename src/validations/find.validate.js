const yup = require('yup');

const id = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};
const list = {
  query: yup.object().shape({
    page: yup
      .number()
      .integer()
      .default(1),
    perPage: yup
      .number()
      .integer()
      .default(10),
    sortBy: yup
      .string()
      .default('createdAt:desc')
      .matches(
        /[:](asc|desc)/i,
        "sorting order must be one of the following: 'asc' or 'desc'"
      ),
  }),
};

module.exports.find = {
  id,
  list,
};
