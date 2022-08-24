import NavBar from './components/NavBar'
import Home from './components/Home'
import CustomerList from './components/CustomerList'
import CustomerSearch from './components/CustomerSearch'
import Customer from './components/Customer'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error from './components/Error'
import CustomerAdd from './components/CustomerAdd'
import AppointmentList from './components/AppointmentList'


function App() {
  return (
    <Router >
      <NavBar/>
      <div className='pt-10 grid place-items-center h-screen'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path='*' element={<Error/>} />
        <Route path='/CustomerList' element={<CustomerList/>}/>
        <Route path='/CustomerAdd' element={<CustomerAdd/>}/>
        <Route path='/CustomerDetail' element={<CustomerDetail/>}/>
        <Route path='/AppointmentList' element={<AppointmentList/>}/>
        <Route path='/AddAppointment' element={<AppointmentAdd/>}/>
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;

/*<div className='pt-10 grid place-items-center h-screen'>


 <div className="App">
      <NavBar/>
      <div className='pt-10 grid place-items-center h-screen'>
      <Customer id={4} />
      <CustomerList /> 
      <CustomerSearch />
      
      <Route path='/home' component={Home} />
      <Footer />
      
      
    </div>
    </div>*/

    