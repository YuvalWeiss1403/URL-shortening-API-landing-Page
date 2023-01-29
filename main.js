
const shortenItButton = document.getElementById('shorten-it-button');
const shortenInput = document.getElementById('input');
const inputEmptyLabel=document.getElementById('input-empty-label');
const shortedContainer = document.getElementById('shorted-container');
shortedContainer.className ='shortedContainer';
const container = document.createElement('div');
const longURL = document.createElement('div');
const shortURLandCopyContainer = document.createElement('div');
const shortURL = document.createElement('div');
const copyButton =document.createElement('button');


shortenItButton.addEventListener('click',()=>{
    const inputText =shortenInput.value;
    if(inputText===''){
        shortenInput.style.border='3px solid red';
        inputEmptyLabel.style.display="block";
    }
    else{
        shortenInput.style.border='0';
        inputEmptyLabel.style.display="none";
        // fetch(``);    
        // .then((response) => {
        //     if (response.ok) {
        //         return response.json();
        //     } else {
        //         throw new Error(response.statusText);
        //     }})
        // .then((data) => {
        //    createNewShortedLinkDiv(data.shortenInput,inputText);
        // })
        // .catch((error) => {
        //   console.error(error)
        // });}
// });
        createNewShortedLinkDiv("www.rel.link","www.google.com");
    }});

function createNewShortedLinkDiv(shortUrl,longUrl){
    longURL.innerHTML = longUrl;
    longURL.className = 'long-url'
    shortURL.innerHTML = shortUrl;
    shortURL.className = 'short-url'
    container.className = 'short-url-container';
    shortURLandCopyContainer.className ='short-URL-and-copy-container';
    copyButton.textContent = 'Copy'
    shortURLandCopyContainer.appendChild(shortURL);
    shortURLandCopyContainer.appendChild(copyButton);
    container.appendChild(longURL);
    container.appendChild(shortURLandCopyContainer);
    shortedContainer.appendChild(container);
}

copyButton.addEventListener('click',(event)=>{
    copyButton.textContent = 'Copied!';
    copyButton.style.backgroundColor = 'hsl(260, 8%, 14%)';
    navigator.clipboard.writeText(event.target.parentElement.children[0].innerHTML);
});