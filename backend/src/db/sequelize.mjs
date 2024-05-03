import { Sequelize } from "sequelize";

// the config for the sequelize connection to the psql db
const sequelize = new Sequelize({
  dialect: "postgres",
  username: "user",
  host: "postgresql",
  database: "mydatabase",
  password: "password",
  port: 5432,
  define: {
    timestamps: true,
    // by default sequelize is camelcase (i.e. 'createdAt') and psql cant handle camelcase
    //   we want to default all db names to use underscores as well (i.e. 'created_atjok')
    underscored: true,
  },
});

export { sequelize };
