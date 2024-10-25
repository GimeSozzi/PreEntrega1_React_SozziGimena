import { Container } from 'react-bootstrap';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <Container className="custom-container">
      <h6>{greeting}</h6>
    </Container>
  );
};

export default ItemListContainer;
