import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import If from '../operador/if'
import { selectTab } from './tabActions'

// Classe que cria a estrutura de comunicação para receber os parametros no arquivo billingCycles.jsx
// Atraves do component tabsHeader é feito a setagem das variaveis criadas abaixo(label, icon e target)

class TabHeader extends Component{
    render(){
        const selected = this.props.tab.selected === this.props.target
        const visible = this.props.tab.visible[this.props.target]
        //className dinamico para mostrar a aba selecionada através do for        
        return(
            <If test={visible}>
                <li className={selected ? 'active' : ''}> 
                    <a href='javascript:;'
                        data-toggle='tab'
                        onClick={() => this.props.selectTab(this.props.target)}
                        data-target={this.props.target}>
                        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
                </li>
            </If>
        )
    }
}


// mapeamento e conexão para os reducers e a action no arquivo tabAction.js

const mapStateToProps = state =>({tab : state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)