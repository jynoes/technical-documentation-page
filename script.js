// Get the needed element sections
const introductionSec = document.querySelector("#Introduction");
const whatSec = document.querySelector("#What");
const javaScriptSec = document.querySelector("#JavaScript_and_Java");
const helloWorldSec = document.querySelector("#Hello_World");
const variablesSec = document.querySelector("#Variables");
const declaringVariables = document.querySelector("#Declaring_Variables");
const variableScopeSec = document.querySelector("#Variable_Scope");
const globalVariablesSec = document.querySelector("#Global_Variables");
const constantsSec = document.querySelector("#Constants");
const dataTypesSec = document.querySelector("#Data_Types");
const ifElseSec = document.querySelector("#if-else_Statement");
const whileStatementSec = document.querySelector("#while_Statement");
const functionDeclarationSec = document.querySelector("#Function_Declarations");
const referenceSec = document.querySelector("#Reference");


function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('scroll', function () {
    if (isInViewport(introductionSec)) {
        document.querySelector("a.nav-link.intro").classList.add("active");
    } else {
        document.querySelector("a.nav-link.intro").classList.remove("active");
    }

    if (isInViewport(whatSec)) {
        document.querySelector("a.nav-link.what").classList.add("active")
    } else {
        document.querySelector("a.nav-link.what").classList.remove("active");
    }
    
    if (isInViewport(javaScriptSec)) {
        document.querySelector("a.nav-link.javascript").classList.add("active")
    } else {
        document.querySelector("a.nav-link.javascript").classList.remove("active");
    }
    
    if (isInViewport(helloWorldSec)) {
        document.querySelector("a.nav-link.helloWorld").classList.add("active")
    } else {
        document.querySelector("a.nav-link.helloWorld").classList.remove("active");
    }

    if (isInViewport(variablesSec)) {
        document.querySelector("a.nav-link.variables").classList.add("active")
    } else {
        document.querySelector("a.nav-link.variables").classList.remove("active");
    }
    
    if (isInViewport(declaringVariables)) {
        document.querySelector("a.nav-link.declaring").classList.add("active")
    } else {
        document.querySelector("a.nav-link.declaring").classList.remove("active");
    }
    
    if (isInViewport(variableScopeSec)) {
        document.querySelector("a.nav-link.variableScope").classList.add("active")
    } else {
        document.querySelector("a.nav-link.variableScope").classList.remove("active");
    }
    
    if (isInViewport(globalVariablesSec)) {
        document.querySelector("a.nav-link.global").classList.add("active")
    } else {
        document.querySelector("a.nav-link.global").classList.remove("active");
    }
    
    if (isInViewport(constantsSec)) {
        document.querySelector("a.nav-link.constants").classList.add("active")
    } else {
        document.querySelector("a.nav-link.constants").classList.remove("active");
    }
    
    if (isInViewport(dataTypesSec)) {
        document.querySelector("a.nav-link.data").classList.add("active")
    } else {
        document.querySelector("a.nav-link.data").classList.remove("active");
    }
    
    if (isInViewport(ifElseSec)) {
        document.querySelector("a.nav-link.ifelse").classList.add("active")
    } else {
        document.querySelector("a.nav-link.ifelse").classList.remove("active");
    }
    
    if (isInViewport(whileStatementSec)) {
        document.querySelector("a.nav-link.while").classList.add("active")
    } else {
        document.querySelector("a.nav-link.while").classList.remove("active");
    }

    if (isInViewport(functionDeclarationSec)) {
        document.querySelector("a.nav-link.function").classList.add("active")
    } else {
        document.querySelector("a.nav-link.function").classList.remove("active");
    }

    if (isInViewport(referenceSec)) {
        document.querySelector("a.nav-link.reference").classList.add("active")
    } else {
        document.querySelector("a.nav-link.reference").classList.remove("active");
    }
}, {
    passive: true
});