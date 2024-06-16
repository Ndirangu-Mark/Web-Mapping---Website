document.addEventListener('DOMContentLoaded', (event) => {
    const searchIcon = document.getElementById('search-icon');
    const searchBox = document.getElementById('search-box');
    const body = document.querySelector("body");

    searchIcon.addEventListener('click', () => {
        if (searchBox.style.display === 'none' || searchBox.style.display === '') {
            searchBox.style.display = 'block';
            searchIcon.style.display = "none";
        }else {
            searchBox.style.display = 'none';
            searchIcon.style.display = "block";
        }
    });
});
