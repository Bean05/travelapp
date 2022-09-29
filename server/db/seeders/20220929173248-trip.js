module.exports = {
  async up(queryInterface, Sequelize) {
    const tripArr = [
      {
        tripName: 'Поездка на Байкал',
        date: '2023-02-20',
        cityStart: 'Cанкт-Петербург',
        cityWhere: 'Иркутск',
        aboutMembers: 'Ищу активных путешественников, которые не боятся холода и готовы увидеть вживую всю красоту зимнего Байкала!',
        aboutTrip: 'Планирую пробыть на Байкале около недели. Покататься на коньках по озеру, проехаться на знаменитом хивусе и посетить Ольхон.',
        membersCount: 5,
        userId: 3,
      },
      {
        tripName: 'Осенний Дагестан',
        date: '2022-10-15',
        cityStart: 'Москва',
        cityWhere: 'Махачкала',
        aboutMembers: 'Если ты любишь горы также, как и я, не боишься сложностей и готов подниматься пешком, чтобы увидеть красоту Гамсутля высоко в горах, то ты тот, кто мне нужен!',
        aboutTrip: 'Планирую арендовать машину в Махачкале и самостоятель построить маршрут по красотам Дагестана. Планирую пробыть там около 5 дней',
        membersCount: 3,
        userId: 2,
      },
    ];

    await queryInterface.bulkInsert('Trips', tripArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Trips', null, {});
  },
};
