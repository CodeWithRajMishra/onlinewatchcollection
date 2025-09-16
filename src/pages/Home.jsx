import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/ban1.jpeg";
import ban2 from "../images/ban2.webp";
import ban3 from "../images/ban3.jpeg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import w1 from "../images/w1.jpg";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addTocart } from '../cartSlice';


const Home=()=>{
const [mydata, setMydata] = useState([]);
const dispatch = useDispatch();

const loadData=async()=>{
    let api=`${import.meta.env.VITE_API_URL}/products`;
  
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
}

useEffect(()=>{
  loadData();
}, [])


const ans= mydata.map((key)=>{
   return(
    <>
        <Card style={{ width: '18rem', margin:"10px" }}>
      <Card.Img variant="top" src={key.images}  height="200" />
      <Card.Body>
        <Card.Title>{key.brand}</Card.Title>
        <Card.Text>
           {key.name}
           <br />
           <span style={{color:"red"}}>Category : {key.category}</span> 
           <br />
           <span style={{color:"navy" , fontWeight:"bold"}}>Price : {key.price}</span> 
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addTocart({id:key.id, name:key.name, brand:key.brand, category:key.category, price:key.price, images:key.images, qnty:1}))}}>Add To Cart</Button>
      </Card.Body>
    </Card>

    </>
   )
})


    return(
        <>
     <Carousel>
      <Carousel.Item>
        <img src={ban1} width="100%" height="300" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban2} width="100%" height="300" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban3} width="100%" height="300" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <h1> Out Top Collections</h1>

    <div id='topwacthes' style={{width:"90%", margin:"auto"}}>
      
        {ans}
 
    </div>
        </>
    )
}

export default Home;