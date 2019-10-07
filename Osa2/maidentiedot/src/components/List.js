import Country from './Country'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const List = ({countries}) => {

    const [show, setShow] = useState('')
    

    

    const handleClick = (country) => {
        console.log(country.name)
        setShow(country.name)


    }
    const handleFilter = (event) => {
        setShow(event.target.value)
        
    
    
      
      }

    const list = () => {

        const list = countries.filter(country => country.name.includes(show))
        const howmany = list.length


        if (howmany > 10) {
            return <p>Too many matches, specify</p>
        } else if (howmany === 1) {

            return list
                .map(country => <Country
                    key={country.name}
                    country={country}
                    
                />)
        } else {
            return list.map(
                country => <div key={country.name}> <ul> {country.name}
                    <button onClick={() => handleClick(country)}> Show</button>
                </ul></div>)
        }
    }

    return (

        <div>

            <form>
                Find countries <input value={show}
                    onChange={handleFilter}

                />
            </form>
            <div>  {list(countries)}</div>



        </div>


    )
}

export default List