// all links on the page opens in new window
const links = document.querySelectorAll('a')
links.forEach(linkOne => {
    linkOne.setAttribute('target', '_blank')
})

// adding "preventDefault" for buttons to download files
const buttonsToDownload = document.querySelectorAll('.files a');