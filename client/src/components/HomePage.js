import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

const HomeStyle = styled.div`
background-image: url('https://free4kwallpaper.com/wp-content/uploads/2016/01/Natural-Wonder-Nature-4K-Wallpaper-1440x900.jpg');
margin-top: -1px;

width: 100vw;
height: 90vh;
background-color: palevioletred;
`
class HomePage extends Component {
    state = {
        cities: []
    }
    componentDidMount() {
        this.getAllCities();
    }
    getAllCities = async () => {
        try {
            const response = await axios.get('/api/cities');
            console.log(response.data);
            await this.setState({ cities: response.data });
            return response.data
        }
        catch (err) {
            console.log(err)
            await this.setState({ err: err.message })
            return err.message
        }
    };
    render() {
        const cityData = this.state.cities.map(city => {

            console.log("Rendering Cities", this.state.cities.length)

            return <div key={city.id}>

                <Link to={`/cities/${city.id}`}>{city.name}</Link>
            </div>
            if (this.state.err) {
                return <div>{this.state.err}</div>
            }
        })
        console.log("CITY DATA", cityData)

        return (
            <HomeStyle><div>

                {cityData}
            </div></HomeStyle>

        )
    }
}


export default HomePage;