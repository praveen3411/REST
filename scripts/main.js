let addusers=async()=>{
    const hello={
        name:document.querySelector("#uone").value,
        age:document.querySelector("#utwo").value,
        city:document.querySelector("#uthree").value,
        study:document.querySelector("#ufour").value,
        image:document.querySelector("#usix").value,
    }
    let response=await fetch(`http://localhost:5000/api/users`,{
        method:"POST",
        body:JSON.stringify(hello),
        headers:{'Content-Type':'application/json'},
    });
    let output=await response.json();
}
let another=async()=>{
    let make=await fetch(`http://localhost:5000/api/users`);
    let give=await make.json();
    giveittoanother(give);
}
another();
let ame=document.querySelector("#tak");

let giveittoanother=(data)=>{
    data.forEach((ele,index) => {
        let one=document.createElement("div");

        let shot=document.createElement("h3");
        shot.innerText=ele.name;

        let shotone=document.createElement("h3");
        shotone.innerText=ele.age;

        let shotthreee=document.createElement("h3");
        shotthreee.innerText=ele.city;

        let shotfour=document.createElement("h4");
        shotfour.innerText=ele.study;

        let shotfive=document.createElement("img");
        shotfive.setAttribute("src",ele.image);
        
        one.append(shot,shotone,shotthreee,shotfour,shotfive);

        ame.append(one);
    });
}

let delfun=async()=>{
    let takone=document.querySelector("#idone").value;
    let res=await fetch(`http://localhost:5000/api/users/${takone}`,{
        method:"DELETE",
        headers:{'Content-Type':'application/json'},
    })
    let done=await res.json();
}

let changefun=async()=>{
    let takon=document.querySelector("#idtwo").value;
    let man=await fetch(`http://localhost:5000/api/users/${takon}`,{
        method:"PATCH",
        body:JSON.stringify({
            name:"danny-Bhai",
        }),
        headers:{'Content-Type':'application/json'},
    })
    let bark=await man.json();
}