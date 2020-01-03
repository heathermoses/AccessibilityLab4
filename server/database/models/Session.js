module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'Session',
		{
			usersessionid : {
				type: DataTypes.NUMBER(21),
				allowNull: false,
				unique: true,
				primaryKey: true,
				autoIncrement: true
			},
			userid: {
				type: DataTypes.INTEGER
			}
		},
		{ tableName: 'session' }
	);

};
