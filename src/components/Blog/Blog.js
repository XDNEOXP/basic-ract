import React, { useState, useEffect, useCallback } from 'react';
import Button from '../Button/Button';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [activePageNumber, setActivePageNumber] = useState(1);
  const loadPosts = async () => {
    setLoading(true);
    const responsePosts = await fetch('https://run.mocky.io/v3/37d80d7d-e173-44f0-b5e5-7677638620d6');
    const posts = await responsePosts.json();
    setPosts(posts);
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    setPageCount(calculatePageCounts());
    console.log(pageCount);
  }, [posts]);

  const calculatePageCounts = () => {
    if (posts.length % 3 > 0) {
      return parseInt(posts.length / 3 + 1);
    }

    return parseInt(posts.length / 3);
  };

  const handelClickOnPage = useCallback((pageNumber) => {
    setActivePageNumber(pageNumber);
  }, []);

  return (
    <div className="Blog">
      <h1>Posts</h1>
      {loading && <div>Loading...</div>}
      {posts.length > 0
            && (
            <ul>
              {posts.slice(3 * (activePageNumber - 1), 3 * activePageNumber).map((post) => (
                <li className="blogItem" key={`post-${post.id}`}>
                  <h3>{ post.title }</h3>
                  <p>{ post.content }</p>
                </li>
              ))}
            </ul>
            )}
      <hr />
      <div>
        <ul className="Pagination">
          {new Array(pageCount).fill(0).map((item, index) => (
            <li className={activePageNumber === index + 1 ? 'active' : ''}>
              <Button added="btn" handelClick={() => handelClickOnPage(index + 1)}>{index + 1}</Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// class Blog extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             clicked:      0,
//             didMount:     false,
//             updateNumber: 0,
//         }
//     }

//     handelClick = () => {
//         this.setState({
//             clicked: this.state.clicked+1,
//         })
//         console.log(this.state.clicked)
//     }

//     componentDidMount(){
//         setTimeout( () => {
//             this.setState({
//                 didMount: true,
//             })
//         },1000)
//     }

//     componentDidUpdate(prevProps, prevState){
//         const {updateNumber} = this.state
//         if(updateNumber === 0){
//             this.setState({
//                 updateNumber: this.state.updateNumber+1
//             })
//         }
//     }

//     componentWillUnmount(){
//         console.log('Unmount')
//     }

//     render() {
//         const { clicked, didMount, updateNumber } = this.state
//         return (
//             <div>
//             <h1>Blog Class</h1>
//             {clicked}
//             <button onClick={this.handelClick}>Click</button>
//             <h1>Component Did Mount</h1>
//             <p>{didMount ? 'Yes' : 'No'}</p>
//             <h1>Component Did Update</h1>
//             <p>{ updateNumber }</p>
//             </div>
//         )
//     }
// }

export default Blog;
