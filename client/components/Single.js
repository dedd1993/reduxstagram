import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
    render() {
        const { postId } = this.props.params
        const i = this.props.posts.findIndex((posts) => posts.code ===  postId);
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || [];

        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments}></Comments>
            </div>
        )
    }
});

export default Single;