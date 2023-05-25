class App {
  static API_KEY = "bb71f6d0a5msh8bea47b10b6fd85p1e95cbjsnac5a7c3dc7df";
  static SEARCH_URL =
    "https://online-movie-database.p.rapidapi.com/auto-complete?q=";
  static DEFAULT_HEADERS = {
    headers: {
      "X-RapidAPI-Key": App.API_KEY,
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  static button = document.querySelector("button");
  static input = document.querySelector("#input");
  static output = document.querySelector("#output");

  constructor(data = [], watchList = []) {
    this.data = data;
    this.watchList = watchList;

    App.button.onclick = () => this.onButtonClick();
  }

  onInputChange() {}
  onButtonClick() {
    console.log(App.input.value)
    this.getDataBySearch(App.input.value).then(() => {
        App.input.value = "";
      console.log("Data", this.data);

      this.renderData(this.data, App.output)
    });
  }

  async getDataBySearch(filmName = "") {
    try {
      const response = await fetch(App.SEARCH_URL + filmName, {
        headers: App.DEFAULT_HEADERS,
      });
      const data = await response.json();

      this.data = data.d ? data.d : [];
    } catch (e) {
      alert("Query is invelid");
    }
  }

  renderData(dataToRender, outputElement = App.output) {
    outputElement.innerHTML = "";
    dataToRender.forEach((film) => {
      const {
        id,
        l: title,
        q,
        qid: type,
        rank,
        s: actors,
        y: year,
        i: imageData,
      } = film;
      const { imageUrl, width, height } = imageData || {imageUrl: "", width: 1000, height: 1000};

      outputElement.innerHTML += `
      <div class="film-el">
      <img src="${imageUrl}" width="${width / 10}" height="${height / 10}"/>
      <h3>${title}</h3>
      <span>${rank}</span>
      <span>${actors}</span>
      <span>${year}</span>

      <div/>
      `;
    });
  }
  renderWatchList() {}
}

new App();
