module.exports = function (sequelize, DataTypes) {
    var skills3 = sequelize.define("skills3",
        {
            name: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    len: [1]
                }
            }
        });

    return skills3;
};