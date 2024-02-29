function contactPage() {
  const content = document.querySelector("#content");
  const contactContent = document.createElement("div");
  const headerOne = document.createElement("h1");
  headerOne.innerHTML = "Contact Us";
  const number = document.createElement('h3')
  const email = document.createElement('h3')
  const social = document.createElement('h3')
  number.innerHTML = "Call Our Phone At 555-609-5687"
  email.innerHTML = "Email us at pestoatresto@gmail.com"
  social.innerHTML = "Follow us on our socials!"
  content.appendChild(contactContent)
  contactContent.appendChild(headerOne)
  contactContent.appendChild(number)
  contactContent.appendChild(email)
  contactContent.appendChild(social)
}

export default contactPage;
