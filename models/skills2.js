module.exports = function (sequelize, DataTypes) {
    var skills2 = sequelize.define("skills2",
        {
            name: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    len: [1]
                }
            }
        });

    return skills2;
};