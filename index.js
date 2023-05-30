class App {
  static API_KEY = "bb71f6d0a5msh8bea47b10b6fd85p1e95cbjsnac5a7c3dc7df";
  static SEARCH_URL =
    "https://online-movie-database.p.rapidapi.com/auto-complete?q=";

  static DEFAULT_HEADERS = {
    "X-RapidAPI-Key": App.API_KEY,
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  };

  static button = document.querySelector("button");
  static input = document.querySelector("input");
  static output = document.querySelector("section");
  static watchListOutput = document.querySelector("#watch-list");

  constructor(data = [], watchList = []) {
    this.data = data;
    this.watchList = watchList;

    App.button.onclick = () => this.onButtonClick();
  }

  onInputChange() {}

  //start search
  onButtonClick() {
    console.log(App.input.value);
    this.getDataBySearch(App.input.value).then(() => {
      App.input.value = "";
      console.log("Data", this.data);

      this.renderData(this.data, App.output);
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
      console.log(e, "error");
      alert("Query is invalid");
    }
  }
  addWachListData(film) {
    const oldWatchList = JSON.parse(localStorage("watchList") || "[]");
    localStorage.setItem("watchList", [...oldWatchList, film]);

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
      const { imageUrl, width, height } = imageData || {
        imageUrl:
          "https://static.vecteezy.com/system/resources/previews/007/160/087/original/video-icon-video-symbol-play-video-sign-free-vector.jpg",
        width: 1000,
        height: 1000,
      };

      outputElement.innerHTML += `
        <div class="film-elem">
        <img src="${imageUrl}" />
        <h3>${title}</h3>
        <span>Rating: ${rank}</span>
        <span>Actors: ${actors}</span>
        <span>Year: ${year || "unknown"}</span>
        <button class = "film">Watch Later</button>
        
      </div>
      
      `;
    
      
      const filmButtons = document.querySelectorAll(".film");
      [...filmButtons].forEach((btn, i) => {
        btn.onclick = () => {
          console.log("!!!!");
          this.addWachListData(dataToRender[i]);
        }
        removeWatchListData(id) {

          const oldWatchList = JSON.parse(this.getWatchListData());
          
          localStorage.setItem("watchList", JSON.stringify([...oldWatchList].filter((el) => el.id !== id)));
          
        };

      })



    });

  
}
checkIfWatchListContainsFilm() {
  return this.getWatchListData().find((film) => film.id === id) ? true : false
}

renderWatchList() {
App.output.style.visibility = "hidden";
App.watchListOutput.style.visibility = 
}
}

new App();


  // onWatchLaterClick() {

  //   var movieId = 'your_movie_id';

  //   if (this.watchList.indexOf(movieId) === -1) {
  //     this.watchList.push(movieId);

  //     localStorage.setItem('watchLaterList', JSON.stringify(this.watchList));

  //     alert("Added");
  //   } else {

  //     alert("It's already here");
  //   }
  // }