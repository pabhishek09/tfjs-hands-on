import { LitElement, html } from 'lit-element';

class HomeElement extends LitElement {

  render() {
    return html`
    <article>
      <p>This project is a collection of TensorFlowJs hands on examples built using Web Components framework lit-element </p>
    </article>
    `;
  }

}
customElements.define('home-element', HomeElement);
