import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div>
      <h1>Home</h1>
      <img src="http://localhost:8000/public-1639098648507-1.1.png" alt="test" className="w-40 h-40 rounded-full" />
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Home;