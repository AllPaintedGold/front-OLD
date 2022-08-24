import Axios from 'axios'
import {useEffect, useState} from 'react'
import {useSearchParams} from 'react-router-dom'


const CustomerAdd = () =>
{ 

    const [searchParams, setSearchParams] = useSearchParams()
    const customerId = searchParams.get('customerId')

    const [data, setData] = useState([])

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')
    
    const postData = (e) => {
        e.preventDefault()
        Axios.post(`${process.env.REACT_APP_API_BASE_URL}/Appointment/AddAppointment`,{
        title,
        description,
        time,
        customerId,
        }).then(res => console.log('Posting Data', res)).catch(err => console.log(err))
    }

    return (
      <div className=" bg-gray-800 rounded-md p-3 m-3 border border-gray-700 shadow-lg w-fit text-gray-300">
      <form class="w-full max-w-sm" id="form" >
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="fname">
            Vorname
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
          text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
          id="firstName" type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="lname">
           Nachname
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
          text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
          id="lastName" type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </div>
      </div>
      
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="birthDate">
            Geburtsdatum
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
          text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
          id="birthDate" type="datetime-local" name="birthDate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)}/>
        </div>
      </div>
      
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="street">
            Straße
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
          text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
          id="streetName" type="text" name="streetName" value={streetName} onChange={(e) => setStreetName(e.target.value)}/>
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="streetnumber">
            Hausnummer
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
          text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
          id="streetNumber" type="number" name="streetNumber" value={streetNumber} onChange={(e) => setStreetNumber(e.target.value)}/>
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="zipCode">
            Postleitzahl
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
          text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
          id="zipCode" type="number" name="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
        </div>
      </div>

      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="city">
            Stadt
          </label>
        </div>
        <div class="md:w-2/3">
          <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 
          text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" 
          id="city" type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)}/>
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button onClick={postData} className="bg-zinc-700 hover:bg-zinc-500
          shadow focus:shadow-outline 
          focus:outline-none text-gray-300 hover:cursor-pointer font-bold py-2 px-4 rounded" 
          >Hinzufügen</button>
        </div>
      </div>
    </form>
    </div>
    )
}

export default CustomerAdd;

