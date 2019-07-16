import React, {Component} from 'react'
import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'


class Dashboard extends Component {

    componentWillMount(){ // Metodo que chama o Action Create no arquivo dashboardActions.js
        this.props.getSummary()
    }

    render() {
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' 
                            value={`R$ ${credit}`}  text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card' 
                            value={`R$ ${debt}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money' 
                            value={`R$ ${credit - debt}`} text='Valor Consolidado' />
                    </Row>
                </Content>    
            </div>
        )
    }
}


//Constante pdrão do Redux que busca o valor do metodo dashboard no arquivo reducers.js
const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch) //Envia os dados da action do arquivo dashboardActions
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard) // exporta os valores para o componente Dashboard
