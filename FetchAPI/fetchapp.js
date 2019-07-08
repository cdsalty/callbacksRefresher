document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('fetchTest.txt').then(function(res) {
    console.log(res);
  });
}