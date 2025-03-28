const ErrorApi = require("../error/ErrorApi");
const { Subcategory } = require("../models/models");

class SubcategoryController {
  static Add = async (req, resp, next) => {
    try {
      const { nameua, nameru, categoryId } = req.body;

      // Перевірка обов'язкових полів
      if (!nameua || !nameru || !categoryId) {
        return next(ErrorApi.badRequest("Всі поля повинні бути заповнені."));
      }
      // Перевірка на дублікати
      const existingSubcategory = await Subcategory.findOne({ where: { nameuk:nameua } });
      if (existingSubcategory) {
        return next(ErrorApi.badRequest("Підкатегорія з такою назвою вже існує."));
      }
      // Створення підкатегорії
      const newSubcategory = await Subcategory.create({
        nameuk:nameua,
        nameru,
        categoryId,
      });

      return resp.status(201).json({
        message: "Підкатегорія успішно додана.",
        data: newSubcategory,
      });
    } catch (err) {
      return next(ErrorApi.badRequest(err.message || "Сталася помилка."));
    }
  };
  static Get=async(req,resp,next)=>{
    try{
      const {categoryId}=req.query;
      const res=await Subcategory.findAll({where:{categoryId}});
      return resp.json({res});
    }catch(err){
      return next(ErrorApi.badRequest(err));
    }
  }
}

module.exports = SubcategoryController;
