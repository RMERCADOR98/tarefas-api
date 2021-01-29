import sequelize from "sequelize";
import db from "../Config/db.config";

const Tarefas = db.define(
  "Tarefas",
  {
    tarefa: {
      type: sequelize.STRING,
    },
    estado: {
      type: sequelize.STRING,
    },
  },
  {
    tableName: "tarefas",
  }
);

export default Tarefas;
