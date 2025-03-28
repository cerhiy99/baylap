const { Op } = require("sequelize");
const ErrorApi = require("../error/ErrorApi");
const { Brends } = require("../models/models");

class BrednController {
    static Add = async (req, resp, next) => {
        try {
            const { name } = req.body;
            const res = await Brends.create({ name });
            return resp.json({err:'Успішно добавлено', res });
        } catch (err) {
            return next(
                ErrorApi.badRequest(
                    "Не вдалося додати бренд, скоріш за все бренд з такою назвою уже існує."
                )
            );
        }
    };

    static GetForLetter = async (req, resp, next) => {
        try {
            const { letter } = req.query;
            if(letter=='number'){
                const brendsWithNumber = await Brends.findAll({
                    where: {
                        name: {
                            [Op.regexp]: '^[0-9]', // Бренди, які починаються з цифри
                        },
                    },
                    order: [['name', 'ASC']], // Сортування за назвою
                });
                return resp.json({res:brendsWithNumber});
            }
            if (!letter || letter.length !== 1) {
                return next(
                    ErrorApi.badRequest("Необхідно вказати одну літеру, або 'number' для пошуку.")
                );
            }
            const res = await Brends.findAll({
                where: {
                    name: {
                        [Op.regexp]: `^${letter}`, // Пошук брендів, що починаються на letter
                    },
                },
                order: [['name', 'ASC']], // Сортування за назвою
            });
    
            return resp.json({ res });
        } catch (err) {
            return next(ErrorApi.badRequest(err.message || "Помилка при отриманні брендів."));
        }
    };
    
    static Get=async(req,resp,next)=>{
        try{
            const res=await Brends.findAll();
            return resp.json(res);
        }catch(err){
            return next(ErrorApi.badRequest(err));
        }
    }

    static GetFirstLetters=async(req,resp,next)=>{
        try{
            let res=[];
            const brendsWithNumber = await Brends.findAll({
                where: {
                    name: {
                        [Op.regexp]: '^[0-9]', // Бренди, які починаються з цифри
                    },
                },
                order: [['name', 'ASC']], // Сортування за назвою
            });
            res.push({startWith:'0-9',brends:brendsWithNumber});
            for(let letter of ['a','b','c','d','e',]){
                const brends = await Brends.findAll({
                    where: {
                        name: {
                            [Op.regexp]: `^${letter}`, // Для баз даних, які підтримують REGEXP
                        },
                    },
                    order: [['name', 'ASC']], // Сортування за назвою
                    limit:14
                });
                res.push({startWith:letter.toLocaleUpperCase(),brends});
            };

            return resp.json({res});
        }catch(err){
            return next(ErrorApi.badRequest(err.message));
        }
    }
}

module.exports = BrednController;
