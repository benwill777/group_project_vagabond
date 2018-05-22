import React, { Component } from 'react';
import axios from 'axios'

class UpdatePost extends Component {
    state = {
        updatedPost: {
            title: '',
            description: '',
            post_photo_url: '',
            posted_user_name: '',
        }
    }
    handleChange = (event) => {
        const title = event.target.title
        const updatedPost = { ...this.state.updatedPost }
        updatedPost[title] = event.target.title
        this.setState({ updatedPost })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const transferdata = {
            title: this.state.updatedPost.title,
            description: this.state.updatedPost.description,
            post_photo_url: this.state.updatedPost.post_photo_url,
            posted_user_name: this.state.updatedPost.posted_user_name,
            city_id: this.props.cityId
        }

        console.log("From submit function transferdata: ", transferdata)
        await axios.post(`/api/cities/${this.props.cityId}/posts/`, transferdata);
        this.props.fetchCityAndPostData(this.props.cityId)
        this.props.toggleShowNewForm()
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

        );
    }
}

export default UpdatePost;