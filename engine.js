const page = document.getElementById("main");

const randBetween = function(min, max) {
    return Math.random() * (max - min) + min;
}

const randColour = function()
{
    return `rgb(${randBetween(0,255)},${randBetween(0,255)},${randBetween(0,255)})`
}

const createBubble = function(e)
{
    const bubble = document.createElement("div");
    bubble.setAttribute("class", "bubble");
    bubble.style.backgroundColor = randColour();
    bubble.style.left = `${e.clientX - 25}px`
    bubble.style.top = `${e.clientY - 25}px`
    page.append(bubble);

    const pop = bubble.animate(
        [
            {
                opacity: 1
            },
            {
                opacity: 0
            }
        ],
        {
            duration: 2000,
            easing: "linear"
        }
    )

    pop.onfinish = function()
    {
        bubble.remove();
    }
}

alert("This page contains flashing colours! Please close the site if you do not want to see this.");
page.addEventListener("mousemove", createBubble)
