import react, {useEffect, useState} from "react";
import "./css/style.css";
const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ba16b6c8a8fb623c4a37a73a97086839`
            const response = await fetch(url);
            const resJson = await response.json();
            // onsole.log(resJson);
            setCity(resJson.main);
        };

        fetchApi();
    },[search] )

    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input
                    type="search"
                    value={search}
                    className="inputFeild"
                    onChange={ (event) => { setSearch(event.target.value) } } />
                </div>
            
            {!city ? (
                <p className="errorMsg">No Data Found</p>
            )   : (
                <div>
                <div className="Info">
                <h6 className="location">
                <i className="fas fa-street-view"> </i>{search}
                </h6>
                <h1 className="temp">
                {city.temp} °C
                </h1>
                <h3 className="tempmin_max"> {city.temp_min} °C | {city.temp_min} °C </h3>
            </div>

            <div className= "wave -one"></div>
            <div className= "wave -two"></div>
            <div className = "wave -three"></div>
            </div>
            ) }

            </div>
        </>
    )
} 

export default Tempapp;