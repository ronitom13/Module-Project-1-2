//Javascript Document 

//Adding a new item to the list with a checkbox and delete button.
function createItem(){ 
    let newItem =  document.querySelector('ul');
    let listItem = document.createElement('li');
    listItem.id = 'lists';
    console.log(listItem);

    //adding a checkbox to the new item
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', isChecked);
    checkbox.name = 'checkbox';
    checkbox.id = 'check1';

    listItem.appendChild(checkbox);
    console.log(checkbox);

    //adding a delete button
    let delete1 = document.createElement('button');
    delete1.id = 'deleteItem';
    delete1.innerHTML = 'Delete Item';
    delete1.setAttribute('onclick', 'deleteItem()');
    listItem.appendChild(delete1);
    console.log(delete1);

    //Adding the created list item to unorderlist
    let text = document.createTextNode(document.getElementById('newitem').value);
    listItem.appendChild(text);
    document.getElementById('list1').appendChild(listItem);
}

    let create = document.getElementById('btn1');
    create.onclick = createItem;

    var checkedItem = document.getElementsByTagName('li');

    //Line-through when when checked
    function isChecked(e) {
        if(e.target.checked===true)
        {
            e.target.parentElement.style.textDecoration = 'line-through';
        }
        else if(e.target.checked===false)
        {
            e.target.parentElement.style.textDecoration = 'none';
        }
    }



    //delete the item when the delete button is pressed
    function deleteItem(){
        let parent = document.getElementsByTagName('ul')[0];
        let child = document.getElementById('lists');
        let removed = parent.removeChild(child);
        }