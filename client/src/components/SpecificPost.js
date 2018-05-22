import React, { Component } from 'react';
import axios from 'axios'
import Link from 'react-router-dom'
import styled from 'styled-components'

class SpecificPost extends Component {
    state = {
        post: {}
    }

    componentDidMount = () => {
        this.getSpecificPost()
    }

    getSpecificPost = () => {

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default SpecificPost;