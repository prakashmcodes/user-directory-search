const searchInputEl = document.getElementById("searchinput");
const selectRoleEl = document.getElementById("selectrole");
const userListEl = document.getElementById("userlist");

const userData = [
  {
    name: "prakash",
    role: "Developer",
    email: "mprakash@gmail.com",
    contact: 9876543210,
    image: "/images/maledp.jpeg",
  },
  {
    name: "dhanush",
    role: "Designer",
    email: "dhanush@gmail.com",
    contact: 9876543210,
    image: "/images/maledp.jpeg",
  },
  {
    name: "pavitra",
    role: "Developer",
    email: "pavitra@gmail.com",
    contact: 9876543210,
    image: "/images/femaledp.jpg",
  },
  {
    name: "kavin",
    role: "HR",
    email: "kavin@gmail.com",
    contact: 9876543210,
    image: "/images/maledp.jpeg",
  },
];

//display user
const displayUser=(userData)=>{
    userListEl.innerHTML=""
if(userData.length==0){
    userListEl.innerHTML=`<p class="text-red-700 mt-3 p-3">No user found</P>`
    return
}

userData.forEach((userdata)=>{
  console.log(userdata)

    const cardEl=document.createElement("div")
    cardEl.innerHTML=`<div class="bg-white p-3 rounded shadow flex flex-col justify-center items-center">
    
      <img src=${userdata.image} class="h-32 w-32 object-cover rounded-full border-2 border-gray-700">
      <h1 class="font-bold text-black text-lg">${userdata.name}</h1>
      <h1 class="font-semibold text-gray-700 text-lg">${userdata.role}</h1>
      <p class="text-gray-700">${userdata.contact}</p>
      <p class="text-gray-700">${userdata.email}</p>
    </div>`
userListEl.append(cardEl)

})
}



const filteredData=()=>{
    const searchValue=searchInputEl.value.toLowerCase().trim()
    const filterValue=selectRoleEl.value.toLowerCase()

    const filtered = userData.filter((userData)=> {
      const searchedUser = userData.name.toLowerCase().includes(searchValue)
      const matchRole=filterValue==="all"||userData.role.toLowerCase()==filterValue
   return searchedUser && matchRole
    })
    console.log(filtered)
    displayUser(filtered)
}

searchInputEl.addEventListener('input',filteredData)
selectRoleEl.addEventListener('change',filteredData)

displayUser(userData)



