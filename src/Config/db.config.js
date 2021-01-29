import Sequelize from "sequelize";

// Option 2: Passing parameters separately (other dialects)
const db = new Sequelize(process.env.DATABASE_URL);

export default db;
