

const loadUsers = ()=>{
 fetch ('https://randomuser.me/api/?gender=female')
 .then(res => res.json())
 .then(data => displayUsers(data))
}
 const displayUsers =random=>{
    console.log(random)
    const name = document.getElementById('name');
    console.log(random.results[0]);
    name.innerHTML = random.results[0].name.title +' ' +random.results[0].name.first + ' ' + random.results[0].name.last;
    const gender =document.getElementById('gender');
    gender.innerHTML= random.results[0].gender;

    const location =document.getElementById('location');
    location.innerHTML=random.results[0].location.city + ' ' + random.results[0].location.country;
   const image = document.getElementById('image');
   image.innerHTML = `
   <img src =" ${random.results[0].picture.large}" />
   `;
  
    picture.innerHTML= random.results[0].picture.large;


 }
loadUsers();