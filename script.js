
const pridejimas = document.querySelector("#pridejimas");
const atemimas = document.querySelector("#atemimas");

pridejimas.addEventListener("click",function(event) {
    event.preventDefault();
    pridetis();
})

atemimas.addEventListener("click",function(event) {
    event.preventDefault();
    atimtis();
})

function pridetis(){
    let produktai = {};
    const p_code = document.querySelector("#p_code").
    value;
    const p_name = document.querySelector("#p_name").value;
    const p_quantity = document.querySelector("#p_quantity").value;
    if(p_code.length<3){
        alert("Blogas product code, min symbols: 3")
        return;
    } else if(p_name.length == 0){
        alert("Truksta name")
        return;
    } else if(p_quantity.length == 0){
        alert("Truksta quantity")
        return;
    } else{
        produktai = {"Code": p_code,
                    "Name": p_name,
                    "Quantity": p_quantity};
        let fa = localStorage.setItem("produktas",JSON.stringify(produktai))
    }

}

function atimtis(){
    
}