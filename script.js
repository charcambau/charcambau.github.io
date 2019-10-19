var about = document.getElementById('about');
var closeAbout = document.getElementById('crossAbout');

about.addEventListener('click', showAbout);
closeAbout.addEventListener('click', closeTheAbout);

function showAbout () {
  document.getElementById('aboutSection').style.transform = 'translateX(0)';
  document.getElementById('aboutSection').style.display = "block";
  document.getElementById('aboutSection').style.opacity = "1";
}

function closeTheAbout () {
  document.getElementById('aboutSection').style.transform = 'translateX(50%)';
  document.getElementById('aboutSection').style.display = 'none';
  document.getElementById('aboutSection').style.opacity = "0";
}