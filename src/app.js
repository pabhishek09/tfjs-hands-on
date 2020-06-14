import operations from './operations';
import './pages/main';
import './styles/main.css';

const mainEl = document.createElement('main-element');
document.body.appendChild(mainEl);

operations(); // Basic math operations on Tensors
