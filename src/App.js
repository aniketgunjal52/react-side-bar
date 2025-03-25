import './App.css';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import FileManager from './pages/FileManager';
import Messages from './pages/Messages';
import Order from './pages/Order';
import Saved from './pages/Saved';
import Setting from './pages/Setting';
import Users from './pages/Users';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <Sidebar>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/filemanager" element={<FileManager />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/users" element={<Users />} />

        </Routes>
      </Router>
      </Sidebar>
    </div>
  );
}

export default App;
