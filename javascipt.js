shownotes();
let press= document.getElementById('addBtn');
press.addEventListener('click',(e)=>{
    let addtext=document.getElementById('addTxt');
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addtext.value);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    addtext.value='';
    console.log(notesObj);
    shownotes();

})
function shownotes(){
    let notes=localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html='';
    notesObj.forEach(function(element,index){
        html +=`
    <div class="noteCard card my-3 mx-3" style="width: 18rem;">   
    <div class="card-body">
      <h5 class="card-title">Note ${index +1}</h5>
      <p id='gettext' class="card-text">${element}</p>
      <a href="#" onclick='deleteNote(this.id)' id="${index}" class="btn btn-primary">Delete Note</a>
    </div>
</div>
    `;
    })

    let noteElm=document.getElementById('notes');
    if(notesObj.length != 0){
        noteElm.innerHTML = html;
    }
    else{
        noteElm.innerHTML=`Nothing to Show`;
    }
} 
function deleteNote(index){
    console.log('this is delete',index);
    let notes=localStorage.getItem('notes');
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    shownotes();
}

let search=document.getElementById('searchtxt');
search.addEventListener('input',()=>{
    let inputValue=search.value.toLowerCase();
    console.log(search.value);
    let cardNote=document.getElementsByClassName('noteCard');
    Array.from(cardNote).forEach(function(element){
        let cardPara=element.getElementsByTagName('p')[0].innerText;
        if(cardPara.includes(inputValue)){
            element.style.display='block';
        }
        else{
            element.style.display='none';
        }
    })
})