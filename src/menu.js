function menuPage() {
  const content = document.querySelector("#content");
  const menuContent = document.createElement("div");
  const headerOne = document.createElement("h1");
  headerOne.innerHTML = "Our Menu";
  content.appendChild(menuContent);
  menuContent.appendChild(headerOne)
  const menuItems = [
    "Pesto Linguine",
    "Pesto Ravioli",
    "Gnocchi With Pesto & Cream",
    "Zucchini Pasta Salad",
    "Summer Pesto Pasta With Grilled Chicken & Vegetables",
  ];
  menuItems.forEach((item) => {
    const dish = document.createElement("h3");
    dish.innerHTML = item;
    menuContent.appendChild(dish);
  });
}

export default menuPage;
