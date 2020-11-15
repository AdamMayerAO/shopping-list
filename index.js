$(function() {
        $('#js-shopping-list-form').submit(event => {
            // stop the default form submission behavior
            event.preventDefault();
            // in case there's already results
            $(".js-results").empty();
            //add the item as the last element of the list
            const item = $(event.currentTarget).find('#shopping-list-entry');
            $("ul").append(
                `<li class="shopping-item"><span>{item}</span>
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
    })
    //remove button
$(".shopping-item-delete").click(function(event) {
    this.remove();
});
//strikethrough
$(".shopping-item-toggle").click(function(event) { <
    li class = "shopping-item__checked" >
        <
        button class = "shopping-item-toggle" >
        <
        span class = "button-label" > Uncheck < /span> <
        /button> <
        /li>
});