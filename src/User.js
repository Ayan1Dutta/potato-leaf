


const fetchUser = new Promise((resolve,reject)=>{
    const user=localStorage.getItem("user")
    if(user)resolve(JSON.stringify(user))
    else reject("user is not registered")
})