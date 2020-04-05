function addNewField() {

    var main_div = document.createElement("div")
    main_div.className = "fields-list_items"

    if(iterator%2==0) {
        main_div.style.backgroundColor = "#D3D3D3"
    }
    else {
        main_div.style.backgroundColor = "#FFFFFF"
    }

    iterator++

    var save_edit_button = document.createElement("button")
    save_edit_button.setAttribute("type", "text")
    save_edit_button.textContent = "Save"

    var remove_button = document.createElement("button")
    remove_button.setAttribute("type", "text")
    remove_button.textContent = "Remove"
    remove_button.className = "remove-button"

    var author_input = document.createElement("input")
    author_input.setAttribute("type", "text")

    var title_input = document.createElement("input")
    title_input.setAttribute("type", "text")

    var author_paragraph = document.createElement("p")
    author_paragraph.style.display = "none"
    var title_paragraph = document.createElement("p")
    title_paragraph.style.display = "none"

  
    var docFrag = document.createDocumentFragment();
    
    for(i = 0; i < 3; i++){
        var item_div = document.createElement("div")
        item_div.className = "field_item"
        docFrag.appendChild(item_div)
    }

    main_div.appendChild(docFrag)


    
    main_div.children[0].appendChild(author_input)
    main_div.children[0].appendChild(author_paragraph)

    main_div.children[1].appendChild(title_input)
    main_div.children[1].appendChild(title_paragraph)

    main_div.children[2].appendChild(save_edit_button)
    main_div.children[2].appendChild(remove_button)

    const main_list = document.querySelector(".fields-list")
    main_list.appendChild(main_div)

    function removeElement() {
        main_div.remove()
    }

    function saveElement() {

        if(save_edit_button.textContent == "Save") {

            author_paragraph.textContent = author_input.value
            title_paragraph.textContent = title_input.value

            author_paragraph.style.display = "block"
            title_paragraph.style.display = "block"
            
            author_input.style.display = "none"
            title_input.style.display = "none"
            
            save_edit_button.textContent = "Edit"
        }
        else {
            author_paragraph.style.display = "none"
            title_paragraph.style.display = "none"

            author_input.style.display = "block"
            title_input.style.display = "block"

            save_edit_button.textContent = "Save"
        }

            

    }

    remove_button.addEventListener("click", removeElement)

    save_edit_button.addEventListener("click", saveElement)

}


var iterator = 0

const itemButton = document.querySelector('button');
itemButton.addEventListener("click", addNewField)

