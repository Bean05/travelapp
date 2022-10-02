module.exports = {
  async up(queryInterface, Sequelize) {
    const memberArr = [
      {
        tripId: 1,
        userId: 2,
        request: true,
      },
      {
        tripId: 2,
        userId: 1,
        request: true,
      },
      {
        tripId: 1,
        userId: 1,
        request: true,
      },
    ];

    await queryInterface.bulkInsert('Memberships', memberArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Memberships', null, {});
  },
};
