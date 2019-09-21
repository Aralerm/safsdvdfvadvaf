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

        let tags = '<div class="'+this.id+' bonus" href="#"> <h2>'+this.name+'</h2> <p> ИМЕЕТСЯ: <span class="multiply_counter">'+this.own+'</span> </p> <p> ЦЕНА: <span class="multiply_cost">'+this.cost+'</span> </p> <p> МНОЖИТЕЛЬ: <span class="multiply_factor">'+this.factor+'</span> </p> </div>';
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
        document.querySelector("."+this.id+" .multiply_counter").textContent = this.own;
        document.querySelector("."+this.id+" .multiply_cost").textContent = this.cost;
        document.querySelector("."+this.id+" .multiply_factor").textContent = this.factor;
        document.querySelector("#counter").textContent = counter;
    }

    listener()
    {
        document.querySelector("."+this.id).addEventListener('click', () => { this.buy(); });
    }
}

// (name, cost, factor, id, automate~) 
let one = new Bonus('one', 10, 1.1, 'o', false);
let two = new Bonus('two', 20, 1, 't', true);
let three = new Bonus('three', 30, 1.2, 'r', false);
let four = new Bonus('four', 40, 1.3, 'f', true);

one.listener();
two.listener();
three.listener();
four.listener();