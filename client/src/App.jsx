
import './App.css';
import HomePage from "./pages/HomePage"
function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Salon Booking</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/HomePage" className="hover:text-gray-300">Book Appointment</Link></li>
          
        </ul>
      </div>
    </nav>
  );
}
function App() {

  return (
    <>
      
    </>
  )
}

export default App
