import { Nav } from 'react-bootstrap';
import './ButtonCategory.css';

const ButtonCategory = ({ categoryName }) => {
  const handleClick = () => {
    alert(`Seleccionaste la categoria: ${categoryName}`);
  };

  return (
    <Nav.Link onClick={handleClick} className="custom-nav-link">
      {categoryName}
    </Nav.Link>
  );
};

export default ButtonCategory;
