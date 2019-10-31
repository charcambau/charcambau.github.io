var about = document.getElementById('about');
var closeAbout = document.getElementById('crossAbout');
var moreBrief = document.getElementById('moreBrief');

about.addEventListener('click', showAbout);
closeAbout.addEventListener('click', closeTheAbout);
moreBrief.addEventListener('click', showBrief);

function showAbout () {
  document.getElementById('aboutSection').style.transform = 'translateX(0)';
  document.getElementById('aboutSection').style.display = "block";
  document.getElementById('aboutSection').style.opacity = "1";
}

function closeTheAbout () {
  document.getElementById('aboutSection').style.transform = 'translateX(20%)';
  document.getElementById('aboutSection').style.display = 'none';
  document.getElementById('aboutSection').style.opacity = "0";
}

function showBrief () {
  document.getElementById('briefFork').style.display = 'block';
}