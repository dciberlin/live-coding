// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/
import {recipeData} from "./data";

//console.log(recipeData);

//convert JSON data into Object
let parseData=JSON.parse(recipeData);
//console.log(parseData);

//let testObject=Object.entries(parseData);
//console.log(testObject);

// let cakes=document.getElementById('cakes');
// let biscuits=document.getElementById('biscuits');
// let bread=document.getElementById('bread');
let html="";


Object.entries(parseData).forEach(entryCards => {
  //console.log(entryCards);
  //console.log(entryCards[1]);

 entryCards[1].map(card=>{
    console.log(card.type);

    html=`<div class="card m-3" style="width: 18rem;">
    <img src="${card.image}" class="card-img-top" alt="Baked Goods" height="200rem">
    <div class="card-body">
      <h4 class="card-title">${card.title}</h4>
      <h6>${card.author}<h6>
      <p class="border-top border-secondary pt-2">Ingredients: ${card.ingredients.join(", ")}</p>
    </div>
  </div>`;

  document.getElementById(card.type).insertAdjacentHTML("afterbegin",html);

  /*
    if(card.type=='cakes')
    {
      document.getElementById('cakes').insertAdjacentHTML("afterbegin",html);
    }
    if(card.type=='biscuits')
    {
      biscuits.insertAdjacentHTML("afterbegin",html);
    }
    if(card.type=='bread')
    {
      bread.insertAdjacentHTML("afterbegin",html);
    }
    */


 });
  
});