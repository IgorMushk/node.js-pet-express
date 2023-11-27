const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(
      {
        query: req.query,
        body: req.body,
        params: req.params,
      },
      { abortEarly: false },
    );
    next();
  } catch (err) {
      next(err);
  }
};


// const validate = (schema) => async (req, res, next) => {
//     try {
//         //const value = await schema.validateAsync(req);
//         const value = await schema.validateAsync(req.body);
//         //console.log(value);
//         next();
//     }
//     catch (err) { 
//         next(err);
//     }
// };


module.exports = validate;