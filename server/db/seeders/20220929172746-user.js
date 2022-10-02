module.exports = {
  async up(queryInterface, Sequelize) {
    const usersArr = [
      {
        name: 'Ира&Спейс',
        email: 'ira@mail.ru',
        password: '123',
        phone: '8(916)764-62-81',
        social: 'https://www.instagram.com/veryire/',
        photo: 'https://www.muchosol.es/escapes/wp-content/uploads/sites/3/2018/04/viajar-sola-irina-muchosol-e1524048193413.png',
        about: 'Всем привет! Меня зовут Ира. В прошлом я была редактором Cosmopolitan, а сейчас я блогер, активно веду свой Instagram-аккаунт о путешествиях, в которых меня всегда сопровождает собака породы хаски Спейс. Она мой лучший друг.',
        age: 26,
        pets: 'милейшая собака',
        city: 'Нью-Йорк',
      },
      {
        name: 'Илия',
        email: 'ilia@mail.ru',
        password: '123',
        phone: '8(926)924-82-42',
        social: 'https://instagram.com/elivosk?igshid=MDE2OWE1N2Q=',
        photo: 'https://gate.undelete.news/uploads/elivosk/KdHduO2FFtFYIjrX6Asgf.jpg',
        about: 'Привет! Меня зовут Илия я обычный человек, муж, папа, фотограф. Люблю путешествовать по скандинавским странам, а так же по России',
        drivLic: 'Водительские права категории В',
        telegram: 'elivosk',
      },
      {
        name: 'Александр',
        email: 'sasha@mail.ru',
        password: '123',
        phone: '8(921)987-24-51',
        social: 'https://instagram.com/alex.mazurov?igshid=MDE2OWE1N2Q=',
        photo: 'https://worldsocialmedia.directory/wp-content/uploads/1-23846.jpg',
        about: 'Меня зовут Саша. Живу в Санкт-Петербурге, но очень часто путешествию по миру и по просторам родной страны',
        drivLic: 'Водительские права категории В',
        city: 'Санкт-Петербург',
        transport: 'SKODA OCTAVIA',
        telegram: 'withalexmazurov',
      },

    ];

    await queryInterface.bulkInsert('Users', usersArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
