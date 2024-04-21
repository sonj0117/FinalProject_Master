/* homepage image JAVA Script for slideshow */

var images = ["/images/image1.jpeg", "/images/palace.jpeg", "/images/image2.jpeg"];
var counter = 0;

function playSlideShow() {
    rs();
    counter = counter + 1;
    if (counter == images.length) {
        counter = 0;
    }
    document.getElementById("img").src = images[counter];
    setTimeout(playSlideShow, 5000);
}

/* changing colors */
    
    var color = [ "pink", "skyblue", "purple", "orange", "green" ]
    function ChangeColor()
        {
            random = Math.floor(Math.random()*color.length)
            document.getElementById("h1").style.color=color[random]
            setTimeout("ChangeColor()", 5000)
        }

/* sizing of the images */
function rs() {
            var w = window.innerWidth;
            var images = document.getElementsByClassName("responsive-image");
        
            for (var i = 0; i < images.length; i++) {
                images[i].style.height = 0.3 * w + "px";
            }
          }

/* homepage resize */ 
function rs1() {
    var images = document.getElementsByTagName('img'); // Get all <img> elements
    var maxHeight = 300; // Set the maximum height for resized images

    // Loop through each image and resize it
    for (var i = 0; i < images.length; i++) {
        images[i].style.height = maxHeight + 'px';
    }
}
/* function to validate input */ 
function validate()
{
    if (document.getElementById("last").value =="")
        { alert ("Last Name is Required!"); 
        document.getElementById("last").focus();}
    else if (document.getElementById("first").value =="")
        {
            alert ("First Name is Required!")
            document.getElementById("first").focus();
        }
    else if (document.getElementById("m").checked ==false && document.getElementById("f").checked ==false)
        {
            alert ("You must select Gender")
            document.getElementById("m").focus()
        }
    else if (document.getElementById("i").value=="")
        {
            alert("You must write your inquiry.")
            document.getElementById("i").focus()
        }
    else 
        {
            return true;
        }
    return false;
    
}