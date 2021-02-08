const classdomName = (className) => {
    return document.getElementsByClassName(className);
}

const searchInput = classdomName('searchInput');
const submitBtn = classdomName('submit');
const showfoundResult = classdomName('showfoundResult');
const loadingClass = classdomName('looading');
const itemsClass = classdomName('itemsClass');
const itemsdetailsClass = classdomName('itemsdetailsClass');
submitBtn[0].addEventListener('click', () => {
    itemsClass[0].childElementCount > 0 ? itemsClass[0].innerHTML = "" : '';
    const loadMeal = async () => {
        try {
            loadingClass[0].style = "display:block";
            const searchValue = searchInput[0].value;
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
            const mealArray = res ? await res.json() : null;
            if (mealArray !== null) {
                loadingClass[0].style = "display:none";
            }
            displayMeals(mealArray.meals);
            console.log(mealArray.meals);


        } catch (err) {
            console.error(err);
        }
    };

    loadMeal();
})


const displayMeals = (mealsArray) => {

    const lengthMeals = mealsArray ? mealsArray.length : 0;
    showfoundResult[0].innerHTML = `<h5 class='text-white  bg-warning p-4'>Total Result Found: ${lengthMeals}</h>`;


    lengthMeals !== 0 ? mealsArray.forEach((items, index, array) => {
        window.array = array
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal col-md-3';

        const mealDelatis = ` 
                <div onclick="mealdelatisView(${index})" class='m-1 p-3 card'>
                <img class='card-img' src="${items.strMealThumb}"></img>
                <h6 class='mt-3 p-3'>${items.strMeal}</h6>  
                </div>  `

        mealDiv.innerHTML = mealDelatis;

        itemsClass[0].appendChild(mealDiv);


    }) : `<h1 class="text-white bg-info p-3 text-center">No food Found</h1>`;

}


function mealdelatisView(index) {
    items = array[index];
    itemsClass[0].style = "display:none";
    itemsdetailsClass[0].style = "display:block";
    const mealDiv = document.createElement('div');
    mealDiv.className = 'meal col-md-8 offset-md-2';

    if (items) {
        const mealDelatis = ` 
        <div  class='m-1 p-3 card'>
        <input value="Return Home" type="submit" onclick="goHome()" class="btn btn-success text-white w-50 m-5"/>
        <img  class='card-img w-75' src="${items.strMealThumb}"></img>
        <h2 class='mt-3 p-3'>${items.strMeal}</h2> 
        <h5>ingredients</h5> 
        <ul>
        <li>Area: ${items.strArea}</li>
        <li>Category: ${items.strCategory}</li>
        <li>  ${items.strIngredient1}</li>
        <li>  ${items.strIngredient2}</li>
        <li>  ${items.strIngredient3}</li>
        <li>  ${items.strIngredient4}</li>
        <li>  ${items.strIngredient5}</li>
        <li>  ${items.strIngredient6}</li>
        <li>  ${items.strIngredient7}</li>
        <li>  ${items.strIngredient8}</li>
        <li>  ${items.strIngredient9}</li>
        <li>  ${items.strIngredient10}</li>
        <li>  ${items.strIngredient11}</li>
        <li>  ${items.strIngredient12}</li>
        <li>  ${items.strIngredient13}</li>
        </ul>
        </div>  `

        mealDiv.innerHTML = mealDelatis;
        itemsdetailsClass[0].appendChild(mealDiv);
    }

}


function goHome() {

    itemsdetailsClass[0].removeChild(itemsdetailsClass[0].lastElementChild);
    itemsClass[0].style = "display:inline-block,d-flex";
    itemsdetailsClass[0].style = "display:none";
}




