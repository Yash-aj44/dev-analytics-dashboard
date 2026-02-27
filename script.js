//THEME PERSISTENCE
const toggleBtn=document.getElementById("themeToggle");
if(localStorage.getItem("theme")==="light"){
    document.body.classList.add("light");

}
toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("light");
    const theme=document.body.classList.contains("light")?"light":"dark";
    localStorage.setItem("theme",theme);
});

//COUNTER ANIMATION
const counters=document.querySelectorAll(".counter");
counters.forEach(counter=>{
    const target=+counter.getAttribute("data-target");
    let count=0;

    const update=()=>{
       const increment = target/120;
       if(count<target){
        count+=increment;
        counter.innerText=Math.ceil(count);
        requestAnimationFrame(update);
       }else{
        counter.innerText=target;
       }
    };
    update();
});

//CHARTS
new Chart(document.getElementById("lineChart"),{
    type:"line",
    data:{
        labels:["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],
        datasets:[{
            label:"HoursCoded",
            data:[2,4,3,5,6,4,7],
            borderColor:"#6366f1",
            backgroundColor: "rgba(99,102,241,0.2)",
            tension:0.4,
            fill:true
        }]
    },
    options:{
        responsive:true
    }
});

new Chart(document.getElementById("barChart"),{
    type:"bar",
    data:{
        labels:["JS","Python","Java","C++"],
        datasets:[{
            label:"Projects by Tech",
            data:[8,5,3,2],
            backgroundColor:"#6366f1"
        }]

    },
    options:{
        responsive:true
    }
});

//PROJECT DATA
const projects=[
    {name:"Portfolio Website"},
    {name:"Chatbot UI"},
    {name:"Weather APP"},
    {name:"EXpense Tracker"},
    {name:"Crypto Dashboard"},

];

const grid=document.getElementById("projectGrid");
function displayProjects(items){
    grid.innerHTML="";
    items.forEach(project=>{
        const card=document.createElement("div");
        card.className="project-card";
        card.textContent=project.name;
        grid.appendChild(card);

    });
}

displayProjects(projects);

//SEARCH FILTER

document.getElementById("search").addEventListener("input",e=>{
    const value=e.target.value.toLowerCase();
    const filtered=projects.filter(p=>p.name.toLowerCase().includes(value)
);
displayProjects(filtered);
});


