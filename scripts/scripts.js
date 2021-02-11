const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});


// jumbotron
$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});


// Typed JS Snippet

const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    backSpeed: 60,
    typeSpeed: 60
  });

// Ghibli API

const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

let request = new XMLHttpRequest()
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `error`
    app.appendChild(errorMessage)
  }
}

request.send()
// Email

const formBtn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   formBtn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_oXX6i6xb';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      formBtn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      formBtn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});