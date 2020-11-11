const form = document.querySelector("#addForm");
const itemList = document.querySelector("#items");
const filter = document.querySelector('#filter');
//form submit event
form.addEventListener('submit', addItem)

function addItem(e){
    e.preventDefault(); //prevent normal submission

    // get input values
    const newItem = document.querySelector("#item");

    const delBtn = document.querySelector("button");
    
    //create li for newItem
    const li = document.createElement('li');
    li.className = 'list-group-item';

    // append the value from the form
    li.appendChild(document.createTextNode(newItem.value));
    
    delBtn.className = "btn btn-danger btn-sm float-right delete";
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);
    itemList.appendChild(li);
}

//event to delete item
itemList.addEventListener('click', deleteItem);

function deleteItem(e){
    if (e.target.classList.contains('delete')){
        if(confirm('Do you want to delete?')){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
    
}

filter.addEventListener('keyup', filterItems);

function filterItems(e){
    const text = e.target.value.toLowerCase();
    console.log(text);
    // let items = itemList.getElementsByTagName('li');
    let items = itemList.querySelectorAll('li');
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    })
}