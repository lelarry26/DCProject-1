const form = document.getElementById("gameSearch");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const gameSearch = event.target.gameSearch.value;
  const giantBombAPI = "4ccf8f3bad38d69d7a94f106fe749bdff1d91ef5";
  const gameSpotAPI = "42ca3a8ff2dc770f2e69d2367678840e5faef0ce";
  const date = new Date();
  let tmrwYear = date.getYear().toString().substr(-2);
  let tmrwMonth = String(date.getMonth() + 1).padStart(2, "0");
  let tmrwDay = date.getDate() + 1;
  let tmrwDate = `${tmrwYear}${tmrwMonth}${tmrwDay}`;

  //Initial Giantbomb Search
  const giantBombResponse = await fetch(
    `https://cors-proxy.fringe.zone/https://www.giantbomb.com/api/games/?format=json&filter=name:${gameSearch},original_release_date:${tmrwDate}|331231&api_key=${giantBombAPI}`
  );
  const giantBombData = await giantBombResponse.json();
  console.log(giantBombData);
  const image = document.getElementById("gameImage");
  const gameName = document.getElementById("gameName");
  const gameDescription = document.getElementById("gameDescription");
  const releaseDate = document.getElementById("releaseDate");
  const knowMore = document.getElementById("knowMore");
  const entireCardSection = document.getElementById("sectionCard");

  if (giantBombData.number_of_total_results < 1) {
    entireCardSection.style.display = "block";
    image.setAttribute(
      "src",
      "https://www.farmersalmanac.com/wp-content/uploads/2020/07/Groundhog-Day-Almanac-Forecast-i186380051-1184x630.jpeg"
    );
    gameName.innerHTML =
      "Sorry, it looks like that game has already been released or may not have a release date yet.";
    gameDescription.innerHTML = "";
    releaseDate.innerHTML = "";
    knowMore.innerHTML = "";
  } else if (giantBombData.number_of_total_results >= 1) {
    giantBombData.results.map((datum) => {
      entireCardSection.style.display = "block";
      image.setAttribute("src", `${datum.image.small_url}`);
      gameName.innerHTML = `${datum.name}`;
      gameDescription.innerHTML = `${datum.deck}`;
      releaseDate.innerHTML = `Expected release date - ${datum.expected_release_month}-${datum.expected_release_day}-${datum.expected_release_year}`;
      knowMore.innerHTML = `Check out more - <a href="${datum.site_detail_url}">here</a>`;
    });
  }

  //Secondary API fetch for videos
  const gameSpotResponse = await fetch(
    `https://cors-proxy.fringe.zone/https://www.gamespot.com/api/videos/?format=json&filter=title:${gameSearch},publish_date:220101|${tmrwDate}&api_key=${gameSpotAPI}`
  );
  const gameSpotData = await gameSpotResponse.json();
  let gameVideo = document.querySelectorAll(".gameVideo");
  console.log(gameSpotData);
  if (giantBombData.number_of_total_results < 1) {
    gameVideo.forEach((element, i) => {
      element.style.display = "none";
    });
  } else {
    gameVideo.forEach((element, i) => {
      element.setAttribute("src", `${gameSpotData.results[i].low_url}`);
      element.setAttribute("controls", "true");
      element.style.display = "initial";
    });
  }
});
