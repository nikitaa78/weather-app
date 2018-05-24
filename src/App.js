import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Clear from "./components/Clear"

const API_KEY = "d5eb815a1067132eb8d7c2eeb7d86a02";


class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&mode=json&appid=" + API_KEY + "&units=metric");
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a city and country."
      });
    }
  }


  cancelCourse = () => { 
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    });
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>

                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                    <div className = "row">
                      <div className="col-xs-8 weather-containter">
                        <Weather 
                          temperature={this.state.temperature}
                          city={this.state.city}
                          country={this.state.country}
                          humidity={this.state.humidity}
                          description={this.state.description}
                          error={this.state.error}
                        />
                      </div>

                      <div className="col-xs-4 clear-container">
                        <Clear cancelCourse={this.cancelCourse}/> 
                      </div>
                    </div>
                <div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}


        

export default App;