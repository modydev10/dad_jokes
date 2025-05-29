let url = "https://icanhazdadjoke.com/"

let btn = document.querySelector('.container button');
let jokeSpan = document.getElementById('joke-span')


async function getJoke() {

  let data = await fetch(url, {
    headers: {
      'accept': "application/json"
    }
  });
  let result = await data.json();
  jokeSpan.textContent = result.joke;
}


window.addEventListener('load', async () => {
  let intervalId = setInterval(() => {
    jokeSpan.textContent += '.';
    if (jokeSpan.textContent.length >= 15) {
      jokeSpan.textContent = 'Loading...'
    }
  }, 1000);

  await getJoke();
  clearInterval(intervalId);
  btn.addEventListener('click', async () => {
    jokeSpan.textContent = 'Loading...';
    let intervalId = setInterval(() => {
      jokeSpan.textContent += '.';
      if (jokeSpan.textContent.length >= 15) {
        jokeSpan.textContent = 'Loading...'
      }
    }, 1000);
    await getJoke()
    clearInterval(intervalId);
  })
})
