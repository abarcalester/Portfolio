// Including dark mode
const btnDarkMode = document.querySelector('.darkmode');

// When website is charged
if (localStorage.getItem('darkmode') == 'true') {
    document.body.classList.add('light')
}

btnDarkMode.addEventListener( 'click', () => {
    document.body.classList.toggle('light')
    if(document.body.classList.contains('light')) {
        localStorage.setItem('darkmode','true')
    } else {
        localStorage.setItem('darkmode', 'false')
    }
})


// All links on the page opens in new window
const links = document.querySelectorAll('a')
links.forEach(linkOne => {
    linkOne.setAttribute('target', '_blank')
})

// Adding "preventDefault" for buttons to download files
const buttonsToDownload = document.querySelectorAll('.files a');