import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './pages/Header/header';
import Tarefas from './pages/Tarefas/tarefas';
import Calculadora from './pages/Calculadora/calculadora';

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact render={props => <Tarefas tarefas={this.props.tarefas} />} /> />
                    <Route path="/tarefas" render={props => <Tarefas tarefas={this.props.tarefas} />} /> />
                    <Route path="/calculadora" component={Calculadora} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;