import React from 'react'
import FeedCard from './FeedCard'
// import $ from 'jquery'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as List } from 'react-window'
import styled from "styled-components";


const Container = styled.div`
    // border: 1px red solid;
    display: flex;
    flex-direction: column;
    height: 80vh;
`;

// const Header = styled.header`
//     background: #f0f0f0;
// `;
// const width = styled.div`
//   100%
//   `;

const Content = styled.div`
    flex: 1 1 auto;
    padding: 2px;
`;

class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: []
    }
  }

  componentDidMount() {
    this.setState({
      feed: this.props.feed
    })
  }
  render() {
    // console.log(this.props.feed.length)
    return (
      <div className='feed' >
        <div className="container" >
          <Container>
            <Content>
              <AutoSizer>
              {({ width, height }) => (
                        <List
                            itemSize={600}
                            itemCount={this.props.feed.length}
                            width={width}
                            height={height}
                        >
                        {({ index, style }) => (

                          <div style={style}>
                                  <FeedCard feed_card={this.props.feed[index]} handleDelete={this.props.handleDelete} handleSubmit={this.props.handleSubmit} currentUser={this.props.currentUser} />
                                  </div>
                        )}
                        </List>
                    )}
                </AutoSizer>
            </Content>
        </Container>
        </div>
      </div>
        );
      }
    }
    
    
    
    
    
    
    export default Feed;
