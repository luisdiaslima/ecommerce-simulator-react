import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';
import { Container, Cards } from './style';
import Logo from '../../img/passaro.svg';

export default function Home() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/product');
      setProducts(response.data);
    }
    getData();
  }, []);

  return (
    <Container>
      <header>
        <img src={Logo} />
        <Link to="/">
          <span />
          Voltar
        </Link>
      </header>

      <Cards>
        {products.map((product, index) => (
          <div key={product.id}>
            <img src={product.productImage} />
            <h1>{product.name}</h1>
            <h3>{product.type}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </Cards>
    </Container>
  );
}
