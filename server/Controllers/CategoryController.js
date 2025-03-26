const path = require("path");
const uuid = require("uuid");
const ErrorApi = require("../error/ErrorApi"); // Замініть на ваш шлях до ErrorApi
const { Category, CategoryTitle } = require("../models/models");

class CategoryController {
  static Add = async (req, resp, next) => {
    try {
      const { nameua, nameru, url } = req.body;
      // Перевірка полів
      if (!nameua || !nameru) {
        return next(ErrorApi.badRequest("Всі текстові поля повинні бути заповнені."));
      }

      let svgName = null;

      // Перевірка та збереження SVG-файлу
      if (req.files && req.files.svg) {
        const { svg } = req.files;

        // Перевірка типу файлу
        if (!svg.mimetype.includes("svg")) {
          return next(ErrorApi.badRequest("Файл повинен бути формату SVG."));
        }

        // Генерація унікального імені для SVG
        svgName = uuid.v4() + ".svg";

        // Шлях до директорії збереження файлів
        const svgPath = path.resolve(__dirname, "..", "static", svgName);

        // Збереження файлу
        await svg.mv(svgPath);
      } else {
        return next(ErrorApi.badRequest("SVG-файл є обов'язковим."));
      }

      const res=await Category.create({nameua,nameru,svg:svgName,url});

      return resp.json({ res, message: "Категорія успішно додана." });
    } catch (err) {
      return next(ErrorApi.badRequest(err.message || "Сталася помилка."));
    }
  };

  static Get=async(req,resp,next)=>{
    try{
        const res=await Category.findAll();
        return resp.json({res});
    }catch(err){
        return next(ErrorApi.badRequest(err));
    }
  }
  static AddTitlteCategory = async (req, resp, next) => {
    try {
      const { nameua, nameru, idCategory } = req.body;

      // Перевірка обов'язкових полів
      if (!nameua || !nameru || !idCategory) {
        return next(ErrorApi.badRequest("Всі поля повинні бути заповнені."));
      }

      // Перевірка на дублікати
      const existingTitle = await CategoryTitle.findOne({
        where: { nameua },
      });
      if (existingTitle) {
        return next(ErrorApi.badRequest("Титул з такою назвою вже існує."));
      }

      // Створення нового запису
      const newTitle = await CategoryTitle.create({
        nameua,
        nameru,
        categoryId: idCategory,
      });

      return resp.status(201).json({
        message: "Титул категорії успішно додано.",
        data: newTitle,
      });
    } catch (err) {
      return next(ErrorApi.badRequest(err.message || "Сталася помилка."));
    }
  };

  static GetTitleCategories=async(req,resp,next)=>{
    try{
        let {categoryId}=req.query;
        categoryId=parseInt(categoryId);
        const res=await CategoryTitle.findAll({where:{categoryId}});
        return resp.json({res});
    }catch(err){
        return next(ErrorApi.badRequest(err));
    }
  }


}

module.exports = CategoryController;
