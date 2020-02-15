var about = document.getElementById('about');
var closeAbout = document.getElementById('crossAbout');
var moreBrief = document.getElementById('moreBrief');
var lessBrief = document.getElementById('lessBrief');

about.addEventListener('click', showAbout);
closeAbout.addEventListener('click', closeTheAbout);
moreBrief.addEventListener('click', showBrief);
lessBrief.addEventListener('click', hideBrief);

function showAbout () {
  document.getElementById('aboutSection').style.transform = 'translateX(0)';
  document.getElementById('aboutSection').style.display = "block";
  document.getElementById('aboutSection').style.opacity = "1";
}

function closeTheAbout () {
  document.getElementById('aboutSection').style.transform = 'translateX(20%)';
  document.getElementById('aboutSection').style.display = 'none';
  document.getElementById('aboutSection').style.opacity = "1";
}

function showBrief () {
  document.getElementById('briefFork').style.display = 'block';
  document.getElementById('moreBrief').style.display = 'none';
  document.getElementById('lessBrief').style.display = 'block';
}

function hideBrief () {
  document.getElementById('briefFork').style.display = 'none';
  document.getElementById('moreBrief').style.display = 'block';
  document.getElementById('lessBrief').style.display = 'none';
}