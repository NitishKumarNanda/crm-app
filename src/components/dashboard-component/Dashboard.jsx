import { Button, Card, Col, Container, FormControl, Row } from "react-bootstrap";
import DataCard from "./DataCard";
import AppNavBar from "./NavBar/AppNavBar";
import { useContext, useEffect, useState } from "react";
import CustomerContext from "../contexts/CustomerContext";
import ADM from "./ADM";



export default function Dashboard() {
  const { data, setData } = useContext(CustomerContext);
  const [inputData, setInputData] = useState("");
  const [custClicked, setCustClicked] = useState("");
  
  return (
    <div>
      <AppNavBar />
      <div style={{ marginTop: 10 }}>
          <Row>
            <Col xs={12} md={6}>
              <div style={{ margin: 5 }} >
                <Card>
                  <Card.Title>
                    <div style={{ display: 'flex', marginTop: 10 }}>
                      <div style={{ margin: 10 }}>Records</div>
                      <FormControl placeholder="Search" style={{ maxWidth: 200 }} onChange={(e) => { 
                        setInputData(e.target.value.toLowerCase()) 
                        }} />
                    </div>
                  </Card.Title>
                  <Card.Body>
                    {inputData === "" ?
                      data.map(ele => <DataCard id={ele.id} name={ele.name} address={ele.address} clickId={setCustClicked} key={ele.id} />)
                      :
                      data.filter(fil => fil.name.toLowerCase().includes(inputData)).map(ele => <DataCard id={ele.id} name={ele.name} address={ele.address} clickId={setCustClicked} key={ele.id} />)
                    }
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div style={{ margin: 5 }}>
                <ADM data={data} setData={setData} custClicked={custClicked} setCustClicked={setCustClicked}/>
              </div>
            </Col>
          </Row>
      </div>
    </div>
  )
}
