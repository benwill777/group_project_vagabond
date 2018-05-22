import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import UpdatePosts from './UpdatePosts'

const HomeStyle = styled.div`
background-image: url('https://free4kwallpaper.com/wp-content/uploads/2016/01/Natural-Wonder-Nature-4K-Wallpaper-1440x900.jpg');
margin-top: -1px;

width: 100vw;
height: 100vh;
background-color: palevioletred;
`
class SpecificPost extends Component {
    state = {
        post: {},
        showUpdateForm: false
    }
    toggleShowUpdateForm = () => {
        this.setState({ showUpdateForm: !this.state.showUpdateForm })
    }

    componentDidMount = () => {
        this.getSpecificPost()
    }
    handleChange = (event) => {
        const post = { ...this.state.post }
        post[event.target.title] = event.target.value
        this.setState({ post })
    }

    getSpecificPost = () => {
        const postId = this.props.match.params.postId
        const cityId = this.props.match.params.cityId
        console.log("postID:", postId)
        axios.get(`/api/cities/${cityId}/posts/${postId}`)
            .then((res) => {
                console.log("coming from getSpecificPost", res.data)
                this.setState({ post: res.data })
            })


    }
    removePost = () => {
        const postId = this.props.match.params.postId
        const cityId = this.props.match.params.cityId
        axios.delete(`/api/cities/${cityId}/posts/${postId}`)
            .then(() => {
                this.history.push("/")
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        return (
            <HomeStyle> <div>
                <h1>Specfic Post</h1>
                <Link to='/'><button>Go Home</button></Link>
                <Link to='/'><button onClick={this.removePost}>Delete Post</button></Link>
                <h3>Name of Post: {this.state.post.title}</h3>
                <h3>Description: {this.state.post.description}</h3>
                <h3>Photo : {this.state.post.post_photo_url}</h3>
                <h3>Username: {this.state.post.posted_user_name}</h3>

                <button onClick={this.toggleShowUpdateForm}>
                    Update {this.state.post.name}
                </button>
                {this.state.showUpdateForm ? <UpdatePosts post={this.state.post} /> : null}
            </div ></HomeStyle>
        )
    }
}


export default SpecificPost;