import AdicionaTarefa from "./AdicionaTarefas";

export default function PaginaLista() {
    return (
        <div className={`
            flex flex-col w-screen justify-center items-center gap-5
        `}>
            <div className={`
                text-3xl text-blue-700 mt-10
            `}>Lista de Tarefas</div>

            <AdicionaTarefa />
            
        </div>
    )
}