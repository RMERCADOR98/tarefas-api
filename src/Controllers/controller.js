import db from "../Config/db.config";
import Tarefas from "../Models/bloco.model";

db.sync();

const todasTarefas = async (req, res) => {
  const data = await Tarefas.findAll();

  res.json(data);
};

const fazerTarefas = async (req, res) => {
  const data = await Tarefas.findAll({
    where: {
      estado: "fazer",
    },
  });
  res.json(data);
};
const fazendoTarefas = async (req, res) => {
  const data = await Tarefas.findAll({
    where: {
      estado: "fazendo",
    },
  });
  res.json(data);
};
const feitoTarefas = async (req, res) => {
  const data = await Tarefas.findAll({
    where: {
      estado: "feito",
    },
  });
  res.json(data);
};

const criarTarefa = async (req, res) => {
  //   const data = await Tarefas.create(req.body);

  const { tarefa, estado } = req.body;

  const data = await Tarefas.create({
    tarefa: tarefa,
    estado: estado,
  });

  res.json(data);
};

const apagarTarefa = async (req, res) => {
  const { id } = req.params;

  await Tarefas.destroy({
    where: {
      id: id,
    },
  });
  res.sendStatus(200);
};

const editarTarefa = async (req, res) => {
  const { id } = req.params;

  const data = await Tarefas.update(req.body, {
    where: {
      id: id,
    },
  });
  res.json(data);
};

// const hello = (req, res) => {
//   res.json({
//     mensagem: "Hello from the controller",
//   });
// };

export {
  todasTarefas,
  criarTarefa,
  apagarTarefa,
  editarTarefa,
  fazerTarefas,
  fazendoTarefas,
  feitoTarefas,
};