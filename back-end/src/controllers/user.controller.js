const { login } = require('../services/user.service');

const validLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await login(email, password);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { email, password, nome } = req.body;
    const result = await create(email, password, nome);
    return res.status(201).json({ ok: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validLogin,
  create,
};
