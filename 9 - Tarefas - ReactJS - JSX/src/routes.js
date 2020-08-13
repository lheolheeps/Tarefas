import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Tarefa from './pages/Tarefas/tarefas';
import Calculadora from './pages/Calculadora/calculadora';
import Header from './pages/Header/header';

class Routes extends React.Component{
    render(){
        return (
            <BrowserRouter>
            <Header />
                <Switch>
                    <Route path="/" render={props => <Tarefa tarefas={this.props.tarefas}/>} />
                    <Route path="/tarefas" render={props => <Tarefa tarefas={this.props.tarefas}/>} />
                    <Route path="/calculadora" component={Calculadora} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;