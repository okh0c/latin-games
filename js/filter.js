function search() {
let filter = document.getElementById('find').value.toUpperCase();
let item = document.querySelectorAll('.caja');
let l = document.getElementsByTagName('p');
for(var i = 0;i<=l.length;i++){
let a=item[i].getElementsByTagName('p')[0];
let value=a.innerHTML || a.innerText || a.textContent;
if(value.toUpperCase().indexOf(filter) > -1) {
item[i].style.display="";
}
else
{
item[i].style.display="none";
}
}
}


let sortBtn = document.querySelector('.buttons').children;
let sortItem = document.querySelector('.container-cat').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');


        let targetData = this.getAttribute('data-name');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-filter') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}
