const smallCups = document.querySelectorAll('.cup-small');
const listers = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');


const updateBigCup = () => {
    const fullGlasses = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if (fullGlasses === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullGlasses / totalCups * 330}px`;
        percentage.innerText = `${fullGlasses / totalCups * 100}%`;
    }

    if (fullGlasses === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible'
        listers.innerText = `${2 - (250 * fullGlasses / 1000)}L`;
    }
};
updateBigCup()

const highlightCups = (idx) => {
    if (smallCups[idx].classList.contains('full')
        && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')

        }
    })

    updateBigCup();
};

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx));
})