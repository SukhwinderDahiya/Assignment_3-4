const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const email2 = document.getElementById('email2');
const cnumber = document.getElementById('cnumber');
const address = document.getElementById('address');
const adults = document.getElementById('adults');
const adultsName = document.getElementById('adultsName');
const children = document.getElementById('children');
const childrenName = document.getElementById('childrenName');
const typeTravel = document.getElementById('typeTravel');
const agree = document.getElementById('agree');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const email2Value = email2.value.trim();
    const cnumberValue = cnumber.value.trim();
    const addressValue = address.value.trim();
    const adultsValue = adults.value.trim();
    const adultsNameValue = adultsName.value.trim();
    const childrenValue = children.value.trim();
    const childrenNameValue = childrenName.value.trim();
    const typeTravelValue = typeTravel.value.trim();
    const agreeValue = agree.value.trim();

    if (firstnameValue === '') {
        setErrorFor(firstname, 'Firstname cannot be blank');
    } else {
        setSuccessFor(firstname);
    }

    if (lastnameValue === '') {
        setErrorFor(lastname, 'Lastname cannot be blank');
    } else {
        setSuccessFor(lastname);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (email2Value === '') {
        setErrorFor(email2, 'email2 cannot be blank');
    } else if (emailValue !== email2Value) {
        setErrorFor(email2, 'email does not match');
    } else {
        setSuccessFor(email2);
    }

     if (cnumberValue === '') {
        setErrorFor(cnumber, 'Number cannot be blank');
    } else {
        setSuccessFor(cnumber);
    }

    if (addressValue === '') {
        setErrorFor(address, 'Address cannot be blank');
    } else {
        setSuccessFor(address);
    }

    if (adultsValue === '') {
        setErrorFor(adults, 'Adults cannot be blank');
    } else {
        setSuccessFor(adults);
    }

    if (adultsNameValue === '') {
        setErrorFor(adultsName, 'Adults Name cannot be blank');
    } else {
        setSuccessFor(adultsName);
    }

    if (childrenValue === '') {
        setErrorFor(children, 'Children cannot be blank');
    } else {
        setSuccessFor(children);
    }

    if (childrenNameValue === '') {
        setErrorFor(childrenName, 'children Name cannot be blank');
    } else {
        setSuccessFor(childrenName);
    }

    if (typeTravelValue === '') {
        setErrorFor(typeTravel, 'Type of travel cannot be blank');
    } else {
        setSuccessFor(typeTravel);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/* agree Checkbox*/

function validateForm(form)
{
    console.log("checkbox checked is ", form.agree.checked);
    if(!form.agree.checked)
    {
        document.getElementById('agree_chk_error').style.visibility='visible';
        return false;
    }
    else
    {
        document.getElementById('agree_chk_error').style.visibility='hidden';
        window.location.replace("./index.html");
        return true;
    }
}


/*Captcha*/

let captchaText = document.querySelector('#captcha');
let userText = document.querySelector('#textBox');
let submitButton = document.querySelector('#csubmit');
let output = document.querySelector('#output');
let refreshButton = document.querySelector('#refresh');

let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];
for(let i = 1; i <= 7; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
captchaText.innerHTML = emptyArr.join('');

userText.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        if(userText.value === captchaText.innerHTML) {
            output.classList.add("greenText");
            output.innerHTML = "Correct!";
        } else {
            output.classList.add("redText");
            output.innerHTML = "Incorrect, please try again";
        }
    }
});

submitButton.addEventListener('click',  function() {
    if(userText.value === captchaText.innerHTML) {
        output.classList.add("greenText");
        output.innerHTML = "Correct!";
    } else {
        output.classList.add("redText");
        output.innerHTML = "Incorrect, please try again";
    }
});

refreshButton.addEventListener('click', function () {
    userText.value = "";
    let refreshArr = [];
    for(let j = 1; j <= 7; j++) {
        refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    captchaText.innerHTML = refreshArr.join('');
    output.innerHTML = "";
});

submitButton.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
    if(userText.value === captchaText.innerHTML) {
        console.log("correct!");
        output.classList.add("greenText");
        output.innerHTML = "Correct!";
    } else {
        output.classList.add("redText");
        output.innerHTML = "Incorrect, please try again";
    }
    }
});
