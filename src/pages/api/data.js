
fetch('http://vegadmin.cittaserver.com/api/landingslides')
  .then((res) => res.json())
  .then((data) => console.log(data));
