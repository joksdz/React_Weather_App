import React, { useEffect, useRef, useState } from "react";
import Axios  from "axios";
import './App.css'

function App(){
    //make the data,city ,input value variables  
    const [newData , setNewData ] = useState(null);
    const [city , setCity] = useState("");
    const [inputValue, setInputValue] = useState('');
  //use effect only runs  when city chenges 
    useEffect(()=>{
       
//axios fethces the data from the api of openweather using the city and the returned value is in metric
        Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e22c6eab2b32c01d528b9764c2620e28&units=metric`).then((res) => { setNewData(res.data) })
    },[city])
    

  // Event handler for the form submission
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    //this sets the city name to the whatever the input was so axios stars fetching 
    setCity(inputValue)

   
  };

  // Event handler for the onChange event
  const handleInputChange = (event) => {
    // Update the state with the new input value
    setInputValue(event.target.value);
  };
 
  ;
  

   
    return (<div className="App">

        


   
    
    
     {/* Form with onSubmit event */}
     <form onSubmit={handleFormSubmit}>
        <h1 className="h1">Please enter the name of a City</h1>
       {/* Input element with onChange event */}
       <input
         type="text"
         value={inputValue}
         onChange={handleInputChange}
         placeholder="Type something..."
       />

       {/* Submit button */}
       <section className="butt">
        
       <button type="submit">Submit</button>

       </section>

     </form>  
       <section className="stats">
        <table>
          <tr>

          <td>temp: {Math.round(newData?.main.temp) }C</td>
          <td>feels like: {Math.round(newData?.main.feels_like)}C</td>
          </tr>
          <tr>

          <td>pressure: {newData?.main.pressure}hPa</td>
          <td>humidity: {newData?.main.humidity}%</td>
          </tr>
          <tr>
            
            <td>visibility: {newData?.visibility}m</td>
            <td>wind speed: {newData?.wind.speed}m/s</td>
            </tr>


        </table>
       </section>


   
   </div>)
     
}
export default App