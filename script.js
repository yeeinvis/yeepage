function search(event) {
    if (event.key === 'Enter') {
        const query = document.getElementById('searchBar').value;
        const url = searchLink + query;
        if (openNewTab) {
            window.open(url);
        } else {
            window.location.href = url;
        }
        document.getElementById('searchBar').value = '';
    }
}

function changeSearchEngine() {
    showSettings();
}

function showSettings() {
    const settingsBox = document.getElementById('blackBox');
    if (settingsBox.style.display === 'none' || settingsBox.style.display === '') {
        settingsBox.style.display = 'block';
    } else {
        settingsBox.style.display = 'none';
    }
}

document.getElementById('icon').addEventListener('click', function(event) {
    const settingsBox = document.getElementById('blackBox');
    const searchButton = document.getElementById('searchButton');
    if (!settingsBox.contains(event.target) && event.target !== searchButton) {
        settingsBox.style.display = 'none';
    }
});

const SearchEngines = ['Google', 'DuckDuckGo', 'Bing', 'Brave'];
const aiSearchEngines = ['ChatGPT', 'Gemini', 'duck.ai', 'Perplex'];
const videoSearchEngines = ['Youtube', 'TikTok', 'PearTube'];
const customSearchEngines = [''];

let searchEngine = 'Google';
let searchLink = 'https://www.google.com/search?q=';
let openNewTab = true;
