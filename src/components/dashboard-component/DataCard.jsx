import { Card, Col, Row } from "react-bootstrap";

export default function DataCard(props) {
  function handleClick(){
    props.clickId(props.id);
  }
  return (
    <div style={{ margin:5,cursor:'pointer'}} onClick={handleClick}>
      <Card>
        <Card.Body>
            <Row>
              <Col>
                <div style={{display:'flex'}}>
                <div style={{width:40, textAlign:'right'}}>{props.id}</div>
                <div style={{width:150, marginLeft:10 , overflow:'hidden'}}>{props.name}</div>
                <div style={{width:'250px', overflow:'hidden', maxHeight:20}}>{props.address}</div>
                </div>
              </Col>
            </Row>
        </Card.Body>
      </Card>
    </div>
  )
}
