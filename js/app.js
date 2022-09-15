// Add an active state to your navigation items when a section is in the viewport. This has two basic steps.

//     Detect the element location relative to the viewport You will using .getBoundingClientRect() (Links to an external site.) built-in function to accomplish this. Because you are calling this function on every section, it might help to create a makeActive() function to perform the task.

//     function makeActive(){
//       for (const section of sections) {
//           const box = section.getBoundingClientRect();
//           //Find a value that works best, but 150 seems to be a good start.
//           if (box.top <= VALUE && box.bottom >= VALUE) {
//           //apply active state on current section and corresponding Nav link
//           } else {
//           //Remove active state from other section and corresponding Nav link
//           }
//        }
//     }

//     Call the makeActive() function whenever the user scrolls the page.

//     // Make sections active
//     document.addEventListener("scroll", function() { makeActive();});

//     Set CSS class active state when the element is in the viewport. 



const articles = document.querySelectorAll("article");
function isSectionOnScreen(section){
    const box = section.getBoundingClientRect();
    if (box.top <= 25 && box.bottom >= 12) {
        return true;
    } 
    else {
        return false;      
    }
}

function activateSectionOnScroll(){
    window.addEventListener("scroll",function(){
        const navItems = document.querySelector(".navItems");
        const navContainer = document.querySelector("nav");
        navItems.classList.add("schticky");         //add "schticky" class to navItems  
        navContainer.classList.add("schticky");
        
        for (const section of articles){    //[attr=value]
            // const articleAnchor = document.querySelector("[href='#"+section.id+"']");
            const articleAnchor = document.querySelector(`[href="#${section.id}"]`);         //use of template literal instead of the mess above
            if (isSectionOnScreen(section)){
                section.classList.add("active")
                articleAnchor.parentElement.classList.add("active")         //add navListItem active states
                    }
            else{
                section.classList.remove("active")
                articleAnchor.parentElement.classList.remove("active")         //remove active states

            }

        }
    })
}

                //populate nav
const articleList = document.querySelectorAll("[data-article]");            //setting <ul> as variable to work with
function createNavigation(){            //function to populate listitems reference to amount of articles.
    const navItems = document.getElementById("navigation");         //setting variable that references the "navigation" id.
    articleList.forEach(item=>{         // running through all items within articleList and for every item do the following:
        const linkName = item.dataset.article;         // setting variable that targets the value of the dataset of "article"
        const navListItem = document.createElement("li");         //setting variable to create the <li> with
        const navAnchor = document.createElement("a");         //setting variable to create the <a> with
        navListItem.setAttribute("class", "navItem");         //setting attribute of class="navItem" to <li>
        navAnchor.setAttribute("href", `#${item.id}`);         //setting attribute of href=`#${item.id}` which is referring to current item working with.
        navAnchor.innerHTML = linkName;         // puts the linkName as innerHTML of navAnchor
        navListItem.append(navAnchor);         // puts the navAnchor after navListItem
        navItems.appendChild(navListItem);         // adding navListItems to navItems
    });    
}
            //smooth scrolling function attmept 2, did work.
(function SmoothScrollNav(){            //creating function
    const navItems = document.getElementById("navigation");        //target navigation to get  Href from navItems.
    navItems.addEventListener("click",(e)=>{            //add event listener to navItems
        e.preventDefault();         //prevent default behaviour
        const target = e.target         // set event target variable to work with
        const artRef = document.querySelector(target.getAttribute("href"))          //queryselect targets Href attribute
        artRef && artRef.scrollIntoView({           //use scrollIntoView native function to scroll to queryselected Href
            behavior:"smooth"           // smooth sailing.
        })
    })
})()            //immediately invoking funcion


            //smooth scrolling function attempt 1, didn't work.....
// function navSmoothScroll(){ //make function to smooth scroll on all anchors with class navItem
//     const itemsInNavList = document.querySelectorAll(".navigation"); //selecting navItem
//     console.log(itemsInNavList);
//     itemsInNavList.forEach((item) =>{
//             item.addEventlistener("click", (anchor)=> {
//             anchor.preventDefault();
//             const navItem = anchor.target;
//             const art = document.querySelector(navItem.getAttribute("href"));
//             scrollBy({
//                 top: art.getBoundingClientRect().top,
//                 behavior: "smooth"
//             })     
//         })
//     })
// }

          
            //trigger createNavigation function only when DOM is fully loaded
document.addEventListener("DOMContentLoaded", (event)=>{            // added eventlistener to the entire document
    event.preventDefault();          // when event triggers is preventing default actions
    console.log("DOM loaded successfully!");            // logging when dom is fully loaded
    createNavigation();             // call function createNavigation.
    activateSectionOnScroll()
})

let noneTicked = true;          //default value set to true because none is ticked

function CheckAnyTicked() {                // this function will get called when the save button is clicked
    checkBoxes.forEach(item => {            // doing the following for each item in checkBoxes
        if (item.checked) {             //if the check box is checked
            noneTicked = false;         //set noneTicked to false
        }
    });
    if (noneTicked) {
        alert("You have to at least tell us what system you play on");          //when no selection made
    }
    else {
            alert(`Thank you for reaching out! We will reach out to you on ${document.getElementById("email").value}`);         //after succesful submission
    }
}
            //validate either one of the 3 checkboxes is checked
const itemForm = document.getElementById('formCheckBoxes');             // getting the parent container of all the checkbox inputs
const  checkBoxes = itemForm.querySelectorAll('input[type="checkbox"]');            // get all the check box
document.getElementById('submit').addEventListener('click',(e)=> {            //add a click event to the submit button
    e.preventDefault();
    CheckAnyTicked()});