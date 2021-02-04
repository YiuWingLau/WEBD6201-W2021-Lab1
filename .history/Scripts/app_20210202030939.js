/* custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

(function()
{
    function Start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);

})();