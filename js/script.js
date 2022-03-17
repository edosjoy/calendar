'use strict';

const
    btnPrevious = document.querySelector('.previous'),
    btnNext = document.querySelector('.next'),
    btnToday = document.querySelector('.today'),
    inputYear = document.querySelector('.input-year'),
    elemYear = document.querySelector('.year'),
    elemMonth = document.querySelector('.month'),
    days = document.querySelector('.days'),
    nowDate = new Date(),
    nowYear = nowDate.getFullYear(),
    nowMonth = nowDate.getMonth() + 1,
    nowDay = nowDate.getDate();

let
    tmpYear = nowYear,
    tmpMonth = nowMonth,
    tmpDay = nowDay;

setYear(nowYear);
setMonth(nowMonth);

btnPrevious.addEventListener('click', event => {
    event.preventDefault();
    if (tmpMonth === 1) {
        setYear(--tmpYear);
        setMonth(tmpMonth = 12);
    } else {
        setMonth(--tmpMonth);
    }
});

btnNext.addEventListener('click', event => {
    event.preventDefault();
    if (tmpMonth === 12) {
        setYear(++tmpYear);
        setMonth(tmpMonth = 1);
    } else {
        setMonth(++tmpMonth);
    }
});

btnToday.addEventListener('click', event => {
    event.preventDefault();
    tmpYear = nowYear;
    tmpMonth = nowMonth;
    setYear(nowYear);
    setMonth(nowMonth);
});

inputYear.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        if (isNaN(+inputYear.value)) {
            alert('Ввели некорретное значение');
            inputYear.value = '';
        } else if (typeof +inputYear.value === 'number') {
            tmpYear = +inputYear.value;
            setYear(tmpYear);
            setMonth(tmpMonth);
            inputYear.value = '';
        }
    }
})

function setYear(year) {
    elemYear.innerText = year;
}

function setMonth(month) {
    switch (month) {
        case 1:
            elemMonth.innerText = 'Январь';
            createElementOfDate(31);
            break;
        case 2:
            elemMonth.innerText = 'Февраль';
            if (tmpYear % 100 === 0 && tmpYear % 400 === 0) {
                createElementOfDate(29);
            } else if (tmpYear % 4 === 0) {
                createElementOfDate(29);
            } else {
                createElementOfDate(28);
            }
            break;
        case 3:
            elemMonth.innerText = 'Март';
            createElementOfDate(31);
            break;
        case 4:
            elemMonth.innerText = 'Апрель';
            createElementOfDate(30);
            break;
        case 5:
            elemMonth.innerText = 'Май';
            createElementOfDate(31);
            break;
        case 6:
            elemMonth.innerText = 'Июнь';
            createElementOfDate(30);
            break;
        case 7:
            elemMonth.innerText = 'Июль';
            createElementOfDate(31);
            break;
        case 8:
            elemMonth.innerText = 'Август';
            createElementOfDate(31);
            break;
        case 9:
            elemMonth.innerText = 'Сентябрь';
            createElementOfDate(30);
            break;
        case 10:
            elemMonth.innerText = 'Октябрь';
            createElementOfDate(31);
            break;
        case 11:
            elemMonth.innerText = 'Ноябрь';
            createElementOfDate(30);
            break;
        case 12:
            elemMonth.innerText = 'Декабрь';
            createElementOfDate(31);
            break;
        default:
            elemMonth.innerText = 'месяц не определен';
    }
}

function createElementOfDate(colDay) {
    days.innerHTML = '';
    for (let i = 1; i <= colDay; i++) {
        let newElement = document.createElement('span');
        if (tmpYear === nowYear && tmpMonth === nowMonth && i === nowDay) {
            newElement.classList.add('day', 'now');
        } else {
            newElement.classList.add('day');
        }
        newElement.innerText = i;
        days.append(newElement);
    }
}