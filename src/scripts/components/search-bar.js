class SearchBar extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }


  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      .search-container {
        width: 50%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        text-align: center;
        align-items: center;
        position: sticky;
        margin-top: 6rem;
        background-color: white;
        margin-left: auto;
        margin-right: auto;
      }

  .search-container > input {
    width: 75%;
    padding: 16px;
    font-size: 1rem;
    border: 0;
    border-bottom: 1px solid #EAD196;
    font-family: cursive;
    font-weight: bold;
  }

  .search-container > input:focus {
    outline: 0;
    border-bottom: 2px solid #000000;
  }

  .search-container > input:focus::placeholder {
    font-weight: bold;
  }

  .search-container > input::placeholder {
    color: #000000;
    font-weight: normal;
  }

  .search-container > button {
    width: 22%;
    cursor: pointer;
    margin-left: auto;
    padding: 16px;
    background-color: #EAD196;
    color: #000000;
    border: 0;
    text-transform: uppercase;
    border-radius: 5%;
    font-weight: bold;
    font-family: cursive;
  }

  @media screen and (max-width: 575.98px) {
    .search-container {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }

    .search-container > input {
      font-size: 1.2rem;
      width: 100% !important;
      margin-bottom: 12px;
    }

    .search-container > button {
      width: 8rem;
      font-size: 0.7rem !important;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (max-width: 767.98px) {
    .search-container {
      width: 60% !important;
      margin-top: 3rem;
    }
    
  @media (max-width: 991.98px) { 
    .search-container {
      width: 23rem;
    } 
  }

  @media (max-width: 1199.98px) { 
    .search-container {
      width: 30rem;
      margin-top:8rem;
    }  
  }
  </style>
      
  <div id="search-container" class="search-container">
    <input placeholder="Find Your Movie..." id="searchElement" type="search">
    <button id="searchButtonElement" type="submit">Search</button>
  </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement')
        .addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);