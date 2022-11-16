import React from "react";

// function é mais recomendado
function Lista() {
    const item =[{
        tarefa: 'React',
        tempo:'02:00:00'
    },{
        tarefa: 'Javascript',
        tempo:'01:00:00'
    },{
        tarefa: 'Typescript',
        tempo:'03:00:00'
    }]
    return(
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {item.map((item, index) =>(
                    <li key={index} >
                        <h3>{item.tarefa}</h3>
                        <span> {item.tempo} </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;