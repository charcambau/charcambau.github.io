var about = document.getElementById('about');
var closeAbout = document.getElementById('crossAbout');

about.addEventListener('click', showAbout);
closeAbout.addEventListener('click', closeTheAbout);

function showAbout () {
  document.getElementById('aboutSection').style.transform = 'translateX(0)';
  document.getElementsByTagName('header').style.overflowX = 'hidden';
}

function closeTheAbout () {
  document.getElementById('aboutSection').style.transform = 'translateX(200%)';
  document.getElementsByTagName('header').style.overflowX = 'hidden';
}