const firstName = document.querySelector(".f_name");
const lastName = document.querySelector(".l_name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.getElementById("form");

form.addEventListener("submit", evnet => {
    event.preventDefault();

    handleErrorCheck();
});

const setError = (element, message) => {
    const userControl = element.parentElement;
    const errorDisplay = userControl.querySelector(".error");

    errorDisplay.innerText = message;
    element.classList.add("fail");

    element.addEventListener("click", event => {
        errorDisplay.innerText = "";
        element.classList.remove("fail");
    });
}

const setSuccess = (element) => {
    const userControl = element.parentElement;
    const errorDisplay = userControl.querySelector(".error");

    errorDisplay.innerText = "";
    element.classList.remove("fail");
}

const validEmail = (emailValue) => {
    const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.  [a-z]{2,8})?$/g;
    const testValue = regex.test(emailValue);
    return testValue;
}

const handleErrorCheck =  () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim().toLowerCase();
    const passwordValue = password.value.trim();

    if(firstNameValue === '') {
        setError(firstName, "First Name cannot be empty");
    } else {
        setSuccess(firstName);
    }

    if(lastNameValue === '') {
        setError(lastName, "Last Name cannot be empty");
    } else {
        setSuccess(lastName);
    }

    if(emailValue === '') {
        setError(email, "Email cannot be empty");
    } else if (!validEmail(emailValue)) {
        setError(email, "Looks like this in not an email");
    }
    else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, "Password cannot be empty");
    } else {
        setSuccess(password);
    }
}