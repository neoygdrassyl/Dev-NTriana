
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css'
import './styles.weschools.css'
import './styles.css'
import Page from './page';
import Header from './header';


function App() {
  return (
    <div className="App">
      <header className='App-header bg-secondary' style={{ position: 'fixed', top: 0, left: 0, zIndex:2, width: '100%'}}>
        <Header />
      </header>
      <div>
        <Page />
      </div>
    </div>
  );
}

export default App;
