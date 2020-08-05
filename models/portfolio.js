module.exports = function (sequelize, DataTypes) {
    var portfolio = sequelize.define("portfolio",
        {
            name: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    len: [1]
                }
            },
            img: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    len: [1]
                }
            },
            live: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    len: [1]
                }
            },
            repo: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    len: [1]
                }
            },
        });

    return portfolio;
};