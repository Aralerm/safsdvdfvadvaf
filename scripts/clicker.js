var numCount = 0;
var elem_button = document.querySelector('#button');
var elem_counter = document.querySelector('#counter');

// Инцилизируем DOM и счётчики для улучшалки кликов.
var elem_multipluFactor = document.querySelector('#multiply_factor');
var multiplyFactor = 1;
var elem_multiply = document.querySelector('#multiply');
var multiplyCounter = 0;
var elem_multiplyCounter = document.querySelector('#multiply_counter');
var multiplyCost = 10;
var elem_multiplyCost = document.querySelector('#multiply_cost');

// Инцилизируем DOM и счётчики для автокликера.
var elem_autoclick = document.querySelector('#autoclick');
var autoclickCounter = 0;
var elem_autoclick_counter = document.querySelector('#autoclick_counter');
var autoclickCost = 100;
var elem_autoclick_cost = document.querySelector('#autoclick_cost');
var autoclickFactor = 0;
var elem_autoclick_factor = document.querySelector('#autoclick_factor');

// Функция, которая обновляет значение всех перемен-счётчиков в HTML тегах.
function refreshCounters ()
{
    elem_counter.textContent = numCount.toFixed(1);
    elem_multiplyCounter.textContent = multiplyCounter;
    elem_multiplyCost.textContent = multiplyCost.toFixed(1);
    elem_multipluFactor.textContent = multiplyFactor.toFixed(1);
    elem_autoclick_counter.textContent = autoclickCounter;
    elem_autoclick_cost.textContent = autoclickCost.toFixed(1);
    elem_autoclick_factor.textContent = autoclickFactor.toFixed(1);
}
// И вызываем её, чтобы отобразились стандартыне значения в браузере.
refreshCounters();

// Если нажали на главную кнопку.
elem_button.addEventListener('click', buttonClicked)

function buttonClicked ()
{
    numCount = numCount + (1 * multiplyFactor);
    
    // Добавяем класс, который увиличивает паддинги.
    elem_button.classList.add('pressed');
    // Через 100мс его убираем.
    setTimeout (function() {
        elem_button.classList.remove('pressed')
    }, 100)
    // Это мы сделали анимацию при наведении.

    // Вызываем функцию, которая обновляет значение тегов с счётчиками.
    refreshCounters();
}

// Если нажали КУПИТЬ УЛУЧШЕНИЕ.
elem_multiply.addEventListener('click', buyMultiply);

function buyMultiply ()
{
    if (numCount >= multiplyCost)
    {
        elem_multiply.classList.add('pressed');
        setTimeout (function() {
            elem_multiply.classList.remove('pressed');
        }, 100);

        numCount = numCount - multiplyCost;
        multiplyFactor = multiplyFactor + 0.2;
        multiplyCost = Math.round(multiplyCost * 1.5);
        multiplyCounter = multiplyCounter + 1;
        refreshCounters();
    }
}

// Если нажали КУПИТЬ АВТОКЛИКЕР.
elem_autoclick.addEventListener('click', buyAutoclick);

function buyAutoclick()
{
    if (numCount >= autoclickCost)
    {
        // Добавяем класс, который увиличивает паддинги.
        elem_autoclick.classList.add('pressed');
        // Через 100мс его убираем.
        setTimeout (function() {
            elem_autoclick.classList.remove('pressed');
        }, 100);
        // Это мы сделали анимацию при наведении.

        numCount = numCount - autoclickCost;
        autoclickFactor = autoclickFactor + 1;
        autoclickCost = Math.round(autoclickCost * 1.5);
        autoclickCounter = autoclickCounter + 1;
        
        // Вызываем функцию, которая обновляет значение тегов с счётчиками.
        refreshCounters();
    }
}

// setInterval вызывает функцию каждую секунду.
setInterval(everySecond, 1 * 1000)

function everySecond()
{
    numCount = numCount + autoclickFactor;
    refreshCounters();
}