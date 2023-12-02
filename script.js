let speechBubble = document.querySelector(".speechBubble");
let blinkBox = document.querySelector(".blinkBox");
let introContainer = document.querySelector(".introContainer");
let questionContainer = document.querySelector(".questionContainer");
let hmNameButton = document.querySelector(".hmNameButton");
let hmName = document.querySelector("#hmName");
let coverLetterPart1 = document.querySelector(".coverLetterPart1");
let manager = document.querySelector(".manager");
let skillsAlert = document.querySelector(".skillsAlert");
let moreButton = document.querySelector(".moreButton");
let coverLetterPart2 = document.querySelector(".coverLetterPart2");
let slideup = document.querySelector(".slideup");
let fading = document.querySelector(".fading");
let more2Button = document.querySelector(".more2Button");
let study = document.querySelector(".study");
let studyHover=document.querySelector(".studyHover");
let jobSkills = document.querySelector(".jobSkills");
let jobSkillsHover = document.querySelector(".jobSkillsHover");
let hoverDivStudy = document.querySelector(".hoverDivStudy");
let hoverDivSkills = document.querySelector(".hoverDivSkills");
let passion = document.querySelector(".passion");
let passionHover= document.querySelector(".passionHover");
let hoverDivPassion = document.querySelector(".hoverDivPassion");
let coverLetterPart3 = document.querySelector(".coverLetterPart3");
let explanationBox = document.querySelector(".explanationBox");
let explanationTextBox = document.querySelector(".explanationTextBox");
let draggableElements = document.querySelectorAll(".draggable");
let dropZone = document.querySelector(".dropZone");
let dropComImg = document.querySelector(".dropComImg");
let dropHere = document.querySelector(".dropHere");
let dragContainer = document.querySelector(".dragContainer");
let carouselBootstrap = document.getElementById("carouselBootstrap");
let campHeader = document.querySelector(".campHeader");
let coverLetterPart4 = document.querySelector(".coverLetterPart4");
let body = document.getElementsByTagName("BODY");
let rightArrow = document.querySelector(".rightArrow");
let leftArrow = document.querySelector(".leftArrow");
let miniTitleFeat = document.querySelector(".miniTitleFeat");
let displayProject = document.querySelector(".displayProject");
let projectTitle = document.querySelector(".projectTitle");
let projectDescription = document.querySelector(".projectDescription");
let slot2Img = document.querySelector(".slot2Img");
let slot3Img = document.querySelector(".slot3Img");
let slot2Title = document.querySelector(".slot2Title");
let slot3Title = document.querySelector(".slot3Title");
let button5 = document.querySelector(".button5");
let coverLetterPart5 = document.querySelector(".coverLetterPart5");
let why1 = document.querySelector(".why1");
let why2 = document.querySelector(".why2");
let why3 = document.querySelector(".why3");
let why4 = document.querySelector(".why4");
let why5 = document.querySelector(".why5");
let button6 = document.querySelector(".button6");
let why6 = document.querySelector(".why6");
let why7 = document.querySelector(".why7");
// let why8 = document.querySelector(".why8");
let resumeDownload = document.querySelector(".resumeDownload");
let end = document.querySelector(".end");
let startOver = document.querySelector(".startOver");
let paint = document.querySelector(".paint");
// let linkDiv = document.querySelector(".linkDiv");
let link1 = document.querySelector(".link1");
let link2 = document.querySelector(".link2");
let link3 = document.querySelector(".link3");
let featLiveLink = document.querySelector(".featLiveLink");
let imgBox3 = document.querySelector(".imgBox3");
let imgBox2 = document.querySelector(".imgBox2");
let codeImgLink1=document.querySelector(".codeImgLink1");
let codeImgLink2=document.querySelector(".codeImgLink2");
let projectImgPopUp=document.querySelector(".projectImgPopUp");
let projCodeImg = document.querySelector(".projCodeImg");
let rightProjImgArrow = document.querySelector(".rightProjImgArrow");
let leftProjImgArrow = document.querySelector(".leftProjImgArrow");
let exitCodeImg = document.querySelector(".exitCodeImg");

console.log(exitCodeImg);
console.log(draggableElements);

let managerName;
let count;
let changeName = 0;
let button6Click = 0;
let projCodeImgArray = [];
let projNumber = 0;

const button4 = document.createElement("button");
button4.className="button4";

//Project Details (Title, Description, Image, Links)
let p1Title="Interactive Cover Letter";
let p1Description="This project is my attempt to stand out to potential employers.  While I will continue to submit cover letters, for someone who wants a break from the usual, they can click the link and learn a little about me, while also seeing my work in action.  This was also a chance for me to practice DOM manipulation and CSS animations. The biggest challenges in this project have been getting the Drag and Drop feature to behave exactly as I want it and also the responsiveness. This project page was inspired by how Home Depot displays their Core Values and I really enjoyed coming up with the JS code to switch back and forth between projects."
let p1Image="./imgs/cvScreen.png";
let p1link1="https://github.com/PBadila/coverLetterDiscord";
let p1link1Inner="GitHub"
let p1Live="https://cvdiscord.onrender.com";

let p2Title="Personal Blog";
let p2Description="The goal of this blog was to document my journey from the end of bootcamp to getting a job as a Software Engineer. I used this project to practice creating a database and get comfortable with React. I encountered a few obstacles, all which I actually chronicled in the blog, such as password protection and being able to edit a post. Another issue, one that I keep encountering, is getting the info from the API's to show up on the web page.  I think this may be an issue with the host that I am using, but the work around is to have the LOADING... message. If you encounter it, wait awhile, trust me - it will load eventually.";
let p2Image="./imgs/blog.png";
let p2link1="https://www.youtube.com/watch?v=NRrTH-7el38";
let p2link1Inner="Video"
let p2link2="https://github.com/PBadila/blog";
let p2link2Inner="GitHub Backend";
let p2Live = "https://journeytosoftwareengineer.onrender.com/";

let p3Title="Community Garden";
let p3Description="An app aimed at addressing food deserts by allowing users to join and interact with a community garden. As an urban agriculturist, this project was of particular interest to me. I played a key role in building the backend, creating the database and routes, and implementing API fetches. This project provided valuable experience in team dynamics, user story-driven programming, GitHub collaboration, as well as deployment through Render.com and database hosting with ElephantSQL.";
let p3Image="./imgs/garden.png";
let p3link1="https://github.com/PBadila/community-garden-front-end";
let p3link1Inner="GitHub Frontend"
let p3link2="https://github.com/PBadila/community-garden-backend";
let p3link2Inner="GitHub Backend"
let p3link3="https://community-garden-api.onrender.com/";
let p3link3Inner="API"
let p3Live = "https://community-garden.onrender.com/";

let p4Title="DOS Card Counter";
let p4Description="An app designed for a statistics class to use to count cards in the game of DOS. Probability calculation capability will be added soon. For now, you can click on the card color, then number, and a tally will be kept. Created using JavaScript, HTML, CSS.";
let p4Image="./imgs/dosGame.png";
let p4link1="https://github.com/PBadila/dosCardCounter";
let p4Live="https://doscardcounter.onrender.com/";
let p4linkInner="GitHub";

let p5Title="Squarespace Customization";
let p5Description="This was a group project.  Actually, my wonderful Son, who is a 3D Artist and a phenomenal Coder, was the designer and coder for this site.  My role was to write the JavaScript code for the About Me Page buttons and integrate it into the Squarespace site.  This required me to actually learn how to use JQuery.  Now the About Me buttons are clickable and the appropriate divs appear and disappear.";
let p5Image="./imgs/solSiteMain.png";
let p5Live="https://www.cantkillmysol.com/about";
let p5link1Inner="Code Snippets";
let codeImgNum = 2;
let p5link1Img="./imgs/solSiteCode.png";
let p5link2Img="./imgs/solSiteCode2.png";
let p5linkImgs = ["./imgs/solSiteCode.png", "./imgs/solSiteCode2.png"];

let p6Title="Homeschool Division";
let p6Description="I homeschool my children and I designed this site to help my girls practice the concept of division. For my final bootcamp solo project, I used REACT to design a homeschool app.  I am re-creating that (but better and more elaborate now that I have a better understanding of REACT) and this division practice will be a part of the final Homeschool REACT app. This was created with HTML, CSS, and JavaScript, as I focus on writing cleaner, re-usable code."
let p6Image="./imgs/ldProjectCode1.png";
let p6link1Inner="Code Snippets";
let p6Live="https://homeschooldivision.onrender.com/";
let p6linkImgs = ["./imgs/divSS3.png","./imgs/divSS4.png","./imgs/divSS5.png"];

let p7Title="Green Squares Challenge";
let p7Description="I was reading an article on Free Code Camp entitled 'How to Build Successful Projects as a Junior Developer' and it mentioned this coding challenge, so I decided to try it.  Setting up the squares and getting them to turn green was easy.  Getting them to de-colorize with a time lapse in between proved to be a challenge that led me to a deeper understanding of the asynchronicity of the setTimeout function and how to work around it."
let p7Image="./imgs/greenSquares.png";
let p7link1Inner="Code Snippets";
let p7Live="https://greensquares.onrender.com/";
let p7LinkImgs=["./imgs/gs1.png","./imgs/gs2.png"];


// Initial speech bubble and click here for Introduction Page
window.addEventListener('load', function () {
    setTimeout( function() {
        speechBubble.style.visibility = 'visible';
    }, 500);
    setTimeout( function() {
        imgBox2.style.visibility = 'visible';
    }, 1500);
    setTimeout( function() {
        imgBox3.style.visibility = 'visible';
    }, 2500);
    setTimeout( function() {
        blinkBox.style.visibility = 'visible';
    }, 3500);
});



//Display question for hiring manager's name
blinkBox.addEventListener('click', function () {
    //console.log("clicked");
    introContainer.style.display = "none";
    setTimeout( function() {
        questionContainer.style.display = 'flex';
    }, 1000);

})

hmName.addEventListener('change', () =>{
    changeName++;
    console.log(changeName);
})

//upon entering their name, the intro page comes in, beginning with typing out greeting
hmNameButton.addEventListener('click', function (event) {
    questionContainer.style.display="none";
    console.log("changeName: "+ changeName);
    managerName = hmName.value;
    console.log(managerName);
    
    if(changeName==0){
        managerName="Wonderful Manager";
    }
    manager.textContent = managerName;
    setTimeout( function() {
        coverLetterPart1.style.display = 'flex';
    }, 1000);
    setTimeout( function() {
        skillsAlert.style.display = 'flex';
    }, 4000);
})

//upon clicking the button, the next page mouse-over page slides in 
moreButton.addEventListener('click', function () {
    fading.classList.add('fade')
    setTimeout( function() {
        coverLetterPart1.classList.add('clicked');
    },500);
    setTimeout( function() {
        coverLetterPart2.classList.add('slideScreen4');
    }, 500);
    setTimeout( function() {
        coverLetterPart2.style.display="flex";
    },500);
})
//showing the alternate text when the mouse is over a section
hoverDivStudy.addEventListener('mouseover', function () {
    console.log("onmouseover");
    study.style.display="none";
    studyHover.style.display="block";
})

hoverDivStudy.addEventListener('mouseleave', function () {
    studyHover.style.display="none";
    study.style.display="block";
})

hoverDivSkills.addEventListener('mouseover', function () {
    console.log("onmouseover");
    jobSkills.style.display="none";
    jobSkillsHover.style.display="flex";
})

hoverDivSkills.addEventListener('mouseleave', function () {
    jobSkillsHover.style.display="none";
    jobSkills.style.display="block";
})

hoverDivPassion.addEventListener('mouseover', function () {
    console.log("onmouseover");
    passion.style.display="none";
    passionHover.style.display="flex";
})

hoverDivPassion.addEventListener('mouseleave', function () {
    passionHover.style.display="none";
    passion.style.display="block";
})

more2Button.addEventListener('click', function () {
    console.log("Clicked it!");
   
    coverLetterPart2.classList.add("clicked");
    setTimeout( function() {
        coverLetterPart3.style.display="flex";
    }, 1000);
})



//when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    let droppedNum = 0;
    console.log(droppedNum);

       // Make each draggable element draggable
       draggableElements.forEach(draggable => {
           
            draggable.addEventListener("dragstart", (e) => {
                console.log("Dragstart");
                draggable.classList.add("dragging")
                // this is the data that goes with each draggable element (the img and the explanation)
                e.dataTransfer.setData("icon", draggable.dataset.icon);
                e.dataTransfer.setData("explanation", draggable.dataset.explanation);
                e.dataTransfer.setData("head",draggable.dataset.head);
                //hide image from the drag box once it has started to drag
                // draggable.style.visibility = "hidden";
            });

            draggable.addEventListener("dragend", ()=> {
                draggable.classList.remove("dragging");
                draggable.style.visibility = "hidden";
                console.log("dragened")
            });
        });
        //setting up drop zone to receive dropped items
        dropHere.addEventListener("dragover", (e)=> {
            e.preventDefault(); 
        
        });

        dropHere.addEventListener("drop",(e) => {
            e.preventDefault();
            
        
            // Remove the existing smIcon
            const currentSmIcon = dropComImg.querySelector(".smIcon");
            if (currentSmIcon) {
                currentSmIcon.remove();
            }
            const iconSrc = e.dataTransfer.getData("icon"); // Get the image source
            const explanation = e.dataTransfer.getData("explanation"); // Get the explanation for that item
            const headerBoot = e.dataTransfer.getData("head");// Get the header for that item
            console.log(headerBoot);
            const droppedIcon = document.createElement("div");
            
            droppedIcon.className = "dropped icon";
            
            droppedIcon.dataset.icon = iconSrc;

            const img = document.createElement("img");
            img.src = iconSrc;
            img.style.width = "40px"; // Set the width of the image
            img.style.marginRight = "5px";
            img.style.marginLeft = "5px";
          
            // Append the image to the dropped icon
            droppedIcon.appendChild(img);
            dropHere.appendChild(droppedIcon);
            console.log(headerBoot)
            campHeader.innerText=headerBoot;
            //icon on laptop screen
            
            const screenImg = document.createElement("img");
            screenImg.className ="smIcon"
            screenImg.src=iconSrc;
            screenImg.style.width="20%";
            explanationBox.appendChild(screenImg);
            // dropComImg.appendChild(droppedIcon);
            explanationTextBox.innerText = explanation;
            droppedNum++;
            console.log(droppedNum);
            if(droppedNum==1){
               
                coverLetterPart3.appendChild(button4);
              

            }
           
        })
})

button4.addEventListener('click', () => {
    console.log("button4 clicked")
    coverLetterPart3.style.display = "none";
    
    // body[0].style.backgroundColor="white";
    coverLetterPart4.style.display = "flex";
    count=0;
})

rightArrow.addEventListener('click', () => {

    
    switch(count){
        //Project 2 is now the feature
        case 0:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p2Title;
            displayProject.src=p2Image;
            projectTitle.innerText=p2Title;
            projectDescription.innerText=p2Description;
            featLiveLink.setAttribute("href",p2Live);
            link1.setAttribute("href",p2link1);
            link2.setAttribute("href",p2link2);
            link1.innerText=p2link1Inner;
            link2.innerText=p2link2Inner;
            link3.setAttribute("href","#");
            link3.innerText="";
            codeImgLink1.innerText="";

            //switching the 2nd box
            slot2Title.innerText=p3Title;
            slot2Img.src=p3Image;
            //switching the 3rd box
            slot3Title.innerText=p4Title;
            slot3Img.src=p4Image;
            count++;
            break;
        //Project 3 is now the feature
        case 1:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p3Title;
            displayProject.src=p3Image;
            projectTitle.innerText=p3Title;
            projectDescription.innerText=p3Description;
            featLiveLink.setAttribute("href",p3Live);
            link1.setAttribute("href",p3link1);
            link2.setAttribute("href",p3link2);
            link3.setAttribute("href",p3link3);
            link1.innerText=p3link1Inner;
            link2.innerText=p3link2Inner;
            link3.innerText=p3link3Inner;
            codeImgLink1.innerText="";

            //switching the 2nd box
            slot2Title.innerText=p4Title;
            slot2Img.src=p4Image;
            //switching the 3rd box
            slot3Title.innerText=p5Title;
            slot3Img.src=p5Image;
            count++;
            break;
             //Project 4 is now the feature
            case 2:
                //switching the feature
                console.log("Count: "+count)
                miniTitleFeat.innerText=p4Title;
                displayProject.src=p4Image;
                projectTitle.innerText=p4Title;
                projectDescription.innerText=p4Description;
                featLiveLink.setAttribute("href",p4Live);
                link1.setAttribute("href",p4link1);
                link1.innerText=p4linkInner;
                link2.setAttribute("href","#");
                link2.innerText="";
                link3.setAttribute("href","#");
                link3.innerText="";
                codeImgLink1.innerText="";
                
               
                //switching the 2nd box
                slot2Title.innerText=p5Title;
                slot2Img.src=p5Image;
                //switching the 3rd box
                slot3Title.innerText=p6Title;
                slot3Img.src=p6Image;
                count++;
            
                break;
             //Project 5 is now the feature
            case 3:
                 //switching the feature
                console.log("Count: "+count)
                miniTitleFeat.innerText=p5Title;
                displayProject.src=p5Image;
                projectTitle.innerText=p5Title;
                projectDescription.innerText=p5Description;
                featLiveLink.setAttribute("href",p5Live);
                link1.setAttribute("href","");
                link1.innerText="";
                link2.setAttribute("href","");
                link2.innerText="";
                link3.setAttribute("href","");
                link3.innerText="";
                codeImgLink1.innerText=p5link1Inner;
                projCodeImgArray=p5linkImgs;
                
                    
                   
                //switching the 2nd box
                slot2Title.innerText=p6Title;
                slot2Img.src=p6Image;
                //switching the 3rd box
                slot3Title.innerText=p7Title;
                slot3Img.src=p7Image;
                count++;
                
                break;

            //Project 6 is now the feature
            case 4:
                //switching the feature
                console.log("Count: "+count)
                miniTitleFeat.innerText=p6Title;
                displayProject.src=p6Image;
                projectTitle.innerText=p6Title;
                projectDescription.innerText=p6Description;
                featLiveLink.setAttribute("href",p6Live);
                link1.setAttribute("href","");
                link1.innerText="";
                link2.setAttribute("href","");
                link2.innerText="";
                link3.setAttribute("href","");
                link3.innerText="";
                codeImgLink1.innerText=p6link1Inner;
                projCodeImgArray=p6linkImgs;
                
                
                
            //switching the 2nd box
            slot2Title.innerText=p7Title;
            slot2Img.src=p7Image;
            //switching the 3rd box
            slot3Title.innerText=p1Title;
            slot3Img.src=p1Image;
            count++;
            
            break;


        //Project 7 is now the feature
        case 5:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p7Title;
            displayProject.src=p7Image;
            projectTitle.innerText=p7Title;
            projectDescription.innerText=p7Description;
            featLiveLink.setAttribute("href",p7Live);
            link1.setAttribute("href","");
            link1.innerText="";
            link2.setAttribute("href","");
            link2.innerText="";
            link3.setAttribute("href","");
            link3.innerText="";
            codeImgLink1.innerText=p7link1Inner;
            projCodeImgArray=p7LinkImgs;
            
            
            
        //switching the 2nd box
        slot2Title.innerText=p1Title;
        slot2Img.src=p1Image;
        //switching the 3rd box
        slot3Title.innerText=p2Title;
        slot3Img.src=p2Image;
        count++;
        
        break;
    
        //back to project 1     
        case 6:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p1Title;
            displayProject.src=p1Image;
            projectTitle.innerText=p1Title;
            projectDescription.innerText=p1Description;
            featLiveLink.setAttribute("href",p1Live);
            link1.setAttribute("href",p1link1);
            link2.setAttribute("href","");
            link1.innerText=p1link1Inner;
            link2.innerText="";
            link3.setAttribute("href","#");
            link3.innerText="";
            codeImgLink1.innerText="";
           
            //switching the 2nd box
            slot2Title.innerText=p4Title;
            slot2Img.src=p4Image;
            //switching the 3rd box
            slot3Title.innerText=p5Title;
            slot3Img.src=p5Image;
            count=0;
        
            break;

    }
})

leftArrow.addEventListener('click', () => {
    
    switch(count){
        case 0:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p7Title;
            displayProject.src=p7Image;
            projectTitle.innerText=p7Title;
            projectDescription.innerText=p7Description;
            featLiveLink.setAttribute("href",p7Live);
            link1.setAttribute("href","");
            link2.setAttribute("href","");
            link3.setAttribute("href","");
            link1.innerText="";
            link2.innerText="";
            link3.innerText="";
            codeImgLink1.innerText=p7link1Inner;
            projCodeImgArray=p7LinkImgs;

            //switching the 2nd box
            slot2Title.innerText=p1Title;
            slot2Img.src=p1Image;
            //switching the 3rd box
            slot3Title.innerText=p2Title;
            slot3Img.src=p2Image;
            count=6;
            break;
        case 6:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p6Title;
            displayProject.src=p6Image;
            projectTitle.innerText=p6Title;
            projectDescription.innerText=p6Description;
            featLiveLink.setAttribute("href",p6Live);
            link1.setAttribute("href","");
            link2.setAttribute("href","");
            link3.setAttribute("href","");
            link1.innerText="";
            link2.innerText="";
            link3.innerText="";
            codeImgLink1.innerText=p6link1Inner;
            projCodeImgArray=p6linkImgs;
            //switching the 2nd box
            slot2Title.innerText=p7Title;
            slot2Img.src=p7Image;
            //switching the 3rd box
            slot3Title.innerText=p1Title;
            slot3Img.src=p1Image;
            count--;
            break;
        case 5:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p5Title;
            displayProject.src=p5Image;
            projectTitle.innerText=p5Title;
            projectDescription.innerText=p5Description;
            featLiveLink.setAttribute("href",p5Live);
            link1.setAttribute("href","");
            link1.innerText="";
            link2.setAttribute("href","");
            link2.innerText="";
            link3.setAttribute("href","#");
            link3.innerText="";
            codeImgLink1.innerText=p5link1Inner;
            projCodeImgArray=p5linkImgs;
            //switching the 2nd box
            slot2Title.innerText=p6Title;
            slot2Img.src=p6Image;
            //switching the 3rd box
            slot3Title.innerText=p7Title;
            slot3Img.src=p7Image;
            count--;
            break;
        case 4:
            //switching the feature
            
            console.log("Count: "+count)
            miniTitleFeat.innerText=p4Title;
            displayProject.src=p4Image;
            projectTitle.innerText=p4Title;
            projectDescription.innerText=p4Description;
            featLiveLink.setAttribute("href",p4Live);
            link1.setAttribute("href","");
            link2.setAttribute("href","");
            link1.innerText="";
            link2.innerText="";
            link3.setAttribute("href","");
            link3.innerText="";
            codeImgLink1.innerText="";
            //switching the 2nd box
            slot2Title.innerText=p5Title;
            slot2Img.src=p5Image;
            //switching the 3rd box
            slot3Title.innerText=p6Title;
            slot3Img.src=p6Image;
            count--;
            break;

        case 3:
            //switching the feature
                
            console.log("Count: "+count)
            miniTitleFeat.innerText=p3Title;
            displayProject.src=p3Image;
            projectTitle.innerText=p3Title;                
            projectDescription.innerText=p3Description;
            featLiveLink.setAttribute("href",p3Live);
            link1.setAttribute("href",p3link1);
            link2.setAttribute("href",p3link2);
            link3.setAttribute("href",p3link3);
            link1.innerText=p3link1Inner;
            link2.innerText=p3link2Inner;
            link3.innerText=p3link3Inner;
            codeImgLink1.innerText="";
            //switching the 2nd box
            slot2Title.innerText=p4Title;
            slot2Img.src=p4Image;
            //switching the 3rd box
            slot3Title.innerText=p5Title;
            slot3Img.src=p5Image;
            count--;
            break;
        case 2:
            //switching the feature
                
            console.log("Count: "+count)
            miniTitleFeat.innerText=p2Title;
            displayProject.src=p2Image;
            projectTitle.innerText=p2Title;                
            projectDescription.innerText=p2Description;
            link1.setAttribute("href",p2link1);
            link2.setAttribute("href",p2link2);
            link1.innerText=p2link1Inner;
            link2.innerText=p2link2Inner;
            link3.setAttribute("href","#");
            link3.innerText="";
            codeImgLink1.innerText="";
            //switching the 2nd box
            slot2Title.innerText=p3Title;
            slot2Img.src=p3Image;
            //switching the 3rd box
            slot3Title.innerText=p4Title;
            slot3Img.src=p4Image;
            count--;
            break;

            case 1:
                //switching the feature
                    
                console.log("Count: "+count)
                miniTitleFeat.innerText=p1Title;
                displayProject.src=p1Image;
                projectTitle.innerText=p1Title;                
                projectDescription.innerText=p1Description;
                featLiveLink.setAttribute("href",p1Live);
                link1.setAttribute("href",p1link1);
                link2.setAttribute("href","");
                link1.innerText=p1link1Inner;
                link2.innerText="";
                link3.setAttribute("href","#");
                link3.innerText="";
                codeImgLink1.innerText="";
                //switching the 2nd box
                slot2Title.innerText=p2Title;
                slot2Img.src=p2Image;
                //switching the 3rd box
                slot3Title.innerText=p3Title;
                slot3Img.src=p3Image;
                count--;
                break;
      
    }
})

codeImgLink1.addEventListener('click', ()=> {
    console.log("imgs should be visible");
    projectImgPopUp.style.display="flex";
    projCodeImg.src=projCodeImgArray[0];
    projNumber=0;
    
    
})

exitCodeImg.addEventListener('click' , () => {
    projectImgPopUp.style.display="none";
})



rightProjImgArrow.addEventListener('click', () =>{
    // let currentImg=0;
    // console.log("right button through array");
    // console.log("This is project img array: "+ projCodeImgArray);
    // console.log("array length type: "+ typeof(projCodeImgArray.length));
    // console.log(projCodeImgArray.length - 1);
    // console.log("projCodeImg.src = "+ projCodeImg.src);

    if(projNumber < (projCodeImgArray.length-1)){
        projCodeImg.src=projCodeImgArray[projNumber + 1];
        projNumber ++;
    }else{
        projCodeImg.src = projCodeImgArray[0];
        projNumber = 0;
    }
})

leftProjImgArrow.addEventListener('click', () =>{
    // let currentImg=0;
    // console.log("right button through array");
    // console.log("This is project img array: "+ projCodeImgArray);
    // console.log("array length type: "+ typeof(projCodeImgArray.length));
    // console.log(projCodeImgArray.length - 1);
    // console.log("projCodeImg.src = "+ projCodeImg.src);

    if(projNumber > 0){
        projCodeImg.src=projCodeImgArray[projNumber - 1];
        projNumber --;
    }else{
        projCodeImg.src = projCodeImgArray[projCodeImgArray.length - 1];
        projNumber = projCodeImgArray.length - 1;
    }
})

button5.addEventListener('click', () =>{
    coverLetterPart4.style.display="none";
    coverLetterPart5.style.display="flex";
    setTimeout( function() {
        button6.style.visibility="visible";
    }, 3000);
    button6Click = 0;
})

button6.addEventListener('click', () => {
    console.log(button6Click);
    switch (button6Click){
        case 0:
            why1.style.display="none";
            why2.style.display="none";
            // why8.style.display="none";
            why3.style.display="none";
            why4.style.display="block";
            why5.style.display="block";
            button6Click++;
            break;
        case 1:
            why4.style.display="none";
            why5.style.display="none";
            why6.style.display="block";
            why7.style.display="block";
            resumeDownload.style.display="block";
            button6Click++;
            break;
        case 2:
            why6.style.display="none";
            why7.style.display="none";
            resumeDownload.style.display="none";
            end.style.display="block";
            
            paint.style.display="block";
            button6.style.display="none";
    }
  
})



