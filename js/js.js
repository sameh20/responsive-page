// global variables
var navList = document.getElementById('navlist');
var sections = document.querySelectorAll('section');


// functions 
// build nav
window.addEventListener("load",buildNav())

function buildNav(){
    sections.forEach((element)=>{
     let listItem = document.createElement("li")
     let sectionName = element.getAttribute("data-name");
     let currentSectionId = element.getAttribute("id");
     let sectionclass = element.getAttribute("class")
     listItem.innerHTML=(`<a  href ="#${currentSectionId}" >${sectionName}</a>`)
     navList.appendChild(listItem);


    })
}
// fixed header
   window.onscroll = function fixedHead(){
    if(window.scrollY>60){
    document.getElementById("nav").style.background="rgba(252, 252, 252)";
    }else if(window.scrollY<60){
    document.getElementById("nav").style.background="transparent";
    }else{
    return false
    }}
    
    // function 
    // active nav function
    var navLinks = document.querySelectorAll("header ul li a")

    window.addEventListener("scroll",function(event){
	event.preventDefault();
        let current = '';
        sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHight = section.clientHeight;
        if(pageYOffset >= sectionTop){
            current = "#"+section.getAttribute("id")
        }
    })
    navLinks.forEach(link=>{

    link.classList.remove("activenav")
    let activelink = link.getAttribute("href");
    if(activelink === current){
     link.classList.add("activenav")
    }
    })
    })

    // Scroll to section on link click
    scrollToActiveSection();
    // function smooth scroll
    function scrollToActiveSection() {
        navLinks.forEach((element) => {
            element.addEventListener("click", function(event) {
                event.preventDefault();
                document.querySelector(element.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
