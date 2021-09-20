var userNumber = parseInt(prompt("Choose any Whole Number:",""));
var final = userNumber + 9;

if( isNaN(userNumber)){
    alert("Please enter a whole number.");
}
    
    else   { 
document.write("<ul>");
document.write(
    "<li> I added 9 to " + userNumber + ". Making the new number " + final + ".</li>"
);
final *=  2;
document.write(
    "<li> I multiplied " + (final / 2) + " by 2. Making the new number " + final + ".</li>"
);
final -= 4;
document.write(
    "<li> I subtracted 4 from " + (final + 4) + " . Making the new number " + final + ".</li>"
);
final /= 2;
document.write(
    "<li> I divided " + (final * 2) + " by 2. Making the new number " + final + ".</li>"
);
final -= userNumber;
document.write(
    "<li> I subtracted the original number (" + userNumber + ") from " + (final + userNumber) + ". Making the final number " + final + ".</li>" 
);
document.write("</ul>");
alert("Your final number is " + final);
    }