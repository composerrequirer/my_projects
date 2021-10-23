var path = window.location.href
{
    let items_game = ['onion', 'garlic', 'grapes', 'tomatoes', 'mango', 'pineaplle', 'limon', 'strawberry', 'cocunut', 'banana'];
    let box = document.querySelector('.main-content');
    for(let count = 1; count < 22; count++){
        let template = `
        <div card_id="${count}" class="card-single opacity">
            <h3>${items_game[Math.floor(Math.random()*10)]}</h3>
        </div><!-- cardsingle -->`
        box.innerHTML += template;
    }
}

var already_selected = [];
var fruit_past = null;
var count_times = 6;

{
    let items_game = document.querySelectorAll('.card-single');
    items_game.forEach((item)=>{
        item.addEventListener('click', (element)=>{
            let id;
            let selected;
            let clicked;
            if((element.target.getAttribute('card_id') == null) && !(already_selected.includes(element.target.parentNode.getAttribute('card_id')))){
                selected = element.target.innerHTML;
                element.target.parentNode.classList.remove('opacity');
                already_selected.push(element.target.parentNode.getAttribute('card_id'));
                id = element.target.parentNode.getAttribute('card_id');
                clicked = element.target.parentNode;

            }else if(!(already_selected.includes(element.target.getAttribute('card_id')))){
                element.target.classList.remove('opacity');
                selected = element.target.innerHTML
                already_selected.push(element.target.getAttribute('card_id'));
                id = element.target.getAttribute('card_id');
                clicked = element.target;
            }
            if(already_selected.length > count_times){
                alert('Game Over');
                window.location.href = path;
            }

            if(fruit_past == null){
                fruit_past = [{name: selected, id: id}];
            }else{
                let clear = false;
                fruit_past.map((inside)=>{
                    if(inside.name ==  selected){
                        clicked.style.backgroundColor = 'lightgreen';
                        document.querySelector(`[card_id='${fruit_past[0].id}']`).style.backgroundColor =  'lightgreen';
                        count_times += 2;
                        fruit_past = null;
                        alert('Congrats');
                    }else{
                       clear = true; 
                    }
                });
                if(clear == true){
                    clicked.style.backgroundColor = 'red';
                    document.querySelector(`[card_id='${fruit_past[0].id}']`).style.backgroundColor =  'red';
                    fruit_past = null;
                }
            }
            console.log(already_selected)
        })
    });
}