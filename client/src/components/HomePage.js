import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'


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
            <div>
                <h1>All Cities</h1>
                {cityData}
            </div>

        )
    }
}


export default HomePage;