
const shortenItButton = document.getElementById('shorten-it-button');
const shortenInput = document.getElementById('input');
const inputEmptyLabel=document.getElementById('input-empty-label');

shortenItButton.addEventListener('click',()=>{
    const inputText =shortenInput.value;
    if(inputText===''){
        shortenInput.style.border='3px solid red';
        inputEmptyLabel.style.display="block";
    }
    else{
        shortenInput.style.border='0';
        inputEmptyLabel.style.display="none";

    }
});