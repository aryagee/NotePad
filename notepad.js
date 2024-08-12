let btn=document.querySelector('button')
let main=document.querySelector('#main')
let notebox=document.querySelector('.notebox')
// let p_note=document.querySelector('.pnote')


function savenote(){
    console.log('you clicked on save notes')
    const notes=document.querySelectorAll('.note textarea')
    console.log(notes)
    const data=[]
    notes.forEach((note)=>{
        data.push(note.value)
    })
  
    // console.log(data)
    if(data.length===0){
        localStorage.removeItem('notes')
    }
    else{
        localStorage.setItem('notes',JSON.stringify(data))
    }
    




}

btn.addEventListener('click',function(){
    console.log('you clicked')
   create()
})

function create(txt=' '){
   let createnew=document.createElement('div')
   createnew.classList.add('note')
   createnew.innerHTML=`
   

<div class="toolbar">
    <i class=" save fa-solid fa-floppy-disk"></i>
    <i class="trash fa-solid fa-trash"></i>
    
</div>
<textarea>
   ${txt}
</textarea>

`;
createnew.querySelector('.trash').addEventListener('click',function(){
    createnew.remove()
    savenote()
})

createnew.querySelector('.save').addEventListener('click',function(){
    savenote()
})



   main.appendChild(createnew)
   savenote()

}

(function(){

    let getnotes=JSON.parse( localStorage.getItem('notes'))
    console.log(getnotes)
    if(getnotes===null){
        create()
    }
    else{
    getnotes.forEach((getnotes)=>{
        create(getnotes)
    })
}
    
})()


