
function homePage() {
  const content = document.querySelector("#content");
  const homeContent = document.createElement("div")
  const headerOne = document.createElement("h1");
  const headerTwo = document.createElement("h2");
  headerOne.innerHTML = "Welcome To The Resto";
  headerTwo.innerHTML = "We Serve The Best Pesto In The World";
  // homeContent.classList.add('home-content')
  content.appendChild(homeContent)
  homeContent.appendChild(headerOne);
  homeContent.appendChild(headerTwo);
}

export default homePage;
