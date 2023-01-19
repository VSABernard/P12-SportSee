import './App.css';
import HeaderNav from '../src/components/HeaderNav/HeaderNav'
import AsideNav from './components/AsideNAv/AsideNav';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <main className='main'>
        <AsideNav />
      </main>
    </div>
  )
}

export default App;
