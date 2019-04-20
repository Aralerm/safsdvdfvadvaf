var elem_button = document.querySelector('#button');
var numCount = 0;

var elem_counter = document.querySelector('#counter');

// BONUS MULTIPLY
var elem_multipluFactor = document.querySelector('#multiply_factor');
var multiplyFactor = 1;
var elem_multiply = document.querySelector('#multiply');
var multiplyCounter = 0;
var elem_multiplyCounter = document.querySelector('#multiply_counter');
var multiplyCost = 10;
var elem_multiplyCost = document.querySelector('#multiply_cost');

// BONUS AUTOCLICK
var elem_autoclick = document.querySelector('#autoclick');
var autoclickCounter = 0;
var elem_autoclick_counter = document.querySelector('#autoclick_counter');
var autoclickCost = 100;
var elem_autoclick_cost = document.querySelector('#autoclick_cost');
var autoclickFactor = 0;
var elem_autoclick_factor = document.querySelector('#autoclick_factor');

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

refreshCounters();

// ЕСЛИ КЛИКНУЛИ НА КНОПКУ
elem_button.addEventListener('click', buttonClicked)

function buttonClicked ()
{
    numCount = numCount + (1 * multiplyFactor);
    refreshCounters();
}

// ЕСЛИ НАЖАЛИ НА ПОКУПКУ УЛУЧШАЛКИ
elem_multiply.addEventListener('click', buyMultiply);

function buyMultiply ()
{
    if (numCount >= multiplyCost)
    {
        numCount = numCount - multiplyCost;
        multiplyFactor = multiplyFactor + 0.2;
        multiplyCost = Math.round(multiplyCost * 1.5);
        multiplyCounter = multiplyCounter + 1;
        refreshCounters();
    }
}

// ЕСЛИ НАЖАЛИ НА ПОКУПКУ АВТОКЛИКЕРА
elem_autoclick.addEventListener('click', buyAutoclick);

function buyAutoclick()
{
    if (numCount >= autoclickCost)
    {
        numCount = numCount - autoclickCost;
        autoclickFactor = autoclickFactor + 1;
        autoclickCost = Math.round(autoclickCost * 1.5);
        autoclickCounter = autoclickCounter + 1;
        refreshCounters();
    }
}

setInterval(everySecond, 1 * 1000)

function everySecond()
{
    numCount = numCount + autoclickFactor;
    refreshCounters();
}