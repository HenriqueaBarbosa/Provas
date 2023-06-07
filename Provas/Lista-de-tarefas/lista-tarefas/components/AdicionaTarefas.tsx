import { IconSquareRoundedPlus, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import ContadorTarefas from "./ContadorTarefas";

interface Tarefa {
  texto: string;
  concluida: boolean;
}

export default function AdicionaTarefa() {
  const [tarefa, setTarefa] = useState<string>("");
  const [contador, setContador] = useState<number>(0);
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  
  const handleTarefa = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTarefa(event.target.value);
  };

  const increment = () => {
    setContador(contador + 1);
  };

  const adicionarTarefa = () => {
    if (tarefa.trim() !== "") {
      setTarefas([...tarefas, { texto: tarefa, concluida: false }]);
      setTarefa("");
      increment();
    }
  };

  const handleChange = (index: number) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  };

  const removerTarefa = (index: number) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
    setContador(contador - 1);
  };

  return (
    <div className="w-full h-{9999px} flex justify-center items-center gap-2 flex-col mt-10">
      <div className="flex gap-2 m-10">
        <input
          className="border rounded-md h-9 w-96 pl-3"
          onChange={handleTarefa}
          value={tarefa}
          placeholder="Adicione uma nova tarefa"
          type="text"
        />

        <button
          onClick={adicionarTarefa}
          className="flex gap-2 h-9 justify-center items-center bg-blue-400 rounded-md p-2 text-lg text-white font-bold"
        >
          Criar <IconSquareRoundedPlus stroke={2} size={22} />
        </button>
      </div>

      <ContadorTarefas contador={contador} />

      <ul className="h-96">
        {tarefas.map((item, index) => (
          <li
            className={`flex gap-1 bg-blue-400 m-1 rounded-md p-1 text-white justify-between ${
              item.concluida ? 'line-through' : ''
            }`}
            key={index}
          >
            <div className="flex gap-2">
            <input
              className="cursor-pointer"
              type="checkbox"
              checked={item.concluida}
              onChange={() => handleChange(index)}
            />
            {item.texto}
            </div>
            <button onClick={() => removerTarefa(index)}>
              <IconTrash stroke={2} size={22} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
