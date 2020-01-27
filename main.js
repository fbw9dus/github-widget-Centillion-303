

let repoIndex

class Repo{
    constructor(){
    this.button = document.querySelector('#search')
    this.input = document.querySelector('#inputBox')

    this.button.addEventListener('click', this.getDataFromGithub.bind(this))
    }


    getDataFromGithub(e) {
        e.preventDefault()
        
        let url = `https://api.github.com/users/${this.input.value}/repos`
        

        fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)


          for (var i = 0; i < data.length; i++) {
            var time = data[i].updated_at.slice(0,19).replace("T", " ")
              
              var e = `
                       <tr> 
                        <th>${data[i].name}</th>
                        <th> updated am ${time}</th>
                        <th> <a href="https://github.com/${this.input.value}/${data[i].name}" target="_blank">me</a></td>
                       </tr>
                    `
                  document.querySelector('#table1').insertAdjacentHTML("beforeend", e)
                  
                }
          })

        
        .catch(error => console.error(error))
}
}
new Repo()