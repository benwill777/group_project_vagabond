import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const HomeStyle = styled.div`
background-image: url('https://free4kwallpaper.com/wp-content/uploads/2016/01/Natural-Wonder-Nature-4K-Wallpaper-1440x900.jpg');
margin-top: -1px;

width: 100vw;
height: 100vh;
background-color: palevioletred;
`
class NewPost extends Component {
    state = {
        newPost: {
            title: '',
            description: '',
            post_photo_url: '',
            posted_user_name: '',
        }
    }
    handleChange = (event) => {
        const name = event.target.name
        const newPost = { ...this.state.newPost }
        newPost[name] = event.target.value
        this.setState({ newPost })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const transferdata = {
            title: this.state.newPost.title,
            description: this.state.newPost.description,
            post_photo_url: this.state.newPost.post_photo_url,
            posted_user_name: this.state.newPost.posted_user_name,
            city_id: this.props.cityId
        }

        console.log("From submit function transferdata: ", transferdata)
        await axios.post(`/api/cities/${this.props.cityId}/posts/`, transferdata);
        this.props.fetchCityAndPostData(this.props.cityId)
        this.props.toggleShowNewForm()
    }

    render() {
        return (
            <HomeStyle><div>
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
            </div></HomeStyle>
        )

    }
}

export default NewPost;