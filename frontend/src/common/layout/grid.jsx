import React, { Component } from 'react'

export default class Grid extends Component {

    /*
    
    Classe para configuração dinamica dos padrões do bootstrap afim de facilitar a os parametros
    para os diferentes tipos de dispositivos.
    
    */

    toCssClasses(numbers){
        const cols = numbers ? numbers.split(' ') : [] //a função split transforma o espaço em
                                                       //um divisor para criar um array onde cada
                                                       //valor antes do espaço é um elemento do vetor
        let classes = '' 

        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`

        return classes
    }

    render(){
        const gridClasses = this.toCssClasses(this.props.cols || '12') 
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}