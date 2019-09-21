let counter = 0;
let factor = 1;

document.querySelector('#button').addEventListener('click', function()
{
    counter += factor;
    document.querySelector("#counter").textContent = counter;
});

class Bonus
{
    constructor(name, cost, factor, id, automate) 
    {
        this.name = name;
        this.cost = cost;
        this.factor = factor;
        this.own = 0;
        this.id = id;
        this.automate = automate;

        let tags = '<a class="bonus" id="'+id+'" href="#"> <h2>'+this.name+'</h2> <p> ИМЕЕТСЯ: <span id="multiply_counter">'+this.own+'</span> </p> <p> ЦЕНА: <span id="multiply_cost">'+this.cost+'</span> </p> <p> МНОЖИТЕЛЬ: <span id="multiply_factor">'+this.factor+'</span> </p> </a>';
        document.querySelector(".b-three").innerHTML += tags;

        if (this.automate == true)
        {
            setInterval(() =>
            {
                counter += (this.own * this.factor);
                this.refresh();    
            }, 1 * 1000);
        }

        this.element = document.querySelector("#"+this.id);
        this.element.addEventListener("click", () => { this.buy(); });
    }

    buy()
    {
        if (counter >= this.cost)
        {
            counter -= this.cost;
            factor += this.factor; 
            this.own += 1;
            this.factor += 0.1;
            this.cost *= 1.2;
            this.refresh();
        }
    }

    refresh()
    {
        document.querySelector("#"+this.id+" #multiply_counter").textContent = this.own;
        document.querySelector("#"+this.id+" #multiply_cost").textContent = this.cost;
        document.querySelector("#"+this.id+" #multiply_factor").textContent = this.factor;
        document.querySelector("#counter").textContent = counter;
    }
}

let bonusOne = new Bonus("Тыкалка 1", 10, 1.1, "bonusOne", false);

let bonusTwo = new Bonus("Автомат", 20, 1, "bonusTwo", true);

console.log(bonusOne.element);
console.log(bonusTwo.element);