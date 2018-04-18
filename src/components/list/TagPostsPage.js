import React from 'react';
import PostApi from "../../services/PostApi";
import PostCardList from './PostCardList';
import { Layout } from 'antd';
import PopitHeader from "../PopitHeader";

import '../popit.css';

const { Content, Footer } = Layout;

const MAX_NUM_POSTS = 10;

export default class TagPostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.page = 0;
    this.tag = this.props.match.params.tag;
  }

  componentWillMount() {
    this.getTagPosts();
  }

  getTagPosts = () => {
    PostApi.getPostsByTag(this.tag, [], this.page, MAX_NUM_POSTS)
      .then(json => {
        if (json.success !== true) {
          alert("Error:" + json.message);
          return;
        }

        const posts = json.data;
        if (posts.length == 0) {
          this.page--;
          alert("마지막 글 입니다.");
          return;
        }

        this.setState({
          posts: posts,
        });
      })
      .catch(error => {
        alert("Error:" + error);
      });
  };


  render() {
    return (
      <Layout className="layout" hasSider={false} style={{background: '#ffffff'}}>
        <PopitHeader />
        <Content style={{padding: '0 10px', maxWidth: 1360, margin: 'auto auto'}}>
          <div>
            <div>Tag Posts: {this.props.match.params.tag}</div>
            <PostCardList posts={this.state.posts}/>
          </div>
        </Content>
      </Layout>
    )
  }
}