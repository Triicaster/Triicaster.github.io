// array of images. It will be used for slides change function
let slides = [
    'images/chick_pic_1.jpeg',
    'images/chick_pic_2.jpeg',
    'images/chick_pic_3.jpeg'
];

let slideindex = 0; //start at first slide
let chickImage = document.querySelector(".background-pic img"); // Select the images inside .background-pic

setInterval(function () {
    chickImage.classList.add("fade"); //fade before changing the slide via index increment
    setTimeout(function () {
        slideindex++; //if at last slide, go back to the first slide
        if (slideindex >= slides.length) {
            slideindex = 0;
        }
        chickImage.src = slides[slideindex]; //set slide img and opacity = 1
        chickImage.classList.remove("fade");
    }, 1000);
}, 5000);

//Fullscreen mode

const fullscreenbtn = document.querySelector("#fullscreen-btn");

function togglefullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullscreenbtn.innerHTML = ("Exit Fullscreen");
    }
    else {
        document.exitFullscreen();
        fullscreenbtn.innerHTML = ("Fullscreen mode");
    }
}

fullscreenbtn.addEventListener("click", togglefullscreen);

//splash screen
const splash = document.querySelector(".splash");
setTimeout(function () {
    splash.classList.add("deactive"); //move splash screen upwards
}, 1500);
setTimeout(function () {
    splash.style.display = "none"; // hide splash screen after 2.5sec
}, 2500);

//to top button
const totopbtn = document.querySelector("#chevron");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        totopbtn.classList.add("active");
    }
    else {
        totopbtn.classList.remove("active");
    }
});
totopbtn.addEventListener("click", function () {
    window.scrollTo(0, 0);
});
//changing div pages according to button press
var allpages = document.getElementsByClassName("page");

// Hide all pages initially
function hideall() {
    for (let onepage of allpages) {
        onepage.style.display = "none";
    }
}

// Show a page based on number
//This is for event delagation for multiple pages
function show(pgno) {
    hideall();
    let onepage = document.querySelector("#page" + pgno);
    onepage.style.display = "block";
}

const navMenu = document.querySelector(".nav-menu");

navMenu.addEventListener("click", function (event) {
    const clickTarget = event.target;
    if (clickTarget.tagName == "BUTTON") {
        const id = clickTarget.id;

        if (id == "btn1") {
            show(1);
        } else if (id == "btn2") {
            show(2);
        } else if (id == "btn3") {
            show(3);
        } else if (id == "btn4") {
            show(4);
        }
    }
});

// Start by hiding all pages
hideall();

//Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navbtns = document.querySelector(".nav-menu");
hamburger.addEventListener("click", function () {
    navbtns.classList.toggle("active"); //can be turned on and off
    hamburger.classList.toggle("active");
});

//Cards section
const cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
    card.addEventListener("click", function () {
        card.classList.toggle("active");
        popsound.play();
    });
});

//quiz
const submitbtn = document.querySelector("#submitbtn");
const scorebox = document.querySelector("#scorebox");
submitbtn.addEventListener("click", checkans);
var a1, a2, a3, a4, quizscore = 0;

function checkans() {
    quizscore = 0;
    //answers
    a1 = document.querySelector("input[name='a1']:checked").value;
    if (a1 == "Red Junglefowl") quizscore++;
    a2 = document.querySelector("input[name='a2']:checked").value;
    if (a2 == "A Dog or Cat") quizscore++;
    a3 = document.querySelector("input[name='a3']:checked").value;
    if (a3 == "Show dominance" || a3 == "Signal morning") quizscore++;
    a4 = document.querySelector("input[name='a4']:checked").value;
    if (a4 == "Short distances") quizscore++;

    if (quizscore < 3) {
        scorebox.innerHTML = "Score: " + quizscore + ". Pls read up more...";
        angrycluck.play();
    }
    else {
        scorebox.innerHTML = "Score: " + quizscore + ". Yay! Nice job!!!!!!!!!!!";
        roostercall.play();
    }
}

//interactive image
var imgheader = document.querySelector("#interactive h2");
var imgtext = document.querySelector("#interactive p");
const imgbtn1 = document.querySelector("#imgbtn1");
const imgbtn2 = document.querySelector("#imgbtn2");
const imgbtn3 = document.querySelector("#imgbtn3");
const popsound = new Audio("audio/popsound.mp3");

//change color, h2 and p in html website, and play pop
imgbtn1.addEventListener("click", function () {
    popsound.play();
    imgheader.style.color = 'darkred';
    imgheader.innerHTML = "Adult Chicken";
    imgtext.innerHTML = "In the <b>adult stage of a chicken's life cycle,</b> the bird reaches full maturity. This usually happens around 5 to 6 months of age. Adult hens begin to <u>lay eggs regularly,</u> while roosters develop larger combs, wattles, and start crowing loudly. Adult chickens spend their time foraging, <u>scratching the ground for food</u>, dust bathing, and socializing with other chickens. They can reproduce at this stage, starting the life cycle again through <u>egg-laying and fertilization.</u> Most adult chickens can live for several years, depending on their <b>environment</b> and care.";
});
imgbtn2.addEventListener("click", function () {
    popsound.play();
    imgheader.style.color = 'darkorange';
    imgheader.innerHTML = "Baby Chick";
    imgtext.innerHTML = "The <b>chick stage</b> is the <b>second stage</b> of a chicken's life cycle, right after hatching from the egg. After about <b>21 days of incubation</b>, the chick breaks out of the shell using its tiny egg tooth. Chicks are covered in <u>soft, fluffy down feathers and are very small and fragile.</u> They rely on warmth, either from a <b><u>brooding hen</u></b> or a heat source, to survive. During this stage, chicks begin eating and drinking on their own, learning to peck at food. As they grow, they start to grow adult feathers, preparing for the next stage of their life cycle—the juvenile stage.";
});
imgbtn3.addEventListener("click", function () {
    popsound.play();
    imgheader.style.color = 'darkgreen';
    imgheader.innerHTML = "The Egg";
    imgtext.innerHTML = "The <b>egg</b> is the <u>first stage of a chicken's life cycle.</u> It forms inside the hen and takes about <b>24 to 26 hours</b> to <u>fully develop</u> before being laid. If fertilized by a <b>rooster,</b> the egg can develop into a chick. The egg has a hard shell that protects the growing embryo inside. During incubation, which <u>lasts about 21 days,</u> the embryo grows, feeding on the nutrients from the egg yolk and white. As the chick grows, it uses its <b>egg tooth</b> to break the shell and hatch, beginning its life outside the egg.";
});

//spawn chicken
const container = document.querySelector(".sprite-box"); //get sprite box
const boingsound = new Audio("audio/boing_sound.mp3");
function getrandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min; //get random number
}

//event delegation for all chicks boing and bounce
//given to parent container
container.addEventListener("click", function (evt) {
    // Check if the clicked element has the class 'babychick'
    if (evt.target.classList.contains("babychick")) {
        // Play boing sound
        boingsound.play();
        // add animated bounce
        evt.target.classList.add("animate");
        // remove after 1 sec so can reactivate and bounce again when clicked
        setTimeout(function () {
            evt.target.classList.remove("animate");
        }, 1000);
    }
});

function moveSprite() {
    const allAdults = document.querySelectorAll(".babychick"); // get all elements with class babychick
    allAdults.forEach(function (sprite) { //for parent alladults, for each child element, get clientwidth and get max left each child can go
        const containerwidth = container.clientWidth;
        const adultwidth = sprite.clientWidth;
        const maxleft = containerwidth - adultwidth;
        sprite.style.left = getrandom(0, maxleft) + "px";
    });
}

moveSprite();
setInterval(moveSprite, 2000); //calls function every 2 sec to make sprite choose a rand x value and move

// Add chicken
//add new child element new div when button clicked
const addbtn = document.querySelector("#addbtn");
addbtn.addEventListener("click", function () {
    const newDiv = document.createElement('div');
    newDiv.classList.add("babychick");
    container.appendChild(newDiv);

    // Immediately move only the new one
    const containerwidth = container.clientWidth;
    const adultwidth = newDiv.clientWidth;
    const maxleft = containerwidth - adultwidth;

    newDiv.style.left = getrandom(0, maxleft) + "px";
    chickchurp.play();
});

// Remove last chicken
const removebtn = document.querySelector("#removebtn");
removebtn.addEventListener("click", function () {
    const allAdults = document.querySelectorAll(".babychick");
    const last = allAdults[allAdults.length - 1]; //get index of last element in the list 
    if (last) {
        container.removeChild(last);
    } //if theres a last element, then remove.
    popsound.play();
});

const resetchick = document.querySelector("#reset-chicken");
resetchick.addEventListener("click", function () {
    const allAdults = document.querySelectorAll(".babychick");
    allAdults.forEach(function (chick) { //loop that goes through every child inside the adult element and remove
        container.removeChild(chick);
    });
});

//Play chicken audio when click button
const audio1 = document.querySelector("#audiobtn1");
const audio2 = document.querySelector("#audiobtn2");
const audio3 = document.querySelector("#audiobtn3");
const audio4 = document.querySelector("#audiobtn4");
const hencluck = new Audio("audio/hen_cluck.mp3");
const chickchurp = new Audio("audio/chick_sound.mp3");
const angrycluck = new Audio("audio/angry_hen_noise.mp3");
const roostercall = new Audio("audio/rooster_cry.mp3");

audio1.addEventListener("click", function () {
    hencluck.play();
});
audio2.addEventListener("click", function () {
    chickchurp.play();
});
audio3.addEventListener("click", function () {
    angrycluck.play();
});
audio4.addEventListener("click", function () {
    roostercall.play();
});

// Game code
const game = document.querySelector("#game");
const ball = document.querySelector("#ball");
const jumpbtn = document.querySelector("#jumpbtn");
const block = document.querySelector("#block");
const hole = document.querySelector("#hole");
const showscore = document.querySelector("#showscore");
const showtime = document.querySelector("#showtime");
const jumpsound = new Audio("audio/jump_sound.mp3");
const startbutton = document.querySelector("#startbtn");
const header = document.querySelector("#lets-play");
const resetgame = document.querySelector("#reset-game");

function startgame() {
    let ballY = 0;
    let direction = 1.5;
    let time = 0;
    let score = 0;
    const maxy = game.offsetHeight - ball.offsetHeight; //get offsetheight - which is the height of element including padding and borders
    function moveupdown(increase) {
        ballY = ballY + increase;
        ball.style.top = ballY + "px"; //pushes the sprite downwards to make it "fall"
    }

    const intervalscore = setInterval(function () {
        score += 10;
        showscore.innerHTML = "Score:" + score;
    }, 600);

    const intervaltime = setInterval(function () {
        time++;
        showtime.innerHTML = "Time:" + time;
    }, 1000);

    const intervalupdown = setInterval(function () {

        var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); //get calculated style from css files, like em and %
        var holetop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
        var ctop = -(400 - ballY);
        let range = blockleft < 43 && blockleft > -43;

        moveupdown(direction);
        if (ballY >= maxy || (range) && (ctop < holetop) || (range) && (ctop > holetop + 120)) {
            //if the sprite is more than the maximum Y value, or if collided with the box top, bottom or width sides
            header.innerHTML = ("You lose! " + "Your score:" + score);
            clearInterval(intervalscore);
            clearInterval(intervaltime);
            clearInterval(intervalupdown);
            resetGame();
            startbutton.innerHTML = "Restart!";
        }
        if (ballY <= 0) {
            ballY = 0; //set original position
        }

    }, 1);

    jumpbtn.addEventListener("click", function () {
        direction = -2.5; //go up every button press
        setTimeout(function () {
            direction = 1.5;
        }, 100);
        jumpsound.play();
    });

    var hole = document.querySelector("#hole");
    var block = document.querySelector("#block");

    hole.addEventListener('animationiteration', function () {
        var random = -((Math.random() * 300) + 150);
        hole.style.top = random + "px";
    });
    //reset all values to its original value
    resetgame.addEventListener("click", function () {
        clearInterval(intervalscore);
        clearInterval(intervaltime);
        clearInterval(intervalupdown);
        showscore.innerHTML = "Score:0";
        showtime.innerHTML = "Time:0";
        header.innerHTML = ("Game reset!");
        resetGame();
    });
}

function resetGame() {
    block.classList.remove("active");
    hole.classList.remove("active");
    ball.style.top = "0px";
    block.style.left = "450px";
    hole.style.left = "450px";
}

//start the animation for the block and hole to go right to left
startbutton.addEventListener("click", function () {
    startgame();
    block.classList.add("active");
    hole.classList.add("active");
});

const nextbtn = document.querySelector("#increase-btn");
const backbtn = document.querySelector("#decrease-btn");
const progressbar = document.querySelector(".progress-bar");

let progress = 0;

function increaseprogress() {
    if (progress != 100) {
        progress = progress + 20;
        progressbar.style.width = progress + "%";
    }
    increasepage();
    jumpsound.play();
}

function decreaseprogress() {
    if (progress != 0) {
        progress = progress - 20;
        progressbar.style.width = progress + "%";
    }
    decreasepage();
    popsound.play();
}

var allinfo = document.querySelectorAll(".info");
function hideallinfo() {
    for (let oneinfo of allinfo) {
        oneinfo.style.display = "none";
    }
}

//start info page at page number 1 as default
let infono = 1;

function increasepage() {
    hideallinfo();
    if (infono != 6) {
        infono = infono + 1;
        //increase till 6
    }
    let oneinfo = document.querySelector("#info" + infono);
    oneinfo.style.display = "flex";
}

function decreasepage() {
    hideallinfo();
    if (infono > 1) {
        infono = infono - 1;
        //stop at 1
    }
    let oneinfo = document.querySelector("#info" + infono);
    oneinfo.style.display = "flex";
}

nextbtn.addEventListener("click", increaseprogress);
backbtn.addEventListener("click", decreaseprogress);

const speedone = document.querySelector(".speedone");
const speedtwo = document.querySelector(".speedtwo");
const speedthree = document.querySelector(".speedthree");
const checkbtn = document.querySelector("#check-btn");
const howfast = document.querySelector("#how-fast");

checkbtn.addEventListener("click", function () {
    speedone.style.width = "300px";
    speedtwo.style.width = "200px";
    speedthree.style.width = "100px";
    howfast.innerHTML = "Chickens can run 15KM/HR. Slower than human, 45KM/HR, and Cheetah, 80KM/HR.";

});
