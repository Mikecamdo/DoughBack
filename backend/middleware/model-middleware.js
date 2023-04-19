const Employees = require('../models/employees');
const Companies = require('../models/companies');
const Ceo = require('../models/ceo');
const Claims = require('../models/claims');
const FavoriteClaims = require('../models/favoriteClaims');
const createModelsMiddleware = async (req, res, next) => {
    req.models = {
        employees: Employees,
        companies: Companies,
        ceo: Ceo,
        claims: Claims,
        favoriteClaims: FavoriteClaims
    }
    next();
}
module.exports = createModelsMiddleware;
