
const loadMeal =(searchText)=>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
 


// //  async---await ////
// const loadMeal2 = async (iddMeal) =>{
//     const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
//     const res = await fetch(url);
//     const data =   res.json();
//     displayMeals(data.meals[0]);

// }


const displayMeals = meals =>{
    // console.log(meals)
    const mealContainer =document.getElementById('meal-container');
    mealContainer.innerText='';
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML=`
        <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <!-- Button trigger modal -->
         <button onclick="loadDataMeal(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
         Details
         </button>
        </div>
      </div>
        `;
        mealContainer.appendChild(mealDiv);  
    });
}

 const searchMeals =()=>{
   const searchText =document.getElementById('search-field').value ;
    console.log(searchText)
    loadMeal(searchText);
 }
 const loadDataMeal = meal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`
    fetch(url)
    .then(res => res.json())
    .then (data => displayMealDetails(data.meals[0]))

 
 }

 const displayMealDetails =food=>{
    document.getElementById('mealDetailsLabel').innerText = food.strMeal;
        
        const mealDetailsImg =document.getElementById('modalDetails-img');
        mealDetailsImg.innerHTML =`
        <img class="img-fluid"
         src="${food.strMealThumb}" >
        `

 }

loadMeal('chi')