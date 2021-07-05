import db from "../Config/db.config";
import Tarefas from "../Models/bloco.model";

db.sync();

const todasTarefas = async (req, res) => {
  try {
    const data = await Tarefas.findAll();
    res.json(data);
  } catch (err) {
    throw new Error(err);
  }
};

const fazerTarefas = async (req, res) => {
  try {
    const data = await Tarefas.findAll({
      where: {
        estado: "fazer",
      },
    });
    res.json(data);
  } catch (err) {
    throw new Error(err);
  }
};

const fazendoTarefas = async (req, res) => {
  try {
    const data = await Tarefas.findAll({
      where: {
        estado: "fazendo",
      },
    });
    res.json(data);
  } catch (err) {
    throw new Error(err);
  }
};

const feitoTarefas = async (req, res) => {
  try {
    const data = await Tarefas.findAll({
      where: {
        estado: "feito",
      },
    });
    res.json(data);
  } catch (err) {
    throw new Error(err);
  }
};

const criarTarefa = async (req, res) => {
  //   const data = await Tarefas.create(req.body);

  try {
    const { tarefa, estado } = req.body;
    const data = await Tarefas.create({
      tarefa: tarefa,
      estado: estado,
    });
    res.json(data);
  } catch (err) {
    throw new Error(err);
  }
};

const apagarTarefa = async (req, res) => {
  try {
    const { id } = req.params;

    await Tarefas.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(200);
  } catch (err) {
    throw new Error(err);
  }
};

const editarTarefa = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Tarefas.update(req.body, {
      where: {
        id: id,
      },
    });

    res.json(data);
  } catch (err) {
    throw new Error(err);
  }
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
