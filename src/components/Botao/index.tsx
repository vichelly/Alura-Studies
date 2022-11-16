import React from "react";
import style from './Botao.module.scss';

/* O children estava dando erro, resolver com 
<any,any> */

class Botao extends React.Component<any, any>{
    render(){
        return(
            <button className={style.botao} >
                {this.props.children}
            </button>
        )
    }
}

export default Botao;