import './index.css';
import * as serviceWorker from './serviceWorker';
// import Header from './view/components/Header';
// import Container from './view/components/Container';
import NoticiaController from './controller/NoticiaController'


let noticiaController = new NoticiaController();
noticiaController.render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
