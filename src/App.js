import './App.css';
import{useState, useEffect} from 'react';
import Coins from './components/Coins.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const API_url = 'https://api.coinstats.app/public/v1/coins?skip=0';

function App() {
  const [coin, setCoin] = useState([]);
  const [searchCoin, setSearchCoin] = useState('');
  
  const searchForCoin = async () =>{
    const response = await fetch(`${API_url}`)
    const data = await response.json();
    setCoin(data.coins);
  }
  useEffect(() => {
    searchForCoin()
  })
  const filteredList = coin.filter((coin) => {
    return coin.name.toLowerCase().includes(searchCoin.toLowerCase());
  })
  return (
    <div className="App">
      <Container>
      <Row>
        <Col md = "12">
          <h1 className='Welcome'>Welcome to CryptoWatch</h1>
        </Col>
      </Row>
      <div className='search-section'>
          <input className = 'searchCoin'placeholder='Search for coins'
          value = {searchCoin}
          onInput ={(e)=> setSearchCoin(e.target.value)}/>
          <h1 id = 'searchTerm'></h1>
      </div>
      <div>
          {filteredList.map((coin)=>{
           return <Coins name = {coin.name} price = {coin.price} priceChanged = {coin.priceChange1d} icon = {coin.icon} symbol = {coin.symbol} link = {coin.websiteUrl}/>
          })}
      </div>
      </Container>
    </div>
  );
}

export default App;

