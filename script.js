const themeLocalStorage = localStorage.getItem('theme')
if (themeLocalStorage === null){
    setTheme('light')
} else {
    setTheme(themeLocalStorage)
}

let themeIcons = document.getElementsByClassName('theme-icon')

for (var i = 0; themeIcons.length > i; i++) {
    themeIcons[i].addEventListener('click', function(){
        let theme = this.dataset.mode
        setTheme(theme)
    })
}

function setTheme(theme) {
    if (theme == 'light') {document.getElementById('theme-style').href = 'default.css'} 
    if (theme == 'dark') {document.getElementById('theme-style').href = 'dark.css'} 

    localStorage.setItem('theme',theme)
}