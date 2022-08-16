console.log("This is js file");
// const http=require('http')
// const port=3000;

 let user=document.getElementById("fname");
let bio=document.getElementById("bio");
let repo=document.getElementById("repo");
let names=document.getElementById("name");
let followers=document.getElementById("follower");
let following=document.getElementById("following");
let username=document.getElementById("username");
let prof_img=document.getElementById("prof_img");
// fetch(`https://api.github.com/users/login)
// const server=http.createServer(function(req,res){
const fetchUser=(user_name)=>{
    fetch(`https://api.github.com/users/${user_name}`)
    .then((data) => data.json())
		.then((jsonData) => {
            // console.log(data);
            if(jsonData.message=="Not Found"){
                alert("User not found");
                console.log("user not found");
                return;
            }
            else{
                
                prof_img.src=jsonData.avatar_url;
                username.innerHTML=`@${jsonData.login}`;
               username.href=jsonData.html_url;
                names.innerHTML=jsonData.name;
                bio.innerHTML=jsonData.bio;
                repo.innerHTML=jsonData.public_repos;
                followers.innerHTML=jsonData.followers;
                following.innerHTML=jsonData.following;
            console.log(jsonData.bio);
            console.log(jsonData.repos);
            }
        })
}
    
    const getUser=()=>{
        let user_n=user.value.trim()
        let user_name=user_n.split(' ').join('');
        console.log(user_name);
        console.log(user_name);
        if(user_name.length==0){
        console.log("User not found");
        alert("Please enter the user name");
        }
        else 
        fetchUser(user_name)
    }
    user.addEventListener("keyup", event =>{
        if(event.key === "Enter")
        getUser();
    })
       
//  })
// server .listen(port,function(error){
//    if(error){
//         console.log('Something went wrong',error)
//     }else{
//         console.log('Server is listening on port'+port)
//     }
//  })