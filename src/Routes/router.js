import express from "express";
import {
  todasTarefas,
  criarTarefa,
  apagarTarefa,
  editarTarefa,
  fazerTarefas,
  fazendoTarefas,
  feitoTarefas,
} from "../Controllers/controller";

const router = express.Router();

router.get("/", todasTarefas);
router.get("/fazerTarefas", fazerTarefas);
router.get("/fazendoTarefas", fazendoTarefas);
router.get("/feitoTarefas", feitoTarefas);
router.post("/criarTarefa", criarTarefa);
router.delete("/:id", apagarTarefa);
router.put("/editarTarefa/:id", editarTarefa);

export default router;
