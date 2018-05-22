// //when button is pressed (using on instead of .click )
// $('.spoiler button').click(() => {
//     // show spoiler when button is pressed
//     $('.spoiler span').show();
//     //hide reveal spoiler button
//     $('.spoiler button').hide();
// }); This works if we put it below after creation of the button element however it won't work when we place it above.
// That's why we us event delegation (the on method)

// $('.spoiler').on('click','button',() => {
//     // show spoiler when button is pressed
//     $('.spoiler span').show();
//     //hide reveal spoiler button
//     $('.spoiler button').hide();
// }); we're saying, when any button element inside of any element with the class of spoilers is clicked, do something.
//But what if I wanted to add 5, or 10, or 20 spoilers to my spoiler revealer?
// I could fix this  by giving the second spoiler a unique class or ID.
// But I'd have to repeat a lot of code, and adding and maintaining unique IDs and event listeners on each element could become a real pain.
// We can use something called the event object to fix this issue to control which button is hidden.

//e can also be written as event or evt 
// another way of selecting event.target is to use 'this' instead
$('.spoiler').on('click','button',(event) => {
    // show spoiler when button is pressed
    $(event.target).prev().show();
    //hide reveal spoiler button
    $(event.target).hide();
});

//Create the reveal spoiler button
const $button = $("<button>Reveal Spoiler</button>")
//append to webpage to put the button element at the end of the paragraph
//if we want to place it before the spoiler message use prepend() instead.
$('.spoiler').append($button);


// hide the soiler on page load
$('.spoiler span').hide();



