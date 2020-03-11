
document.getElementById("add").addEventListener("click", addNote);
document.getElementById("note").addEventListener('keyup', function(e){
                                                            if(e.keyCode === 13){
                                                                addNote();
                                                            }});

function deleteNote(el){
    var element = el.parentElement;
    element.remove();
}

function addNote(){
    let currentNote = document.getElementById("note").value;
    if(currentNote === "") return;
    let newNote = document.getElementById("taken-notes") 
    newNote.innerHTML+=`  <div class="one-note">
            <input class="form-control" type="text" placeholder=${currentNote} readonly> 
            <button id="delete" type="button" class="btn btn-danger" onclick="deleteNote(this)">X</button>
            </div>`;
    document.getElementById("note").value = "";  
}


