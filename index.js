

function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

//plotly equation input
var equationInput = document.getElementById("equation-box");
equationInput.addEventListener('input', function(event) {
    document.getElementById("Debug-Text").textContent = equationInput.value;
});



//plotly grapth
TESTER = document.getElementById('graph-container');
    Plotly.newPlot( TESTER, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }], {
    margin: { t: 0 } } );