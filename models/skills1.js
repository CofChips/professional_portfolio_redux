module.exports = function (sequelize, DataTypes) {
    var skills1 = sequelize.define("skills1",
        {
            name: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    len: [1]
                }
            }
        });

    return skills1;
};