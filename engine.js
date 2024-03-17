const page = document.getElementById("main");
const hint = document.getElementById("hint");
let bubblesSpawned = 0;

const randBetween = function (min, max) {
    return Math.random() * (max - min) + min;
}

const randColour = function () {
    return `rgb(${randBetween(0, 255)},${randBetween(0, 255)},${randBetween(0, 255)})`;
}

const createBubble = function (e) {
    bubblesSpawned++;

    if(bubblesSpawned > 60) { hint.style.display = "none" };

    const bubble = document.createElement("div");
    bubble.setAttribute("class", "bubble");
    bubble.style.backgroundColor = randColour();
    bubble.style.left = `${e.clientX - 25}px`;
    bubble.style.top = `${e.clientY - 25}px`;
    page.append(bubble);

    const pop = bubble.animate(
        [
            {
                opacity: 1
            },
            {
                opacity: 0,
                transform: "scale(1.7)"
            }
        ],
        {
            duration: 1500,
            easing: "ease-out"
        }
    )

    pop.finished.then (() => {
        bubble.remove();
    })
}

if (localStorage.getItem("flashingOk") == undefined || localStorage.getItem("flashingOk") == 0)
{
    confirm("This site contains flashing colours. Would you like to continue?") ? localStorage.setItem("flashingOk", 1) : localStorage.setItem("flashingOk", 0); // Local storaged used so user will not be asked again next time if they say yes
}

if (localStorage.getItem("flashingOk") == 1) { 
    page.addEventListener("mousemove", createBubble);
} // Start the bubbles!!!

