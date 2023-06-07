interface Props {
    contador: number;
}

export default function ContadorTarefas(props: Props) {
    
    return (
        <div>
            Tarefas criadas {props.contador}
        </div>
    )
}