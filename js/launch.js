const main1 = document.getElementById("main");
const div1 = document.getElementById("canvases");
const div2 = document.getElementById("compas");

function launch(){
    main1.style.display = 'none';
    div1.style.display = 'block';
    div2.style.display = 'block';
}
function unlaunch(){
    main1.style.display = 'block';
    div1.style.display = 'none';
    div2.style.display = 'none';
}