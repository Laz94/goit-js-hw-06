const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll(".item");

console.log("Number of categories:", categoryItems.length);

categoryItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li");

  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${elements.length}`);
});
