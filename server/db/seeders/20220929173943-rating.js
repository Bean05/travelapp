module.exports = {
  async up(queryInterface, Sequelize) {
    const ratingArr = [
      {
        text: 'Летал с Ирой и Спейс в Рим! Очень дружелюбная, общительная и классная! Спейс просто покорила мое сердце!',
        author: 2,
        stars: 9,
        userId: 1,
      },
      {
        text: 'Илия очень интересный, харизматичный и добропорядочный человек. Путешествовать с ним одно удовольствие',
        author: 3,
        stars: 10,
        userId: 2,
      },
      {
        text: 'Позитивный, душевный и классный парень! Готов подписаться на любую авантюру!',
        author: 1,
        stars: 9,
        userId: 3,
      },
    ];

    await queryInterface.bulkInsert('Ratings', ratingArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ratings', null, {});
  },
};
