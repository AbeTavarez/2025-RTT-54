const parentDiv = document.getElementById('parent');
const childDiv = document.getElementById('child');
const addBtn = document.getElementById('add-btn')


childDiv.addEventListener('click', function(event) {
    console.dir(`Event at Child Div ${event.target}`);
    console.dir(event.shiftKey);

});


parentDiv.addEventListener('click', function(event) {
    console.dir(`Event at Parent Div ${event.target}`);
    event.stopPropagation(); // prevent the event from going up to the body 
});


document.body.addEventListener('click', function(event) {
    console.dir(`Event at Body ${event.target}`);
    document.body.classList.toggle('dark');
});


document.addEventListener('click', function(event) {
    console.dir(`Event at Root Document ${event.target}`);
});