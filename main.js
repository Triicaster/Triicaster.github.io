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

const mydocument = document.documentElement;
const fullscreenbtn = document.querySelector("#fullscreen-btn");

function togglefullscreen(){
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

const splash = document.querySelector(".splash");
//splash screen
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
function show(pgno) {
    hideall();
    let onepage = document.querySelector("#page" + pgno);
    onepage.style.display = "block";
}

const dynamicbtn = document.querySelector(".nav-menu");

// Event delegation for clicking buttons in nav menu
dynamicbtn.addEventListener("click", function (evt) {
    const clickpgbtn = evt.target;
    if (clickpgbtn.tagName === "BUTTON") {
        show(parseInt(clickpgbtn.id.replace("btn", "")));
    }
});

// Start by hiding all pages
hideall();

//Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navbtns = document.querySelector(".nav-menu");
hamburger.addEventListener("click", function () {
    navbtns.classList.toggle("active");
    hamburger.classList.toggle("active");
});

//Cards

const cards = document.querySelectorAll(".card");
cards.forEach(function(card){
    card.addEventListener("click", function(){
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
    a1 = document.querySelector("input[name='a1']:checked").value;
    if (a1 == "Red Junglefowl") quizscore++;
    a2 = document.querySelector("input[name='a2']:checked").value;
    if (a2 == "A Dog or Cat") quizscore++;
    a3 = document.querySelector("input[name='a3']:checked").value;
    if (a3 === "Show dominance, Signal morning") quizscore++;
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
const popsound = new Audio("Audio/popsound.mp3");

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
const boingsound = new Audio("Audio/boing_sound.mp3");
function getrandom(min, max) {
    return Math.round(Math.random() * (max - min)) + min; //get random number
}

function moveSprite() {
    const allAdults = document.querySelectorAll(".babychick"); // get all elements with class adult
    allAdults.forEach(function (sprite) {
        const containerwidth = container.clientWidth;
        const adultwidth = sprite.clientWidth;
        const maxleft = containerwidth - adultwidth;

        sprite.style.left = getrandom(0, maxleft) + "px";
    });

    allAdults.forEach(function (sprite) {
        sprite.addEventListener("click", function(){
           boingsound.play();
           sprite.classList.add("animate");
           setTimeout(function(){
            sprite.classList.remove("animate");
           },1000) 
        })
    });
}

moveSprite();
setInterval(moveSprite, 2000);

// Add chicken
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


//Play chicken audio when click button
const audio1 = document.querySelector("#audiobtn1");
const audio2 = document.querySelector("#audiobtn2");
const audio3 = document.querySelector("#audiobtn3");
const audio4 = document.querySelector("#audiobtn4");
const hencluck = new Audio("Audio/hen_cluck.mp3");
const chickchurp = new Audio("Audio/chick_sound.mp3");
const angrycluck = new Audio("Audio/angry_hen_noise.mp3");
const roostercall = new Audio("Audio/rooster_cry.mp3");

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
const jumpsound = new Audio("Audio/jump_sound.mp3");
const startbutton = document.querySelector("#startbtn");

function startgame() {
    let ballY = 0;
    let direction = 1.5;
    let time = 0;
    let score = 0;

    const maxy = game.offsetHeight - ball.offsetHeight;
    function moveupdown(increase) {
        ballY = ballY + increase;
        ball.style.top = ballY + "px";
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

        var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        var holetop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
        var ctop = -(400 - ballY);
        let range = blockleft < 43 && blockleft > -43;

        moveupdown(direction);
        if (ballY >= maxy || (range) && (ctop < holetop) || (range) && (ctop > holetop + 120)) {
            alert("You lose! " + "Your score:" + score);
            clearInterval(intervalscore);
            clearInterval(intervaltime);
            clearInterval(intervalupdown);
            resetGame();
            startbutton.innerHTML = "Restart!";
        }
        if (ballY <= 0) {
            ballY = 0;
        }

    }, 1);

    jumpbtn.addEventListener("click", function () {
        direction = -2.5;
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
}

function resetGame() {
    block.classList.remove("active");
    hole.classList.remove("active");
    ball.style.top = "0px";
    block.style.left = "450px";
    hole.style.left = "450px";
}

startbutton.addEventListener("click", function () {
    startgame();
    block.classList.add("active");
    hole.classList.add("active");
});