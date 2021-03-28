

const btn_delete =  document.querySelectorAll('.btn-delete');
if (btn_delete){
     const btnArray = Array.from(btn_delete);
     btnArray.forEach((btn) => {

         btn.addEventListener('click',(e)=>{
            if(!confirm('Are you sure you want to delete it?')){
             e.preventDefault();   
            }
        });
      })
}

