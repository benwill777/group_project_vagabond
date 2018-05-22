import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

class NewPost extends Component {
    state = {
        cities: [],
        newPost: {
            title: '',
            description: '',
            post_photo_url: '',
            posted_user_name: '',
        }
    }
    handleChange = (event) => {
        const name = event.target.name
        const newState = { ...this.state }
        newState[name] = event.target.value
        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const transferdata = {
            title: this.state.title,
            description: this.state.description,
            post_photo_url: this.state.post_photo_url,
            posted_user_name: this.state.posted_user_name
        }

        console.log("were running this right")
        await axios.post('/api/cities/:id/posts/', transferdata);
        await this.props.getAllCities()
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input onChange={this.handleChange} type="text" name="title" />
                    </div>
                    <div>
                        <label htmlFor="description ">Description: </label>
                        <input onChange={this.handleChange} type="text" name="description" />
                    </div>
                    <div>
                        <label htmlFor="post_photo_url">photo url: </label>
                        <input onChange={this.handleChange} type="text" name="post_photo_url" />
                    </div>
                    <div>
                        <label htmlFor="posted_user_name">Username: </label>
                        <input onChange={this.handleChange} type="text" name="posted_user_name" />
                    </div>
                    <button>Submit</button>
                </form>

            </div>
        )

    }
}

export default NewPost;