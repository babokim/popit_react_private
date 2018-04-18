import React from 'react';

import PostCard from './PostCard';

export default class PostCardList extends React.Component {

  render() {
    const { posts }  = this.props;

    const postCards = posts.map((post) => {
      return (<PostCard key={post.id} post={post}></PostCard>)
    });

    return(
      <div>
        {postCards}
      </div>
    )
  }
}