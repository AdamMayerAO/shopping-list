function shoppingList() {

    //form sumbission: id of the form
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();

        //class of the input type of the form
        const listItem = $('#shopping-list-entry').val();


        if (listItem !== "") {
            //add a new list item to the ul class shopping list 
            $('.shopping-list').append(`<li>
          <span class="shopping-item">${listItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>
        <li>`);
            //reset the form input
            $('#shopping-list-entry').val("");
        }
    });

    //.shoppinglist is the class of the ul
    //.shopping-list-toggle is the class of the button
    // when I click on the 'check' button: then the closest button and the closest .shopping item '.shopping-item-controls').siblings - How does this work?
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
    });



    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
}




$(shoppingList);


















/*function ShoppingList() {

    $('#js-shopping-list-form').submit(event => {
        // stop the default form submission behavior
        event.preventDefault();
        // in case there's already results
        $(".js-results").empty();
        //add the item as the last element of the list
        const item = $('#shopping-list-entry').val(); //event.currentTarget).find(
        $("ul").append(
            `<li><span class="shopping-item">${item}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
        );
    })

}
//remove button
$('.ul').on('click', '.shopping-item-delete', function(event) {
    event.target.closest("li").remove(); //removes the original buttons, but not new ones added.
});


//strikethrough
$('.ul').on('click', '.shopping-item-toggle', function(event) {
    $(this.closest("li").toggleClass('shopping-item__checked'));
});


$(ShoppingList);
*/