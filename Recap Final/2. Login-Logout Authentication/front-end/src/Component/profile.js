import axios from 'axios';
import { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom' ;
import jwt_decode from 'jwt-decode';



export default function Profile() {
    
    let navigate = useNavigate();
    
    const [cart, setCart] = useState([]);
    const [username, setUsername] = useState(null);
   
   
    useEffect(() => {
      const token = localStorage.getItem('token');

      //  decode token
      const decoded = jwt_decode(token);
      console.log(decoded);

      // call username by using useState 
      const username = decoded.username; 
      setUsername(username);
      console.log(username);
   
      if (token) {
        axios.get('/api/profile', {
            headers: {
              Authorization: `Bearer ${token}`, // JWT in Authorization header
            },
          })
          .then((res) => {
            setCart(res.data);
          })
          .catch((err) => {
              if (err.response.status === 401) {
                // token expired - remove and redirect to login
                localStorage.removeItem('token');
                navigate('/login');
              }
          });
      } else {
        navigate('/login');
      }
    }, []);


    return (
      <>
        <div style={{textAlign: 'center'}}>
          <h2 className = "middle">Hey {username}, welcome to your page!</h2>
          <h1 style={{color: 'red'}}>My profile page</h1>
          <h3>My shopping cart items</h3>
          {console.log(typeof cart)}.
          {cart && cart.map((c) => <p>{c.item}</p>)}
        </div>  
      </>
    );
  }
