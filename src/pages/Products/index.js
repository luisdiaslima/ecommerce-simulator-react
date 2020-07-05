import React from 'react';
import { Link } from 'react-router-dom';
import { set } from 'lodash';
import axios from '../../services/axios';
import { Container, Cards } from './style';
import LoaderHead from '../../components/Loader';

import Logo from '../../img/passaro.svg';

export default function Home() {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await axios.get('/product');
      setProducts(response.data);
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <Container>
      <LoaderHead isLoading={isLoading} />

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
