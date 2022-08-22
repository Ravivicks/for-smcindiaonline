import './App.css';
import ResponsiveAppBar from './Components/Main';
import SignupForm from './Components/common/SignupForm';
import LoginForm from './Components/common/LoginForm'
import Welcome from './Components/common/Welcome';
import { Routes, Route } from 'react-router-dom';
import PrivateComponent from './Components/PrivateComponent';
import Test from './Components/test/Test';


function App() {
  return (
    <>
      <ResponsiveAppBar />
    
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="signup" element={<SignupForm />} />
    
      <Route element={<PrivateComponent />}>
      <Route path="addtest" element={<Test />} />
      </Route>
      
    </Routes>
    </>
  );
}

export default App;
