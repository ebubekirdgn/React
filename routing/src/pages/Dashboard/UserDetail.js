import React ,{useState,useEffect} from "react";
import { Link, useParams,useLocation } from "react-router-dom";

function UserDetail() {
  let { id } = useParams();
  const location = useLocation();
  const [user, setUser] = useState(location.state);
  

  console.log(location.state);
  
  useEffect(() => {
    if (!user?.id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
    }
  }, [id,user]);
  
  return (
    <div>
      <h2>UserDetail</h2>
      {location.state && <pre>{JSON.stringify(location.state, null, 2)}</pre>}
       <Link to={`/users/${Number(id)+1}`}>Next User</Link>
    </div>
  );
}

export default UserDetail;
