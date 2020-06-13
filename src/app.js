import operations from './scripts/operations';
import './styles/main.css';

import Logo from './assets/tf-logo.jpeg';

function component() {
  const element = document.createElement('div');
  element.classList.add('container')
  const header = document.createElement('h3');
  header.innerText = 'TensorFlowJs hands-on examples';
  element.appendChild(header);
  const logo = new Image();
  logo.src = Logo;
  logo.classList.add('logo');
  element.appendChild(logo);
  return element;
}

document.body.appendChild(component());

operations(); // Basic math operations on Tensors
