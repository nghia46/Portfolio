import './App.css';
import MyHeader from './MyHeader';
import MyCard from './MyCard';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const genCard = () => {
  const cards = []
  for (let i = 1; i <= 20; i++) {
    cards.push(
      <Col xs={12} md={6} lg={3} className="center-content">
        <MyCard
          imgSrc="https://placehold.co/286x180"
          title={`My project ${i}`}
          text="this is my good project"
          buttonText="View"
        />
      </Col>
    )
  }
  return cards
}

function App() {
  return (
    <>
      <MyHeader />
      <h1 className='center-content'>This Is My App Heading</h1>
      <SearchBar />
      <Container>
        <Row>
          {genCard()}
        </Row>
      </Container>
    </>
  );
}

export default App;
