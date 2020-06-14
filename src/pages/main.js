import { css, LitElement, html } from 'lit-element';
import { Router } from '@vaadin/router';

class MainElement extends LitElement {
  static get styles() {
    return css `
      .container {
        text-align: center;
      }
    `
  }

  async connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      const outlet = this.shadowRoot.getElementById('outlet');
      const router = new Router(outlet);
      router.setRoutes([
        { path: '/', component: 'home-element' },
        { path: '/operations',  component: 'operations-element' },
        { path: '/linear-regression',  component: 'lr-element' },
      ]);
    }, 500);
  }

  render() {
    return html`
    <section class='container'>
      <nav>
        <figure class="logo">
          <img src="../assets/images/tf-logo.jpeg" alt="tf-logo" />
        </figure>
        <a href="/">Home</a>
        <a href="/operations">Operations</a>
        <a href="/linear-regression">Linear-regression</a>
      </nav>
      <main id="outlet">
      </main>
    </section>
    `
  }

}
customElements.define('main-element', MainElement);
