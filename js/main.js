let counter = 0;
let factor = 1;

document.querySelector('#button').addEventListener('click', function()
{
    counter += factor;
    document.querySelector("#counter").textContent = counter.toFixed(1);

    let vfx = document.querySelector(".button-vfx");
    vfx.style.backgroundImage = 'url("./img/buttonVfx.gif")';
    setTimeout (function() {
        vfx.style.backgroundImage = 'unset';
    }, 100);
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

        let tags = '<div class="'+this.id+' bonus" href="#"> <div class="bunus-vfx"></div> <h2>'+this.name+'</h2> <p> ИМЕЕТСЯ: <span class="multiply_counter">'+this.own+'</span> </p> <p> ЦЕНА: <span class="multiply_cost">'+this.cost+'</span> </p> <p> МНОЖИТЕЛЬ: <span class="multiply_factor">'+this.factor+'</span> </p> </div>';
        document.querySelector(".b-three").innerHTML += tags;
        
        this.element = document.querySelector("."+this.id);

        if (this.automate == true)
        {
            setInterval(() =>
            {
                counter += (this.own * this.factor);
                this.refresh();    
            }, 1 * 1000);
        }
    }

    buy()
    {
        if (counter >= this.cost)
        {
            this.animation();
            counter -= this.cost;
            factor += this.factor;
            this.own += 1;
            this.factor += (this.factor * 0.2);
            this.cost *= 1.2;
            this.refresh();
        }
    }

    refresh()
    {
        document.querySelector("."+this.id+" .multiply_counter").textContent = (this.own).toFixed(1);
        document.querySelector("."+this.id+" .multiply_cost").textContent = (this.cost).toFixed(1);
        document.querySelector("."+this.id+" .multiply_factor").textContent = (this.factor).toFixed(1);
        document.querySelector("#counter").textContent = counter.toFixed(1);
        document.querySelector("#factor").textContent = factor.toFixed(1);
    }

    listener()
    {
        document.querySelector("."+this.id).addEventListener('click', () => { this.buy(); });
    }

    animation()
    {
        let vfx = document.querySelector("."+this.id).querySelector(".bunus-vfx");
        vfx.style.backgroundImage = 'url("./img/bonusVfx.gif")';
        setTimeout (function() {
            vfx.style.backgroundImage = 'unset';
        }, 100);
    }
}

// (name, cost, factor, id, automate~) 
let one = new Bonus('Улучшалка 1', 10, 1.1, 'one', false);
let two = new Bonus('Автомат 1', 100, 1, 'two', true);
let three = new Bonus('Улучшалка 2', 1000, 10, 'three', false);
let four = new Bonus('Автомат 2', 5000, 100, 'four', true);

one.listener();
two.listener();
three.listener();
four.listener();