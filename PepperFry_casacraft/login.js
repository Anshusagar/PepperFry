document.querySelector("#btn").addEventListener("click",values)

function values(){
    let i1=document.querySelector("#input1").value
    let i2=document.querySelector("#input2").value
    if(i1.includes("@")!==true||(i1===""||(i2===""))){
        alert("Please Enter Valid Email Address or Password")
    }
    else{
        setTimeout(function(){
            window.location.href = 'loadin.html';
         }, 1000)
    }
}

