import flowers from '../Json/FlowersJson';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

function Flowers({ route, navigation }) {
  // const { cart, setCart } = route.params;

  return (
    <>
      {/* <Header /> */}
      <div className='cards'>
      <Card.Group itemsPerRow={4}>
        {flowers.map((data, index) => (
          <Card className='card' key={data.id}>
            <Link to='/Home/single-flower' onClick={() => {
              localStorage.setItem("singleflower", JSON.stringify(data));
              localStorage.setItem("flowerindex", JSON.stringify(index));
            }}
              style={{ textDecoration: "none", color: "black" }}>
              <Image className='card-image' src={data.img} />
              <Card.Content className='card-text'>
                <Card.Header className='card-name'>{data.name}</Card.Header>
                <Card.Header className='card-price'>Rs. {data.price}.00</Card.Header>
              </Card.Content>
            </Link>
          </Card>
        ))}
        </Card.Group>
      </div>
    </>
  );
}

export default Flowers;