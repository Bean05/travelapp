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
      {
        tripId: 1,
        userId: 7,
        request: true,
      },
      {
        tripId: 2,
        userId: 10,
        request: true,
      },
      {
        tripId: 3,
        userId: 7,
        request: true,
      },
      {
        tripId: 3,
        userId: 5,
        request: true,
      },
      {
        tripId: 3,
        userId: 9,
        request: true,
      },
      {
        tripId: 3,
        userId: 4,
        request: true,
      },
      {
        tripId: 4,
        userId: 1,
        request: true,
      },
      {
        tripId: 4,
        userId: 8,
        request: true,
      },
      {
        tripId: 4,
        userId: 7,
        request: true,
      },
      {
        tripId: 4,
        userId: 10,
        request: true,
      },
      {
        tripId: 5,
        userId: 9,
        request: true,
      },
      {
        tripId: 5,
        userId: 7,
        request: true,
      },
      {
        tripId: 5,
        userId: 10,
        request: true,
      },
      {
        tripId: 6,
        userId: 2,
        request: true,
      },
      {
        tripId: 6,
        userId: 8,
        request: true,
      },
      {
        tripId: 7,
        userId: 2,
        request: true,
      },
      {
        tripId: 7,
        userId: 3,
        request: true,
      },
      {
        tripId: 7,
        userId: 4,
        request: true,
      },
      {
        tripId: 8,
        userId: 2,
        request: true,
      },
      {
        tripId: 8,
        userId: 3,
        request: true,
      },
      {
        tripId: 9,
        userId: 6,
        request: true,
      },
      {
        tripId: 10,
        userId: 7,
        request: true,
      },
      {
        tripId: 10,
        userId: 8,
        request: true,
      },
      {
        tripId: 10,
        userId: 9,
        request: true,
      },
      {
        tripId: 11,
        userId: 10,
        request: true,
      },
      {
        tripId: 11,
        userId: 9,
        request: true,
      },
      {
        tripId: 11,
        userId: 8,
        request: true,
      },
      {
        tripId: 11,
        userId: 7,
        request: true,
      },
      {
        tripId: 11,
        userId: 3,
        request: true,
      },
      {
        tripId: 13,
        userId: 4,
        request: true,
      },
      {
        tripId: 13,
        userId: 5,
        request: true,
      },
      {
        tripId: 13,
        userId: 6,
        request: true,
      },
      {
        tripId: 13,
        userId: 7,
        request: true,
      },
      {
        tripId: 13,
        userId: 8,
        request: true,
      },
      {
        tripId: 14,
        userId: 5,
        request: true,
      },
      {
        tripId: 15,
        userId: 8,
        request: true,
      },
      {
        tripId: 15,
        userId: 9,
        request: true,
      },
      {
        tripId: 15,
        userId: 10,
        request: true,
      },
      {
        tripId: 16,
        userId: 4,
        request: true,
      },
    ];

    await queryInterface.bulkInsert('Memberships', memberArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Memberships', null, {});
  },
};