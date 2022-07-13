const hamburger = document.querySelector('.hamburger');

console.log(hamburger)

hamburger.addEventListener('click', () => {
    let links = document.querySelector('.nav-list');

    if (links.style.display === "block"){
        links.style.display = "none";
    } else{
        links.style.display = "block";
    }
})