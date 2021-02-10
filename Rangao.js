
    
    /**Email validation 4parts
     * Name-letters(case insensitive),numbers, dot. hypen
     * @
     * domain-letters(case insensitive),numbers,hypen.
     * .
     * extension-any letter
     * extension-dot. and any letter.
     */
   
    /**Defining the constraints */

    function validate()
{
    var Email=document.getElementById("txt1").value;
     var Regex=/^([a-zA-Z 0-9\.-]+)@([a-zA-Z 0-9-]+).([a-z]{2,8})(\.[a-z]{2,8})$/;
    if(Regex.test(Email))
    {
       /* document.getElementById("lbl1").innerHTML="Valid";
        document.getElementById("lbl1").style.visibility="visible";
        document.getElementById("lbl1").style.color="green";*/
        return true;

    }
    else
    {
        document.getElementById("lbl1").innerHTML="Please Enter a valid email";
        document.getElementById("lbl1").style.visibility="visible";
        document.getElementById("lbl1").style.color="red";
       
        return false;


    }
}
/**Validating Username */
function validateName()
{
    var name= document.getElementById("txtname");
    if (name.value.trim()=="")
    {
        name.style.border="solid 3px red";
        document.getElementById("username").style.visibility="visible";
        return false;
    }
    else
    {
        return true;
    }

}
/**Validating Textarea */
function validateTextArea()
{
    var Message= document.getElementById("texthere");
    if (Message.value.trim()=="")
    {
        Message.style.border="solid 3px red";
        document.getElementById("textarea").style.visibility="visible";
        document.getElementById("textarea").style.color="red";
        return false;
    }
    else
    {
        
        return true;
        alert("Thankyou for Your Feedback, We shall look into it and reply as necessary")
    }

}
    
   

/**Gallery Page */
var intervalID=0;
var opacity=0;

function fadeIn()/*onmouseover*/
{
   intervalID=window.setInterval(show,200)
}
function fadeOut()/*onmouseout*/
{
   intervalID=window.setInterval(hide,200)
}
function show()
{
    var img= document.getElementsByClassName("myImages")
    opacity=Number(window.getComputedStyle(img).getPropertyValue("opacity"))
    if(opacity<0)
    {
        opacity=opacity+0.1
        img.style.opacity=opacity
    }
    else{
        clearInterval(intervalID)
    }
}
function hide()
{
    var img= document.getElementsByClassName("rounded")
    opacity=Number(window.getComputedStyle(img).getPropertyValue("opacity"))
    if(opacity>0)
    {
        opacity=opacity-0.1
        img.style.opacity=opacity
    }
    else{
        clearInterval(intervalID)
    }
}