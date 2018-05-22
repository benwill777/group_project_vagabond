import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const HomeStyle = styled.div`
background-image: url('https://free4kwallpaper.com/wp-content/uploads/2016/01/Natural-Wonder-Nature-4K-Wallpaper-1440x900.jpg');
margin-top: -1px;

width: 100vw;
height: 100vh;
background-color: palevioletred;
`
class UpdatePost extends Component {
    state = {
        updatedPost: {},
        updatedPost: {
            title: '',
            description: '',
            post_photo_url: '',
            posted_user_name: '',
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const futureState = {
            updatedPost: nextProps.post
        }
        return futureState
    }



    handleChange = (event) => {
        const updatedPost = { ...this.state.updatedPost }
        console.log("updatedPost: " + updatedPost)
        console.log(event.target.name)
        console.log(event.target.value)
        updatedPost[event.target.name] = event.target.value
        this.setState({ updatedPost })
        console.log(this.state.updatedPost)
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

    editPost = (event) => {
        event.preventDefault()
        const postId = this.state.post
        const payload = this.state.post
        console.log("editpost is being called")
        axios.put(`/api/cities/${this.props.cityId}/posts/${postId}`, payload)
    }


    render() {
        return (
            <HomeStyle>
                <div>
                    <form onSubmit={this.editPost}>
                        <div>
                            <label htmlFor="title">Title: </label>
                            <input onChange={this.handleChange} type="text" name="title" value={this.state.updatedPost.title} />
                        </div>
                        <div>
                            <label htmlFor="description ">Description: </label>
                            <input onChange={this.handleChange} type="text" name="description" value={this.state.updatedPost.description} />
                        </div>
                        <div>
                            <label htmlFor="post_photo_url">photo url: </label>
                            <input onChange={this.handleChange} type="text" name="post_photo_url" value={this.state.updatedPost.post_photo_url} />
                        </div>
                        <div>
                            <label htmlFor="posted_user_name">Username: </label>
                            <input onChange={this.handleChange} type="text" name="posted_user_name" value={this.state.updatedPost.posted_user_name} />
                        </div>
                        <button>Submit</button>
                    </form>
                </div></HomeStyle>

        );
    }
}

export default UpdatePost;