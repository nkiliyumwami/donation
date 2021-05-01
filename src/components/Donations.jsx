import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  Badge
} from "reactstrap";
import ReadMore from '../forms/ReadMore';
import HandleThumbs from './HandleThumbs';


function Donations(props) {
  
  return (
    <div className='container'>
      {props.donations.map((donation) => (
        <Row key={donation.id}>
          <Col sm='9'>
            <Card className='container'>
              <CardImg
                className='mt-2'
                top
                width='100%'
                src={donation.image}
                alt='card image'
                style={{ width: "25%", height: "25%" }}
              />
              <CardBody>
                <CardTitle tag='h3'>{donation.name}</CardTitle>
                <CardSubtitle tag='h6' className='mt-1'>
                  {donation.category}
                </CardSubtitle>
                <CardSubtitle tag='h6' className='mt-1'>
                  {donation.condition}
                </CardSubtitle>
                <CardText tag='p'>{donation.location}</CardText>
                <ReadMore item={donation.description} name={donation.name} />
                <Button  className='m-1' outline>
                  <Badge onClick={()=> donation.like++ } color='success' pill className='mt-1'>
                    <i className='fa fa-thumbs-up'></i> {donation.likes}
                  </Badge>
                </Button>
                <Button className='m-1' outline>
                  <Badge color='danger' pill className='mt-1'>
                    <i className='fa fa-thumbs-down'></i> {donation.dislikes}
                  </Badge>
                </Button>
                {/* <HandleThumbs like ={donation.likes} /> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
}



export default Donations;

