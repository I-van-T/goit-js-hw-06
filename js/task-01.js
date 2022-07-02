const numbCategories = document.querySelectorAll('.item');

console.log(`Number of categories ${numbCategories.length}`);

numbCategories.forEach((element) => {
    return console.log(`Category: ${element.querySelector("h2").textContent}
    Element: ${element.querySelectorAll("li").length}`);
}

)
