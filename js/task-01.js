const totalCategories = document.querySelectorAll(".item");
console.log('Number of categories:', totalCategories.length);



const categoriesArray = [...totalCategories]
    .forEach(
        categories => `Category: ${categories.children[0].textContent}
        Elements: ${categories.children[1].children.length}`
    )
console.log(categoriesArray);
// .join("\n");