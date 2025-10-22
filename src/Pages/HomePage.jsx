import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className='text-3xl font-bold'>React Learning Dashboard</h1>
      <div className="card-container">
        <Link to="/basics" className="card">
          <h2 className='font-bold'>Basics</h2>
          <p>Functional and Class components</p>
        </Link>
        <Link to="/props" className="card">
          <h2 className='font-bold'>Props</h2>
          <p>Passing data and children</p>
        </Link>
        <Link to="/state" className="card">
          <h2 className='font-bold'>State & Destructuring</h2>
          <p>Managing state & destructuring props</p>
        </Link>
        <Link to="/event" className="card">
          <h2 className='font-bold'>Event Handling</h2>
          <p>Click events for functional & class components</p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;