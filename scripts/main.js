let counter = 0;
let factor = 1;

document.querySelector('#button').addEventListener('click', function()
{
    counter = counter + (1 * factor);
    refresh();
});

function refresh ()
{
    document.querySelector("#counter").textContent = counter;
}

refresh();

class Bonus
{
    constructor(name, cost, factor, id) 
    {
        this.name = name;
        this.cost = cost;
        this.factor = factor;
        this.own = 0;
        this.id = id;

        let tags = '<a class="bonus" id="'+id+'" href="#"> <h2>'+this.name+'</h2> <p> ИМЕЕТСЯ: <span id="multiply_counter">'+this.own+'</span> </p> <p> ЦЕНА: <span id="multiply_cost">'+this.cost+'</span> </p> <p> МНОЖИТЕЛЬ: <span id="multiply_factor">'+this.factor+'</span> </p> </a>';
        document.querySelector(".b-three").innerHTML = tags;
        
        document.querySelector("#"+this.id).addEventListener("click", () =>
        {
            if (counter >= this.cost)
            {
                this.own += 1;
                this.cost += Math.round(this.cost * 0.1);
                this.factor += 0.2;
                refresh();
                document.querySelector("#"+this.id+" #multiply_counter").textContent = this.own;
                document.querySelector("#"+this.id+" #multiply_cost").textContent = this.cost;
                document.querySelector("#"+this.id+" #multiply_factor").textContent = this.factor;

                this.update();
            }
        });
    }
    update()
    {
        counter -= this.cost;
        factor = this.factor;
        refresh();
    }
}

let bonusOne = new Bonus("Адин", 10, 1.1, "bonusOne");