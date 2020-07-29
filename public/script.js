function doModal() {
    let openBtn = document.getElementById('menu-btn')
    let close = document.getElementById('close-btn')
    let download = document.getElementById('download-btn')
    let isOpen = false

    openBtn.addEventListener('click', () => {
        isOpen = true
        isShowModal(isOpen)
    })

    close.addEventListener('click', () => {
        isOpen = false
        isShowModal(isOpen)
    })

    download.addEventListener('click', () => {
        isOpen = false
        isShowModal(isOpen)
        return false
    })
}

function isShowModal(show) {
    let modal = document.getElementById('navbar-modal')
    let navbar = document.getElementById('navbar')
    if (show) {
        modal.style.display = 'flex'
        navbar.style.display = 'none'
    } else {
        modal.style.display = 'none'
        navbar.style.display = 'flex'
    }
}

function changeNavbarColor() {
    let navbar = document.getElementById('navbar')


    window.addEventListener('scroll', () => {
        let scroll = window.pageYOffset
        if (scroll > 0) {
            navbar.style.backgroundColor = "#fff"
        } else {
            navbar.style.backgroundColor = "#00000000"
        }
    })
}



function clickDownload() {

    scrollingElement = (document.scrollingElement || document.body)
    scrollingElement.scrollTop = scrollingElement.scrollHeight;

    doModal()

}
doModal()
changeNavbarColor()