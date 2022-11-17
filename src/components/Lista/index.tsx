import { Itarefa } from "../../types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss';

interface Props {
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

// function é mais recomendado
function Lista({ tarefas, selecionaTarefa }:Props) {
    //use associar com hook
    /* useState retorna um par: o valor do state atual e uma função que permite atualizá-lo. Você pode chamar essa função a partir de um manipulador de evento ou de qualquer outro lugar. É parecido com this. setState em uma classe, exceto que não mescla o antigo state com o novo. */
    return(
        <aside className={style.listaTarefas} >
            <h2 >Estudos do dia</h2>
            <ul>
                {tarefas.map(item =>(
                    <Item 
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;