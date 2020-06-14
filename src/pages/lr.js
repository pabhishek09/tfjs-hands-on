import { LitElement, html } from 'lit-element';

class LrElement extends LitElement {

  render() {
    return html`<p>Linear Regression</p>`;
  }

}
customElements.define('lr-element', LrElement);
