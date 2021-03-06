module.exports = (sequelize, DataTypes) => sequelize.define(
    'goods',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        shop_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        thumb_url: DataTypes.STRING,
        price: DataTypes.FLOAT,
        discount_price: DataTypes.FLOAT,
        description: DataTypes.STRING,
    },
    {
        tableName: 'goods',
    },
);
