document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.querySelector('form');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const credentials = new FormData(this);
    fetch('/unikee/public/api/login', {
                method: 'post',
                body: credentials
          }).then( response =>  {
            if (response.status === 200) {
              alert("login reussi");
            } else if (response.status === 401) {
              alert("mauvais identifiants");
            } else {
              alert('erreur serveur');
            }
          })
    })
})
