const path = require("path");
const uuid = require("uuid");
const ErrorApi = require("../error/ErrorApi"); // Замініть на ваш шлях до ErrorApi
const { Category, CategoryTitle } = require("../models/models");

class CategoryController {
  static Add = async (req, resp, next) => {
    try {
      console.log(434);
      console.log()
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

      const res=await Category.create({nameuk:nameua,nameru,svg:svgName,url});

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


}

module.exports = CategoryController;
