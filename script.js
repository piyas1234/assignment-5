const classdomName = (className) => {
    return document.getElementsByClassName(className)
}

const searchInput = classdomName('searchInput')
const submitBtn = classdomName('submit')
const itemsClass = classdomName('itemsClass')
const showfoundResult = classdomName('showfoundResult')
const loadingClass = classdomName('looading')
const detailsMeal = classdomName('detailsMeail')
const itemsdetailsClass = classdomName('itemsdetailsClass')
submitBtn[0].addEventListener('click', () => {
    const loadMeal = async () => {
        try {
            loadingClass[0].style = "display:block"
            const searchValue = searchInput[0].value
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
            const mealArray = res ? await res.json() : null;
            if (mealArray !== null) {
                loadingClass[0].style = "display:none"
            }
            displayMeals(mealArray.meals)
            console.log(mealArray.meals)


        } catch (err) {
            console.error(err);
        }
    };

    loadMeal();
})


const displayMeals = (mealsArray) => {

    const lengthMeals = mealsArray ? mealsArray.length : 0
    showfoundResult[0].innerHTML = `<h5 class='text-white  bg-warning p-4'>Total Result Found: ${lengthMeals}</h>`
    const htmlString = lengthMeals !== 0 ? mealsArray
    .map((items, index) => {
        console.log(index)

        return ` 
           <div  class='col-md-3 detailsMeail'>
           <div class='m-1 p-3 card'>
           <img class='card-img' src="${items.strMealThumb}"></img>
           <h6 class='mt-3 p-3'>${items.strMeal}</h6> 
           </div>
           </div>

        `;
    }).join('') : `<h1 class='text-center text-white p-3 mt-5 bg-primary'>Result Not Found!!!</h1>`

itemsClass[0].innerHTML = htmlString;



 

}


 


 
// mealsArray.forEach((items) => {
//     const mealDiv =document.createElement('div');
//     mealDiv.className = 'meal col-md-3';
    
//     const mealDelatis = ` 
//             <div onclick="displaymealDetails('${items}')" class='m-1 p-3 card'>
//             <img class='card-img' src="${items.strMealThumb}"></img>
//             <h6 class='mt-3 p-3'>${items.strMeal}</h6> 
            
//             </div>  `
//             mealDiv.innerHTML = mealDelatis;
//             itemsClass[0].appendChild(mealDiv)
// });


 