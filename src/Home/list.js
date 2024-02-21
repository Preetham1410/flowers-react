import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import flowers from '../Json/FlowersJson';
import gifts from '../Json/GiftsJson';

function List(props) {

    // const filteredData = gifts.filter((el) => el.Name.toLowerCase().includes(props.input));
    const filteredData2 = flowers.filter((el) => el.name.toLowerCase().includes(props.input));

    return (
        <>
            <div className='cards'>
                {/* {filteredData.map((data, index) => (
                    <Card className='card' key={data.id}>
                        <Link to='/Home/single-gift' onClick={() => {
                            localStorage.setItem("singlegift", JSON.stringify(data));
                            localStorage.setItem("giftindex", JSON.stringify(index));
                        }}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <Image className='card-image' src={data.img} />
                            <Card.Content className='card-text'>
                                <Card.Header className='card-name'>{data.Name}</Card.Header>
                                <Card.Header className='card-price'>Rs. {data.price}.00</Card.Header>
                            </Card.Content>
                        </Link>
                    </Card>
                ))} */}
                {filteredData2.map((data, index) => (
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
            </div>
        </>
    )
}

export default List;