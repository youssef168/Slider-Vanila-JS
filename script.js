//TODO: We Need To Get Our Sliders 
const Sliders = Array.from(document.querySelectorAll('.slide-container img'))

const SlidersCount = Sliders.length;

const PaginationList = document.querySelector('ul')
    



const SlideIndex = document.querySelector('.slide-index');

let currentSlideIndex = 1;

const prevOption = document.querySelector('.prev')
const nextOption = document.querySelector('.next')

prevOption.onclick = getPrevIndex;
nextOption.onclick = getNextIndex;

function getPrevIndex() {
    if (prevOption.classList.contains('disabled')) {
        return false
    }

    else {
        currentSlideIndex--;
        checkSlidesPosition()
    }
}

function getNextIndex() {
    if (nextOption.classList.contains('disabled')) {
        return false
    }

    else {
        currentSlideIndex++;
        checkSlidesPosition()
        
    }
}

// for (let i = 0; i < )

//TODO: We Need To Create a Function To Handle Pagination
function handlePagination() {
    for (let i = 1; i <= SlidersCount; i++) {
        let PaginationOption = document.createElement('li');
        
        PaginationOption.setAttribute('data-slide', i)
        PaginationOption.setAttribute('class', 'btn')
        PaginationOption.appendChild(document.createTextNode(i))
        PaginationList.appendChild(PaginationOption)
    }
}

handlePagination()

function checkSlidesPosition() {
    SlideIndex.textContent = `${currentSlideIndex}`

    cleanUpActive()

    Sliders[currentSlideIndex - 1].classList.add('active')

    PaginationList.children[currentSlideIndex - 1].classList.add('active')

    if (currentSlideIndex == 1) {
        prevOption.classList.add('disabled')
    } else {
        prevOption.classList.remove('disabled')
    }
    if (currentSlideIndex == SlidersCount) {
        nextOption.classList.add('disabled')
    } else {
        nextOption.classList.remove('disabled')
    }
}

// i call it down to wait the all dom tree is loaded
const innerPagination = Array.from(document.querySelectorAll('li'))

checkSlidesPosition()

function cleanUpActive() {
    Sliders.forEach(slider => {
        slider.classList.remove('active')
    })

    innerPagination.forEach(paginate => {
        paginate.classList.remove('active')
    })


}

