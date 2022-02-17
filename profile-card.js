'use strict';

(function() {
  class CardProfile extends HTMLElement {
      constructor() {
        super();

        // attaches shadow tree and returns shadow root reference
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
        const shadow = this.attachShadow({ mode: 'open' });

        // creating a container for the editable-list component
        const profileContainer = document.createElement('div');

        // get attribute values from getters
        const userName = this.userName;
        const position = this.position;
        const company = this.company;
        const email = this.email;

        // adding a class to our container for the sake of clarity
        profileContainer.classList.add('profile-card-container');

        profileContainer.innerHTML = `
          <style>
          .card {
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
              max-width: 300px;
              margin: auto;
              text-align: center;
              font-family: arial;
            }

            .title {
              color: grey;
              font-size: 18px;
            }

            button {
              border: none;
              outline: 0;
              display: inline-block;
              padding: 8px;
              color: white;
              background-color: #000;
              text-align: center;
              cursor: pointer;
              width: 100%;
              font-size: 18px;
            }

            a {
              text-decoration: none;
              font-size: 22px;
              color: black;
            }

            button:hover, a:hover {
              opacity: 0.7;
            }

          </style>
          <div class="card">
              <img src="https://thispersondoesnotexist.com/image" alt="John" style="width:100%">
              <h1>${userName}</h1>
              <p class="title">${position}</p>
              <p>${company}</p>
              <p><button>${email}</button></p>
          </div>
          `
        // appending the container to the shadow DOM
        shadow.appendChild(profileContainer);
      }

      connectedCallback() {
          // const shadowRoot = this.attachShadow({ mode: 'open' });
          // shadowRoot.appendChild(profileTemplate.content);
      }

      // gathering data from element attributes
      get userName() {
        return this.getAttribute('user-name') || '';
      }
      get position() {
        return this.getAttribute('position') || '';
      }
      get company() {
        return this.getAttribute('company') || '';
      }
      get email() {
        return this.getAttribute('email') || '';
      }
  }

  customElements.define('profile-card', CardProfile);
})();