const categories = document.querySelectorAll("li.item");

console.log(`Number of categories: ${categories.length}`);
categories.forEach((element) => {
  const title = element.querySelector("h2");
  const secondCategories = element.querySelectorAll("li");
  console.log(`
Category: ${title.innerText}
Elements: ${secondCategories.length}`);
});
