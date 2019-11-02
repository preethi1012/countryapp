import React from 'react';
import axios from 'axios';


const App = () => {
  const [list, setlist] = React.useState([])
  

  React.useEffect(() => {

    axios.get("https://restcountries.eu/rest/v2/all").then(result => {
      setlist(result.data)
      console.log(result.data)
    })
  }, [])
  
  const search=()=>{
    let data=document.getElementById("content").value
    console.log(data)
    axios.get("https://restcountries.eu/rest/v2/name/"+data).then(result => {
      setlist(result.data)
      console.log(result.data)
    })

  }

  return (
    <div>
      <input type="text"  id="content"onChange={search}></input>
      <button onClick={search}>search</button>
      <table className="table">
        <thead>
        <tr><th>CountryName</th><th>Region</th><th>Population</th><th>Capital</th></tr></thead>
        {
          list.map((i => {
            return (

              <tbody key={i.id}>
                <tr><td>{i.name}</td>
                  <td>{i.region}</td>
                  <td>{i.population}</td>
                  <td>{i.capital}</td>
                </tr>
              </tbody>

            )
          }))
        }
      </table>
    </div>
  )

}

export default App;
