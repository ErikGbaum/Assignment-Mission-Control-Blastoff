function countdownTimer()
{
    console.log("it is working");
    var currTime = 50;
    document.getElementById("coundownStatus").innerHTML = currTime;
    currTime = currTime - 5;
    //timer for 45
    setTimeout(function()
    {
        document.getElementById("coundownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000)
    //timer for 40
    setTimeout(function()
    {
        document.getElementById("coundownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000)
    //timer for 35
    setTimeout(function()
    {
        document.getElementById("coundownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000)
    //timer for 30
    document.getElementById("coundownStatus").innerHTML = currTime;
    setTimeout(function()
    {
        document.getElementById("coundownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000)
    //timer for 25
    setTimeout(function()
    {
        document.getElementById("coundownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000)
    //timer for 20
    setTimeout(function()
    {
        document.getElementById("coundownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000)
    //timer for 15
    setTimeout(function()
    {
        document.getElementById("coundownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000)
    //timer for 10
    setTimeout(function()
    {
        document.getElementById("coundownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000)
    //timer for 5
    setTimeout(function()
    {
        document.getElementById("coundownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000)
    //timer for 0
    setTimeout(function()
    {
        document.getElementById("coundownStatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000)

}