
import './App.css';
import Navbar from './components/Navbar';
import crags from './data';
import Card from './components/Card';
 
function App() {
const cards = crags.map(item => {
  return (
    <Card
    key={item.id}
    item={item}
    />
  )
})
  return (
    <>
    <Navbar/>
    <div className='container'>
    {cards}
    </div>
    </>
  );
}

export default App;
