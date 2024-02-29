import homePage from "./homepage";
import menuPage from "./menu";
import contactPage from "./contact";


homePage();

function clearPage() {
    const content = document.querySelector("#content");
    content.innerHTML = ''
}

// navbuttons
const Home = document.getElementById('Home')
const Menu = document.getElementById('Menu')
const Contact = document.getElementById('Contact')

Home.addEventListener('click', () => {
    clearPage();
    homePage();
})

Menu.addEventListener('click', () => {
    clearPage();
    menuPage();
})

Contact.addEventListener('click', () => {
    clearPage();
    contactPage();
})