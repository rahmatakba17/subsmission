class AppBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: block;
          width: 100%;
          background-color: #000000;
          justify-content: center;
          text-align: center;
          color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 0 0 2rem 2rem;
        }
        h2 {
          padding: 16px;
        }
        span{
          display: inline-block;
          animation: berputarlah 5.5s infinite;
        }
        @keyframes berputarlah {
          0%, 100% {
          transform: rotate(0deg); /* Mulai dan akhir: rotasi 0 derajat */
          }
          50% {
          transform: rotate(360deg); /* Pada setengah waktu, rotasi 360 derajat (putaran penuh) */
          }
        }
      </style>
      
      <h2><span>🎞️</span> The Movies List <span>🎞️</span></h2>
    `;
  }
}

customElements.define('app-bar', AppBar);