const ErrorApi = require("../error/ErrorApi");
const { Subcategory } = require("../models/models");

class SubcategoryController {
  static Add = async (req, resp, next) => {
    try {
      const { nameua, nameru, categoryTitleId, url } = req.body;

      // Перевірка обов'язкових полів
      if (!nameua || !nameru || !categoryTitleId) {
        return next(ErrorApi.badRequest("Всі поля повинні бути заповнені."));
      }

      // Перевірка на дублікати
      const existingSubcategory = await Subcategory.findOne({ where: { nameua } });
      if (existingSubcategory) {
        return next(ErrorApi.badRequest("Підкатегорія з такою назвою вже існує."));
      }

      // Створення підкатегорії
      const newSubcategory = await Subcategory.create({
        nameua,
        nameru,
        categoryTitleId,
        url
      });

      return resp.status(201).json({
        message: "Підкатегорія успішно додана.",
        data: newSubcategory,
      });
    } catch (err) {
      return next(ErrorApi.badRequest(err.message || "Сталася помилка."));
    }
  };
}

module.exports = SubcategoryController;
