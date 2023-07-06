const categoriesList = document.getElementById("categories"); 
const categoryItems = categoriesList.children; 
 
console.log("Number of categories:", categoryItems.length); 
 
Array.from(categoryItems).forEach((item) => { 
  const categoryName = item.firstElementChild.textContent; 
  const elements = item.lastElementChild.children; 
 
  console.log(`\nCategory: ${categoryName}`); 
  console.log(`Elements: ${elements.length}`); 
});
