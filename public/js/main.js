/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    //console.log(bodypd);

    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('bx-x')
            // add padding to body
            bodypd.classList.toggle('body-pd')
            // add padding to header
            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle','nav-bar','body-pd','header')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

/*===== BarCircle =====*/

// const gaugeElement1 = document.querySelector('.gauge');
const gaugeElement1 = document.getElementById('card1-gauge'); // UNet
const gaugeElement2 = document.getElementById('card2-gauge'); // Ie
const gaugeElement3 = document.getElementById('card3-gauge'); // P
const gaugeElement4 = document.getElementById('card4-gauge'); // fNet
const gaugeElement5 = document.getElementById('card5-gauge'); // PF
const gaugeElement6 = document.getElementById('card6-gauge'); // Um
const gaugeElement7 = document.getElementById('card7-gauge'); // IM2
const gaugeElement8 = document.getElementById('card8-gauge'); // Q
const gaugeElement9 = document.getElementById('card9-gauge'); // fM

function setGaugeValue(gauge, value){
    if (value < 0 || value > 1){
        return;
    }

    gauge.querySelector('.gauge__fill').style.transform = `rotate(${value/2}turn)`; 
    gauge.querySelector('.gauge__cover').textContent = `${value} pu`;
}

setGaugeValue(gaugeElement1, 0.871); // UNet
setGaugeValue(gaugeElement2, 0.298); // Ie
setGaugeValue(gaugeElement3, 0.074); // P
setGaugeValue(gaugeElement4, 0.500); // fNet
setGaugeValue(gaugeElement5, 0.988); // PF
setGaugeValue(gaugeElement6, 0.912); // Um
setGaugeValue(gaugeElement7, 0.084); // IM2
setGaugeValue(gaugeElement8, 0.034); // Q
setGaugeValue(gaugeElement9, 0.100); // fM
