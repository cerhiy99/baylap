const axios = require('axios');
const ErrorApi = require('../error/ErrorApi');

class ReviewsController {
    static GetAllReviews = async (req, resp, next) => {
        try {
            let {lang}=req.query;
            const language=lang=='ua'?'uk':'ru_RU'
            const GOOGLE_API_KEY = process.env.API_KEY_GOOGLE_CLOUD_FOR_GET_REVIEWS;
            const PLACE_ID = process.env.ID_PLASES_ON_GOOGL_MAPS;

            // Формування URL
            const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}&language=${language}`;

            // Виконання запиту до Google Places API
            const response = await axios.get(url);

            // Перевірка статусу API
            if (response.data.status !== 'OK') {
                console.error('Помилка API:', response.data.status, response.data.error_message);
                return resp.status(400).json({ message: `Помилка API: ${response.data.status}` });
            }

            // Обробка відгуків
            const reviews = response.data.result.reviews.map(review => ({
                author_name: review.author_name,
                rating: review.rating,
                text: review.text, // Текст в оригінальній мові
                language: review.language, // Код мови відгуку
            }));

            if (!reviews || reviews.length === 0) {
                return resp.status(404).json({ message: 'Відгуки не знайдено' });
            }

            // Розрахунок середнього балу
            const totalRatings = reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
            const averageRating = totalRatings / reviews.length;

            // Відправка відгуків та середнього балу
            return resp.status(200).json({
                reviews,
                averageRating: parseFloat(averageRating.toFixed(2)), // Округлення до двох знаків
            });
        } catch (err) {
            console.error('Помилка отримання відгуків:', err.message);
            return next(ErrorApi.badRequest(err.message));
        }
    };
}

module.exports = ReviewsController;
