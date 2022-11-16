window.addEventListener("load",function ()
{
    // get click element references.
    let clickCounterElement = document.getElementById("click-counter");
    let clickButtonElement = document.getElementById("click-button");

    // Counter value.
    let counter = 0;

    //Click button function.
    let clickButtonFunction = function()
    {
        // Increment counter.
        counter++;
        
        // Update counter value.
        clickCounterElement.innerHTML = counter;
    };

    // Attach button function.
    clickButtonElement.addEventListener("click", clickButtonFunction);
});