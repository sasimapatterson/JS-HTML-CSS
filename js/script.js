//Change the background colour of the footer
var footer = document.querySelector(".contact");
footer.style.backgroundColor = "#d7ddf3";

//Edit the text of the h2 with a class of tagline to whatever you like.
var taglineText = document.querySelector(".tagline");
taglineText.innerText = "Take time to smell the roses.";

//Increase line-height and font size of the address element.
var address = document.querySelector("address");
address.style.lineHeight = "1.5em";
address.style.fontSize = "1.75em";

//Emphasize the words "every day" in the contact section header.
var emWord = document.querySelector("h3");
emWord.innerHTML = "We're here for you <em>every day</em> of the week.";
