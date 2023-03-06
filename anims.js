let options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.5
}

let callback = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log('find', entry);
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    })
}

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.anim')
targets.forEach((target) => {
    observer.observe(target);
})

/*-----------------------------------------------*/

let el = document.querySelector('.player-r')

const height = el.clientHeight
const width = el.clientWidth

el.addEventListener('mousemove', handleMove)

function handleMove(e) {
    const xVal = e.layerX

    const yVal = e.layerY

    const yRotation = 2 * ((xVal - width / 2) / width)

    const xRotation = -2 * ((yVal - height / 2) / height)

    const string = 'perspective(500px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

    el.style.transform = string
}

el.addEventListener('mouseout', function () {
    el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

el.addEventListener('mousedown', function () {
    el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

el.addEventListener('mouseup', function () {
    el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})