// anime api that shows photos of anime cat people photos

document.querySelector('button').addEventListener('click', Rando)

function Rando(){

fetch("https://api.catboys.com/img") 
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('img').src = data.url
      

     
     
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}
