// Global Variables
var objectDetails;
var stringJSON;
var finalRegistrationObject;
var status;


// SubmitDetails Function - Triggered when Creating Account
function submitDetails(){
    
    objectCreation();
    toJSONString();
    readFromJSONString();
    
    status = navigator.onLine;
    if(status=="true")
        return saveToSessionStorage();
    else
        return saveToLocalStorage();
    
}

//RetriveDetails Function - Triggered when signing in
function readDetails(){
    status = navigator.onLine;
    if(status=="true")
        readFromSessionStorage();
    else
        readFromLocalStorage();
}


//Saving to Session Storage
function saveToSessionStorage(){
    var flag = 0;
    var firstName = finalRegistrationObject.objectfirstName;
    var lastName = finalRegistrationObject.objectlastName;
    var emailId = finalRegistrationObject.objectemail;
    var passwordFirst = finalRegistrationObject.objectpassword;
    var passwordStrength = finalRegistrationObject.objectpasswordStrength;
    var confirmPassword = finalRegistrationObject.objectconfirmpassword;
    var dob = finalRegistrationObject.objectdob;
    var dobtime = finalRegistrationObject.objectdobtime;
    var localDob = finalRegistrationObject.objectlocaldob;
    var ssn = finalRegistrationObject.objectssn;
    var usNumber = finalRegistrationObject.objectusnumber;
    var creditCardNumber = finalRegistrationObject.objectcreditcardnumber;
            
    var cs2 = finalRegistrationObject.objectpassword;
    var numUpper = cs2.length - cs2.replace(/[A-Z]/g, '').length;
    $('#upperlabel').text(numUpper);
    var cs3 = finalRegistrationObject.objectpassword;
    var numLower = cs3.length - cs3.replace(/[a-z]/g, '').length;
    $('#lowerlabel').text(numLower);
    var cs4 = finalRegistrationObject.objectpassword;
    var numSpecial = cs4.length - cs4.replace(/[~`!#$%\^&*+=\-\[\]\\@';,/{}()_.|\\":<>\?]/g, '').length;
    $('#speciallabel').text(numSpecial);
        
    if(passwordFirst != confirmPassword){
        document.getElementById("passwordMismatch").innerHTML="Password Mismatch";
        flag = 1;
        return false;
    }
            
    else{		  
        document.getElementById("passwordMismatch").innerHTML="";
                
        if(numUpper<=3 || numLower<=2 || numSpecial<=2){
            alert("Minimum password requirement not acheived");
            flag = 1;
            return false;
        }
    }
            
    //Storing in session storage
    if(typeof(Storage)!=="undefined"){
        sessionStorage.setItem("sessionfname", firstName);
        sessionStorage.setItem("sessionlname", lastName);
        sessionStorage.setItem("sessionemail", emailId);
        sessionStorage.setItem("sessionpassword", passwordFirst);
        sessionStorage.setItem("sessionpasswordStrength", passwordStrength);
        sessionStorage.setItem("sessiondob", dob);
        sessionStorage.setItem("sessiondobtime", dobtime);
        sessionStorage.setItem("sessionlocalDob", localDob);
        sessionStorage.setItem("sessionssn", ssn);
        sessionStorage.setItem("sessionusnumber", usNumber);
        sessionStorage.setItem("sessioncreditCardNumber", creditCardNumber);
    }

    flag = 0;
    if(flag ===0){
        window.location.href='signin.html';
    }
    
    return true;
    
}


// Reading from Session Storage
function readFromSessionStorage(){
    document.getElementById("FirstNameLabelNew").innerHTML = sessionStorage.sessionfname;
    document.getElementById("LastNameLabelNew").innerHTML = sessionStorage.sessionlname;
    document.getElementById("eMailLabelNew").innerHTML = sessionStorage.sessionemail;
    document.getElementById("passwordLabelNew").innerHTML = sessionStorage.sessionpassword;
    document.getElementById("passwordStrength").innerHTML=sessionStorage.sessionpasswordStrength;
    document.getElementById("dobLabelNew").innerHTML = sessionStorage.sessiondob;
    document.getElementById("dobTimeLabelNew").innerHTML = sessionStorage.sessiondobtime;
    document.getElementById("localDOBLabelNew").innerHTML = sessionStorage.sessionlocalDob;
    document.getElementById("ssnLabelNew").innerHTML = sessionStorage.sessionssn;
    document.getElementById("usPhoneNumberNew").innerHTML = sessionStorage.sessionusnumber;
    document.getElementById("creditLabelNew").innerHTML = sessionStorage.sessioncreditCardNumber;
}


//Saving to Local Storage
function saveToLocalStorage(){
    var flag = 0;
    var firstName = finalRegistrationObject.objectfirstName;
    var lastName = finalRegistrationObject.objectlastName;
    var emailId = finalRegistrationObject.objectemail;
    var passwordFirst = finalRegistrationObject.objectpassword;
    var passwordStrength = finalRegistrationObject.objectpasswordStrength;
    var confirmPassword = finalRegistrationObject.objectconfirmpassword;
    var dob = finalRegistrationObject.objectdob;
    var dobtime = finalRegistrationObject.objectdobtime;
    var localDob = finalRegistrationObject.objectlocaldob;
    var ssn = finalRegistrationObject.objectssn;
    var usNumber = finalRegistrationObject.objectusnumber;
    var creditCardNumber = finalRegistrationObject.objectcreditcardnumber;
            
    var cs2 = finalRegistrationObject.objectpassword;
    var numUpper = cs2.length - cs2.replace(/[A-Z]/g, '').length;
    $('#upperlabel').text(numUpper);
    var cs3 = finalRegistrationObject.objectpassword;
    var numLower = cs3.length - cs3.replace(/[a-z]/g, '').length;
    $('#lowerlabel').text(numLower);
    var cs4 = finalRegistrationObject.objectpassword;
    var numSpecial = cs4.length - cs4.replace(/[~`!#$%\^&*+=\-\[\]\\@';,/{}()_.|\\":<>\?]/g, '').length;
    $('#speciallabel').text(numSpecial);
        
    if(passwordFirst != confirmPassword){
        document.getElementById("passwordMismatch").innerHTML="Password Mismatch";
        flag = 1;
        return false;
    }
            
    else{		  
        document.getElementById("passwordMismatch").innerHTML="";
                
        if(numUpper<=3 || numLower<=2 || numSpecial<=2){
        alert("Minimum password requirement not acheived");
        flag = 1;
        return false;
        }
    }
            
    //Storing in local storage
    if(typeof(Storage)!=="undefined"){
        localStorage.setItem("localfname", firstName);
        localStorage.setItem("locallname", lastName);
        localStorage.setItem("localemail", emailId);
        localStorage.setItem("localpassword", passwordFirst);
        localStorage.setItem("localpasswordStrength", passwordStrength);
        localStorage.setItem("localdob", dob);
        localStorage.setItem("localdobtime", dobtime);
        localStorage.setItem("locallocalDob", localDob);
        localStorage.setItem("localssn", ssn);
        localStorage.setItem("localusnumber", usNumber);
        localStorage.setItem("localcreditCardNumber", creditCardNumber);
    }

    //Using Modernizer
    if (Modernizr.localstorage) {
        alert('localStorage is available!! Directing to Login Page');
    }
            
    
    else {
        alert('This Browser Doesn\'t Support Local Storage.');
    }
            
    flag = 0;
    
    
    if(flag ===0)
                window.location.href='signin.html';
          
    return true;
        
}
        
// Reading from Local Storage
function readFromLocalStorage(){
    document.getElementById("FirstNameLabelNew").innerHTML = localStorage.localfname;
    document.getElementById("LastNameLabelNew").innerHTML = localStorage.locallname;
    document.getElementById("eMailLabelNew").innerHTML = localStorage.localemail;
    document.getElementById("passwordLabelNew").innerHTML = localStorage.localpassword;
    document.getElementById("passwordStrength").innerHTML=localStorage.localpasswordStrength;
    document.getElementById("dobLabelNew").innerHTML = localStorage.localdob;
    document.getElementById("dobTimeLabelNew").innerHTML = localStorage.localdobtime;
    document.getElementById("localDOBLabelNew").innerHTML = localStorage.locallocalDob;
    document.getElementById("ssnLabelNew").innerHTML = localStorage.localssn;
    document.getElementById("usPhoneNumberNew").innerHTML = localStorage.localusnumber;
    document.getElementById("creditLabelNew").innerHTML = localStorage.localcreditCardNumber;
}


// Login Check Function
function loginFunction(){
    status = navigator.onLine;
    var username = $("#usernameTextBox").val();
    var password = $("#passwordTextBox").val();

    
    if(status=="true"){
        if(username == sessionStorage.sessionemail && password == sessionStorage.sessionpassword)
        window.location.href = 'success.html';
            
        else if(username === "" && password === "")
        alert("Enter Details to Login");
    
        else
        alert("Login Fail");
    }
    
    else{
        if(username == localStorage.localemail && password == localStorage.localpassword)
        window.location.href = 'success.html';
            
        else if(username === "" && password === "")
        alert("Enter Details to Login");
    
        else
        alert("Login Fail");
    }
    
}


// Password Strength Check
$('#passwordTextbox').keyup(function() {
    var cs2 = $(this).val();
    var numUpper = cs2.length - cs2.replace(/[A-Z]/g, '').length;
    $('#upperlabel').text(numUpper);
    var cs3 = $(this).val();
    var numLower = cs3.length - cs3.replace(/[a-z]/g, '').length;
    $('#lowerlabel').text(numLower);
    var cs4 = $(this).val();
    var numSpecial = cs4.length - cs4.replace(/[~`!#$%\^&*+=\-\[\]\\@';,/{}()_.|\\":<>\?]/g, '').length;
    $('#speciallabel').text(numSpecial);
            
    if((numUpper>=3) && (numLower>=2)){
        if(numSpecial==2){
            document.getElementById('progressStatus').value=50;
            document.getElementById('passwordStrength').innerHTML="Normal";
        }
        if(numSpecial==3 || numSpecial==4 || numSpecial==5){
            document.getElementById('progressStatus').value=75;
            document.getElementById('passwordStrength').innerHTML="Medium";
        }
        if(numSpecial >5){
            document.getElementById('progressStatus').value=100;
            document.getElementById('passwordStrength').innerHTML="Strong";
        }
    }
            
    else if((numUpper===0) && (numLower===0) && (numSpecial ===0)){
        document.getElementById('progressStatus').value=0;
        document.getElementById('passwordStrength').innerHTML="";
    }
            
    else{
        document.getElementById('progressStatus').value=25;
        document.getElementById('passwordStrength').innerHTML="Weak";
    }
            
});


// Validate Function for Phone Number
$('#usNumberBox').keyup(function isPhoneNumberFormatValid() {
    var phoneNumberStore = document.getElementById("usNumberBox");
    var phoneSize = document.getElementById("usNumberBox").value;
    var phoneNumberPattern = /^(\d{3}-\d{3}-\d{4})$/;
    if((phoneNumberStore.value.match(phoneNumberPattern))){  
        document.getElementById('phoneStatus').innerHTML="Correct Format";
    }
    else if(phoneSize==""){
        document.getElementById('phoneStatus').innerHTML="";
    }
    else{  
        document.getElementById('phoneStatus').innerHTML="Wrong Format";  
    } 
});


// Validate Function for E-mail
$('#eMailBox').keyup(function isValidEmail() {
    var emailStore = document.getElementById("eMailBox");
    var emailSize = document.getElementById("eMailBox").value;
    var emailPattern = /^\S+@\S+\.\S+$/;  
    if((emailStore.value.match(emailPattern))){  
        document.getElementById('emailStatus').innerHTML="Correct Format";
    }
    else if(emailSize==""){
        document.getElementById('emailStatus').innerHTML=""; 
    }
    else{  
        document.getElementById('emailStatus').innerHTML="Wrong Format";  
    }  
});


// Function to create an Object
function objectCreation(){
    objectDetails = { 
        objectfirstName: document.getElementById("FirstNameBox").value,
        objectlastName: document.getElementById("LastNameBox").value,
        objectemail: document.getElementById("eMailBox").value,
        objectpassword: document.getElementById("passwordTextbox").value,
        objectconfirmpassword: document.getElementById("confirmPasswordBox").value,
        objectpasswordStrength: $("#passwordStrength").text(),
        objectdob: document.getElementById("dobBox").value,
        objectdobtime: document.getElementById("dobTimeBox").value,
        objectlocaldob: document.getElementById("localDobBox").value,
        objectssn: document.getElementById("ssnBox").value,
        objectusnumber: document.getElementById("usNumberBox").value,
        objectcreditcardnumber: document.getElementById("creditBox").value
    };
}

// Convert object into JSON String
function toJSONString(){
    stringJSON = JSON.stringify(objectDetails);
}

// Read the data from JSON String and load the registration Object
function readFromJSONString(){
    finalRegistrationObject = JSON.parse(stringJSON);
}
    
