const validateContract = (validation, stripUnknown = true) =>
            (req, res, next) => {
                try {
                    const schemaOptions = { abortEarly: false, convert: false, allowUnknown: true, stripUnknown };
                    Object.keys(validation).forEach((validationKey) => {
                        const { error, value } = validation[validationKey].validate(req[validationKey], schemaOptions);

                        if (error) {
                            //return res.status(400).send({ message: error.details });
                            //const err = new e
                            //err.details = error.details;

                            throw error;
                        }

                        req[validationKey] = value;
                    });

                    return next();
                } catch (error) {
                    return next(error);
                }
            }

module.exports = validateContract;
