// 
//
//
// //                           SELECTING WITH JQuery
//
//
// console.log($);
// // to test if jQuery is connected
// // output: ƒ (a,b){return new r.fn.init(a,b)}
//
//
// console.log($("h1"));
// // to return anything with an h1 tag as an object
// // output: r.fn.init [h1, prevObject: r.fn.init(1)]
// console.log($("li"));
// // output: r.fn.init(6) [li, li, li, li, li, li#special, prevObject: r.fn.init(1)]
//
//
// // this can be applied to a variable like so...
// var x = $("h1")
// // you can then use this variable to change css of specified tag like so...
// x.css('color','red')
// // this can also be done with mulptiple properties, like an object...
// var newCSS = {
//   'color':'rgba(200, 200, 200, 0.7)',
//   'background':'rgba(0, 0, 200, 0.9)',
//   'border':'2px solid black',
//   'border-radius':'20px',
//   'padding':'5px',
//   'text-shadow':'5px 10px 10px black',
//   'text-align':'center',
//   'box-shadow':'5px 10px 20px black'
// }
// x.css(newCSS);
//
// // to change the css property of all list items...
// var listItems = $('li')
// listItems.css('font-family','American Typewriter')
//
// // to apply this to a single item in list, use .eq(0).css(), "0 being an index"
// // like so...
// listItems.eq(0).css('color','blue')
//
// // use negative indexing to grab last list item...
// listItems.eq(-1).css('color','blue')
//
//
// // if you want to change  an HTML tag...
// $('h1').text('Brand New Text')
// // or to edit...
// $('h2').html("<em>some new emphasized text</em>")
//
// // to change or add an HTML attribute such as input type...
// $('input').eq(1).attr('type','checkbox')
// // or a value...
// $('input').eq(0).val("new value!")
//
//
// // to add a class to a tag...
// $('h2').addClass('turnRed')
// $('p').addClass('turnRed')
// // and to remove a class...
// $('p').removeClass('turnRed')
//
// // use .toggleClass to simply reverse whatever state of a class
// // turns on
// $('h3').toggleClass('turnBlue')
// // turns off
// // $('h3').toggleClass('turnBlue')
//
//
//
//
//
//
// //                    EVENTS WITH jQuery
//
//
// // click events
//
// // to click an h1 tag...
// $('h1').click(function() {
//   // alert('there be demons in them there hills!')
// })
//
// // to click any item with an li tag...
// $('li').click(function() {
//   // alert('any <li> was clicked!');
// })
//
// // to change text on click...
// $('h3').click(function() {
//   $(this).text("text was changed on click!")
// })
//
// // key press events
// // $('input').eq(0).keypress(function() {
// //   $('h3').toggleClass('turnBlue')
// //   console.log(event); // this will give info on a key that is pressed
// // })
//
// // 13 is the code for the return key
// $('input').eq(0).keypress(function(event) {
//   if (event.which === 13) {
//     $('h3').toggleClass('turnBlue');
//   }
// })
//
// // double click
// $('p').eq(0).on('dblclick', function(event) {
//   $(this).toggleClass('turnRed');
// })
//
// // mouse hover
// $('p').eq(1).on('mouseenter', function(event) {
//   $(this).toggleClass('turnBlue');
// })
//
// // fadeOut animation...
// $('input').eq(1).on('click', function() {
//   $('.turnBlue').fadeOut(3000)
// })
// // can also apply many others as well
// // such as slideUp
//
