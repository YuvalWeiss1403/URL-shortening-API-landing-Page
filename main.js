const shortenItButton = document.getElementById('shorten-it-button');
const shortenInput = document.getElementById('input');
const inputEmptyLabel=document.getElementById('input-empty-label');
const shortedContainer = document.getElementById('shorted-container');
shortedContainer.className ='shortedContainer';
const mobileMenuButton = document.getElementById('mobile-menu');
const mobileMenu = document.getElementById('mobile-navigation-container');

let shortedUrls = JSON.parse(localStorage.getItem("shortedUrls")) || [];
document.querySelector("body").onload = renderShortedUrls();


shortenItButton.addEventListener('click',()=>{
    const inputText =shortenInput.value;
    if(inputText===''){
        shortenInput.style.border='3px solid red';
        inputEmptyLabel.style.display="block";
    }
    else{
        shortenInput.style.border='0';
        inputEmptyLabel.style.display="none";
        fetch(` https://api.shrtco.de/v2/shorten?url=example.org/very/long/${inputText}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.statusText);
            }})
        .then((data) => {
            addTask(inputText,data.result["short_link"]);
        })
        .catch((error) => {
          console.error(error)
        });}
});

function createNewShortedLinkDiv(shortedUrl){
    const container = document.createElement('div');
    const longURL = document.createElement('div');
    const shortURLandCopyContainer = document.createElement('div');
    const hr = document.createElement('hr');
    const shortURL = document.createElement('div');
    const copyButton =document.createElement('button');
    longURL.innerHTML = shortedUrl.longUrl;
    longURL.className = 'long-url'
    shortURL.innerHTML = shortedUrl.shortUrl;
    shortURL.className = 'short-url'
    container.className = 'short-url-container';
    shortURLandCopyContainer.className ='short-URL-and-copy-container';
    copyButton.textContent = 'Copy'
    copyButton.id='copy-button';
    shortURLandCopyContainer.appendChild(shortURL);
    shortURLandCopyContainer.appendChild(copyButton);
    container.appendChild(longURL);
    container.appendChild(hr);
    container.appendChild(shortURLandCopyContainer);
    // shortedContainer.appendChild(container);
    copyButton.addEventListener('click',(event)=>{
        copyButton.textContent = 'Copied!';
        copyButton.style.backgroundColor = 'hsl(260, 8%, 14%)';
        navigator.clipboard.writeText(event.target.parentElement.children[0].innerHTML);
    });
    return container;
}

mobileMenuButton.addEventListener('click',()=>{
    let menuDisplay = window.getComputedStyle(mobileMenu).display;
    if(menuDisplay === 'none'){
        mobileMenu.style.display = 'flex';
    }else{
        mobileMenu.style.display = 'none';
    }
});

function renderShortedUrls() {
    shortedContainer.innerHTML = "";
    for (let i = 0; i < shortedUrls.length; i++) {
        shortedContainer.appendChild(createNewShortedLinkDiv(shortedUrls[i]));
    }
  }
  
function addTask(shortURL,longURL) {
    const shortedUrl = {
        longUrl: longURL,
        shortUrl:shortURL
    };
    shortedUrls.push(shortedUrl);
    localStorage.setItem("shortedUrls", JSON.stringify(shortedUrls));
    renderShortedUrls();
  }

  