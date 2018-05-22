import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
        this.setState({ post });
    }

    getSpecificPost = () => {
        const postId = this.props.match.params.postId;
        const cityId = this.props.match.params.cityId;
        console.log("postID:", postId)
        axios.get(`/api/cities/${cityId}/posts/${postId}`)
            .then((res) => {
                console.log("coming from getSpecificPost", res.data)
                this.setState({ post: res.data })
            })


    }
    removePost = () => {
        const postId = this.props.match.params.postId;
        const cityId = this.props.match.params.cityId;
        axios.delete(`/api/cities/${cityId}/posts/${postId}`)
            .then(() => {
                this.history.push("/")
            })
            .catch(err => {
                console.log(err);
            });
    };
    editPost = (event) => {
        event.preventDefault()
        const postId = this.state.post.id
        const payload = this.state.post
        console.log("editpost is being called")
        axios.put(`/api/cities/${this.props.cityId}/posts/${postId}`, payload)
    }

    render() {
        return (
            <div>
                <h1>Specfic Post</h1>
                <Link to='/'><button>Go Home</button></Link>
                <button onClick={this.removePost}>Delete Post</button>
                <h3>Name of Post: {this.state.post.title}</h3>
                <h3>Description: {this.state.post.description}</h3>
                <h3>Photo : {this.state.post.post_photo_url}</h3>
                <h3>Username: {this.state.post.posted_user_name}</h3>

                <button onClick={this.toggleShowUpdate}>
                    Update {this.state.post.name}
                </button></div>



        );
    };
}


export default SpecificPost;