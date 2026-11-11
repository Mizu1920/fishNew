let paragraph1 = document.querySelector("#paragraph1")
let paragraph2 = document.querySelector("#paragraph2")

paragraph1.addEventListener("mouseover", () =>{
    console.log("Wrong line you dummy!");
})
paragraph2.addEventListener("mouseover", function() {
    console.log("Now click the same line...");
})
paragraph2.addEventListener("click", function() {
    alert(":3");
})
