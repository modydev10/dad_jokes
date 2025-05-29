let url = "https://icanhazdadjoke.com/"

let btn = document.querySelector('.container button');
let jokeSpan = document.getElementById('joke-span')


async function getJoke() {
  let data = await fetch(url, {
    headers: {
      // 'Accept': 'application/json'
      'accept': "application/json"
    }
  });
  let result = await data.json();
  jokeSpan.textContent = result.joke;
}

btn.addEventListener('click', getJoke)

window.addEventListener('load', getJoke)