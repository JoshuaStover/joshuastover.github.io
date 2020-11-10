window.onload = function()
{
    var headerStrings =
    [
        "Hi, I'm Josh.",
        "[404] QUIP NOT FOUND",
        "Lorem ipsum dolor, probably.",
        "I can't do that, Dave.",
        "Welcome to the Velvet Room."
    ];

    var selector = Math.random() * 100;
    var headText = document.getElementById("headText");
    var index = 0;
    var selected = 0;

    if (selector >= 50 && selector < 70) {selected = 1;}
    else if (selector >= 70 && selector < 85) {selected = 2;}
    else if (selector >= 85 && selector < 95) {selected = 3;}
    else if (selector >= 95) {selected = 4;}

    var timer = setInterval(function ()
    {
        if (index < headerStrings[selected].length)
        {
            var currentStr = headText.innerHTML;
            headText.innerHTML = currentStr + headerStrings[selected][index];
            index++;
        }
        else
        {
                clearInterval(timer);
        }
    }, 130);
};
