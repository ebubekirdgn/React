import React,{useEffect,useState} from 'react'
import axios from "axios"

function Users() {

  const [users,setUsers] = useState([]);
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(true);
  
  
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => response.json())
  //   .then((data) => setUsers(data))
  //   .finally(() => setLoading(false))
  // },[]);

  // useEffect(() => {
  //   axios("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => setUsers(response.data))
  //   .finally(() => setLoading(false))
  // },[]);

  useEffect(() => {
    /// -------------------- 1 . solution---------------------------------
    
    // axios("https://jsonplaceholder.typicode.com/users")
    // .then ((res) => {
    //   setUsers(res.data);

    //   axios(`https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`)
    //   .then((res) => setPosts(res.data));
    
    // })
    // .finally(() => setLoading(false));

  /// -------------------- 2 . solution---------------------------------
    const getData = async () => {
     
      try {
        const {data : users} = await  axios("https://jsonplaceholder.typicode.com/users");
        const {data:posts} = await  axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);
        setLoading(false)
        setUsers(users);
        setPosts(posts);
      } catch (error) {
        console.log("error",error)
      }
    };
    getData();
     /// -------------------- 3 . solution---------------------------------

     (async () => {
     
      try {
        const {data : users} = await  axios("https://jsonplaceholder.typicode.com/users");
        const {data:posts} = await  axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`);
        setLoading(false)
        setUsers(users);
        setPosts(posts);
      } catch (error) {
        console.log("error",error)
      }
    })();
  },[]);

 
  
 
   
    return (
    <div>
      <h2>Users</h2>
       <hr/>
      {loading && <div> YÜKLENİYOR... </div>}
      <ul>
        {users.map((user) => (<li key= {user.id}>{user.username}</li>))}
      </ul>  
        
      <h2>Posts</h2>
      <hr/>
      <ul>{posts.map((post) => (<li key= {post.id}>{post.title}</li>))}
      </ul>  
    </div>
  )
}

export default Users