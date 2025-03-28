const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { Goods, Img, Volume, ProductCategoryFilter } = require("../models/models");
const ErrorApi = require("../error/ErrorApi");

class GoodsControllers {
  static Add = async (req, resp, next) => {
    try {
      console.log('Volume:', req.body.volume);
      console.log('Files:', req.files);

      let {
        nameuk,
        nameru,
        descriptionuk,
        descriptionru,
        art,
        characteristicuk,
        characteristicru,
        brendId,
        categoryId,
        countryMadeId,
        subcategoryId,
        volume,
        filters,
      } = req.body;

      if (!nameuk || !nameru || !brendId || !categoryId || !countryMadeId) {
        return resp.status(400).json({ message: "Не всі обов'язкові дані передані" });
      }

      brendId = parseInt(brendId);
      categoryId = parseInt(categoryId);
      countryMadeId = parseInt(countryMadeId);
      subcategoryId = parseInt(subcategoryId);
      volume = JSON.parse(volume);
      filters = JSON.parse(filters);

      // Створюємо товар у БД
      const product = await Goods.create({
        nameuk,
        nameru,
        descriptionuk,
        descriptionru,
        art,
        characteristicuk,
        characteristicru,
        brendId,
        categoryId,
        countryMadeId,
        subcategoryId: subcategoryId == 0 ? null : subcategoryId,
      });

      const { files } = req;
      const uploadDir = path.resolve(__dirname, "..", "static");

      // Створюємо папку для збереження файлів, якщо її немає
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      // Обробка файлів
      if (files) {
        const imageFiles = Object.keys(files)
          .filter((key) => key.startsWith("imgs[")) // Фільтруємо файли для фото товару
          .map((key) => files[key]);
        const videoFile = files.video;

        // Зберігаємо фото товару
        /*for (const file of imageFiles) {
          // Якщо file є масивом (тобто це кілька файлів)
          if (Array.isArray(file)) {
            for (const img of file) {
              const fileName = uuidv4() + '.jpg'; // Фіксоване розширення
              const filePath = path.join(uploadDir, fileName);
              await img.mv(filePath); // Переміщаємо файл у директорію

              // Зберігаємо зображення для товару
              await Img.create({ img: fileName, volumeId: null, goodsId: product.id });
            }
          }
        }*/

        // Зберігаємо відео товару
        if (videoFile) {
          const videoName = uuidv4() + path.extname(videoFile.name);
          const videoPath = path.join(uploadDir, videoName);
          await videoFile.mv(videoPath);

          await product.update({ video: videoName });
        }
      }

        // Обробка варіацій товару (volume)
            if (volume && Array.isArray(volume)) {
                for (const [index, item] of volume.entries()) {
                    const { volume, price, discount, priceWithDiscount, images } = item;
                    const productId = product.id;

                    // Додаємо варіацію товару до таблиці Volume
                    const volumeEntry = await Volume.create({
                        volume,
                        price: parseFloat(price),
                        discount: parseFloat(discount),
                        priceWithDiscount: parseFloat(priceWithDiscount),
                        goodId: productId,
                    });

                    // Якщо є зображення для варіації
                    if (images && Array.isArray(images)) {
                        for (const imgIndex of images) {
                            // imgIndex — це індекс зображення, переданого з фронтенду
                            const imgFile = req.files[`imgs[${index}][${imgIndex}]`]; // Отримуємо відповідне зображення по індексах
                        
                            if (imgFile) {
                                const fileName = uuidv4() + path.extname(imgFile.name); // Генеруємо унікальну назву файлу
                                const filePath = path.join(uploadDir, fileName);
                                await imgFile.mv(filePath); // Переміщаємо файл у директорію

                                // Зберігаємо зображення в таблицю Img, прив'язуючи до варіації (volumeId)
                                await Img.create({ img: fileName, volumeId: volumeEntry.id });
                            } else {
                                console.log(`File not found for volume index ${index}, image index ${imgIndex}`);
                            }
                        
                    }
                }
            }

        }

  

      if (filters && Array.isArray(filters)) {
        for (const filter of filters) {
          const { filterCategoryId, valueuk, valueru } = filter;

          if (valueuk || valueru) {
            await ProductCategoryFilter.create({
              filterCategoryId,
              valueuk,
              valueru,
              goodId: product.id,
            });
          }
        }
      }

      resp.status(200).json({ message: "Товар і варіації успішно додані", product });
    } catch (err) {
      return next(ErrorApi.badRequest(err));
    }
  };
}

module.exports = GoodsControllers;
