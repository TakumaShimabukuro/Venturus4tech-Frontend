import React, { useCallback, useEffect, useState } from "react"

import Header from "../../components/header/Header"
import Post from "../../components/post/Post"
import { Container } from "@material-ui/core"

import Upload from "../../components/upload/Upload"

import "./Timeline.css"

import { getPosts } from "../../services/post"

const Timeline = () => {

    const [posts, setPosts] = useState([])

    const fetchPosts = useCallback(async () => {
        const response = await getPosts();
        setPosts(response.data)
    }, []);

    useEffect(() => {
        fetchPosts()
    }, [fetchPosts])

    return (
        <React.Fragment>
            <Header />
            <Container className="timeline">
                <Upload />
                {
                    posts.map(
                        post => {
                            return <Post key={post._id} post={post} />
                        }
                    )
                }
            </Container>
        </React.Fragment>
    )
}
export default Timeline