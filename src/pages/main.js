import { LitElement, html } from 'lit-element';

class MainElement extends LitElement {
  render () {
    return html`
      <div class='container'>
        <h3>TensorFlowJs hands-on examples</h3>
         <img src='../assets/images/tf-logo.jpeg'/>
      </div>
    `
  }
}
customElements.define('main-element', MainElement);
