const h1 = document.getElementsByTagName('h1')[0]

const body = document.getElementById("body")

const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
//    h1[0].innerText = "Huseynzade Sufiye"
        h1.classList.toggle("text-white")
        body.classList.toggle("bg-black")
        btn.innerText = "light mode"
        const isdarkmode = body.classList.contains("bg-black")
        btn.innerText = isdarkmode ? "light mode" :"dark mode"

})

btn.addEventListener("mouseover" , () => {
        btn.classList.add("cursor-pointer")
})

// const items = Array.from(document.getElementsByClassName("item"))

// items.forEach(item => {
//     item.classList.add("bg-red-300");
//     item.classList.add("p-7");
//     item.classList.add("w-20");
//     item.classList.add("h-20");
//     item.classList.add("m-20");
//     item.classList.add("text-white");
// });



