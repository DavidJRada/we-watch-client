import React from 'react'
import FeedCard from './FeedCard'
// import $ from 'jquery'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList as List } from 'react-window'
import styled, { keyframes } from "styled-components";


// const Row = ({ index, style }) => (
//   <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
//     Row {index}
//   </div>
// )

// const Example = () => (
//   <List
//     className="List"
//     height={150}
//     itemCount={this.props.feed.length}
//     itemSize={35}
//     width={300}
//   >
//     {Row}
//   </List>
// )


// const wibbly = keyframes`
//     0% { height: 300px; }
//     50% { height: 500px; }
//     100% { height: 300px; }
// `;

const Container = styled.div`
    // border: 1px red solid;
    display: flex;
    flex-direction: column;
    height: 80vh;
`;

const Header = styled.header`
    background: #f0f0f0;
`;
const width = styled.div`
  100%
  `;

const Content = styled.div`
    flex: 1 1 auto;
    padding: 2px;
`;

class Feed extends React.Component {
  // const { feed, handleDelete, handleUpdate, currentUser } = props
  // console.log(feed)
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
                            itemSize={400}
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
            {/* <AutoSizer>
            {
              ({ width, height }) => {
                return <List
                  rowCount={this.props.feed.length}
                  width={width}
                  height={height}
                  rowHeight={50}
                  rowRenderer={this.rowRenderer}
                />
              }
            }
          </AutoSizer> */}
            {/* {feed.map(feed_card => <div className="card">
          <FeedCard key={feed_card.id} feed_card={feed_card} handleDelete={handleDelete} handleUpdate={handleUpdate} currentUser={currentUser} />
        </div>)
        } */}
        </div>
      </div>
        );
      }
    }
    
    
    
    
    
    
    export default Feed;
