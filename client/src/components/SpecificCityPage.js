import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import NewPost from './NewPost'

class SpecificCityPage extends Component {
    state = {
        cities: {},
        posts: [],
        shiwNewForm: false
    }

    componentDidMount() {
        const cityId = this.props.match.params.id;
        this.fetchCityAndPostData(cityId)
    }

    fetchCityAndPostData = async (cityId) => {
        try {
            const cityResponse = await axios.get(`/api/cities/${cityId}`)
            const postResponse = await axios.get(`/api/cities/${cityId}/posts`)
            await this.setState({
                cities: cityResponse.data,
                posts: postResponse.data
            });
        }
        catch (error) {
            console.log(error)
            await this.setState({ error: error.message })
        }
    }
    createPost = (newPost) => {
        console.log('create new post called')
        axios.post('/api/cities', { newPost })
            .then((res) => {
                console.log(res.data)
                const posts = [this.state.posts]
                posts.push(res.data)
                this.setState({ posts })
            })
    }
    toggleShowNewForm = () => {
        this.setState({ showNewForm: !this.state.showNewForm })
    }
    render() {
        console.log(this.state.posts)

        const postData = this.state.posts.map(post => (

            <div key={post.id}>
                <h3>{post.title}</h3>
                <h4> {post.description}</h4>
                <h4> {post.post_photo_url}</h4>
                <h4> {post.posted_user_name} </h4>
            </div>
        ))

        return (
            <div>
                {postData}
                <button onClick={this.toggleShowNewForm}>Create New Post </button>
                {this.state.showNewForm ? <NewPost getAllPosts={this.getAllPosts} /> : null}
            </div>
        );
    }
}



export default SpecificCityPage