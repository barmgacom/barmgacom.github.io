var emails=['eduamalofficial@gmail.com', 'barmgasite@gmail.com','hiwatarikaya@gmail.com'];
var cssselectors=[]
console.log('injected')
async function main() {
    while(document.querySelector('h1')==null){await new Promise((resolve) => setTimeout(resolve,500));}

    // Your custom logic here
    if(document.querySelector("body[running]")!=null){ return null}else{document.querySelector("body").setAttribute('running','');}
    console.log("Script 1 is running after all resources are loaded!");


var modal = document.createElement("div");
modal.style.zIndex = 9999;  // Make sure it's on top
modal.style.backgroundColor = "#f4f4f4";
modal.style.border = "1px solid #888";
modal.style.width = "200px";  // Or whatever size you want
modal.style.position = "fixed";
modal.style.top = "50%";
modal.style.left = "50%";
modal.style.transform = "translate(-50%, -50%)";
modal.style.padding = "10px";
modal.style.boxSizing = "border-box";
modal.style.textAlign = "center";

var text = document.createElement("p");
var textarea = document.createElement("textarea");
textarea.style.width = "100%"; // Expand to fill the available width
textarea.style.height = "100px"; // Adjust the height as needed
textarea.placeholder = "Type emails"; // Optional placeholder text
modal.appendChild(textarea);
modal.appendChild(text);
var button = document.createElement("button");
button.textContent = "SEND";
button.onclick = function() {
    modal.style.display = "none";
    emails=textarea.value.split('\n')
    start()
};
document.querySelector('#start').onclick = function() {
    modal.style.display = "none";
    emails=document.querySelector('#links').value.split('\n')
    cssselectors=document.querySelector('#cssSelectors').value.split('\n')
    if (cssselectors==''){cssselectors=["download"]}
    namee=document.querySelector('#projectName').value
    start()
};
modal.appendChild(button);
modal.style.display = "none";
document.body.appendChild(modal);
var activatebutton=document.createElement("button")
activatebutton.textContent="Start"
activatebutton.addEventListener("click", function(event) {modal.style.display= "block"})
activatebutton.style.width='60px';
activatebutton.style.height='30px';
activatebutton.style.color='red';
//document.querySelector('h1').style.display= "none"
//document.querySelector('[data-tooltip^="Send"][role="button"]+div,[data-tooltip^="Envoyer"][role="button"]+div,[data-tooltip^="إرسال"][role="button"]+div').style.display= "none"
//document.querySelector('h1').parentElement.appendChild(activatebutton)
// Function to check if the modal is visible
function isModalVisible() {
    return modal.style.display !== "none";
}

// Check every second if the modal is visible
var checkInterval = setInterval(function() {
    if (!isModalVisible()) {
        clearInterval(checkInterval);
    }
}, 1000);
//noedit
var x=1
var cuswind=false
var newlink=""
var email=''
var mainlink='x'
async function start(){
        cuswind=false
        email=emails[0];
        if (email==undefined){return null};
        newlink=mainlink.replace('x',email).replace('?','?worked=true'+'&NAMEE='+encodeURIComponent(namee)+'&CS='+encodeURIComponent(cssselectors.join('#')))
        if (!newlink.includes('?')){newlink=newlink+"?xs&worked=true"+'&NAMEE='+encodeURIComponent(namee)+'&CS='+encodeURIComponent(cssselectors.join('#'))}
        if (!cuswind)
        {cuswind= await window.open(newlink, '_blank');await new Promise((resolve) => setTimeout(resolve,3000)); await cuswind.postMessage(newlink,"*")}
        else{await cuswind.postMessage(newlink,"*")}
        console.log(" sent to: "+email)}

window.addEventListener("message", async function(event) {
    if (event.data === "Next") {
        console.log(" sent to: "+emails[0])
        emails.shift();
        
        email=emails[0];
        if (email==undefined){return null};
        newlink=mainlink.replace('x',email).replace('?','?worked=true'+'&NAMEE='+encodeURIComponent(namee)+'&CS='+encodeURIComponent(cssselectors.join('#')))
        if (!newlink.includes('?')){newlink=newlink+"?xs&worked=true"+'&NAMEE='+encodeURIComponent(namee)+'&CS='+encodeURIComponent(cssselectors.join('#'))}
        if (!cuswind)
        {cuswind= await window.open(newlink, '_blank');}
        else{
            if (cuswind.closed) {
                
                
            } else {
                
                await cuswind.postMessage(newlink,"*")
                
            }
        }
        
        
        

      
    }else if( event.data === "body"){cuswind.postMessage('runsss', '*');}
    
});
while(true){if(cuswind.closed){start(); console.log('restarting')}await new Promise((resolve) => setTimeout(resolve,500));}
};

main()