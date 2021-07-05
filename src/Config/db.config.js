import Sequelize from "sequelize";

let db;

process.env.NODE_ENV === "dev"
  ? (db = new Sequelize(process.env.DATABASE_URL, {
      dialect: "postgres",
      protocol: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }))
  : (db = new Sequelize(process.env.DATABASE_URL));

export default db;
