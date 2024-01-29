import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
export default function Home() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainPage />
    </div>
    )
}