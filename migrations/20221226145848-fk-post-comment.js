'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Comments', 'post_Id', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint('Comments', {
      fields: ['post_Id'],
      type: 'foreign key',
      name: 'post_comment_id_fk',
      references: {
        table: 'Posts',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Comments', 'post_Id');
  }
};
