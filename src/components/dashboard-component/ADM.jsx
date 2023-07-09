import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, FormControl, Row } from 'react-bootstrap'

export default function ADM(props) {
    const [customer, setCustomer] = useState(null)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomer((prevCustomer) => ({ ...prevCustomer, [name]: value }));
    };

    useEffect(() => {
        const selectedCustomer = props.data.find(x => x.id === props.custClicked)
        setCustomer(selectedCustomer || null);
        console.log(props.custClicked);
    }, [props.custClicked, props.data])

    const handleSave = () => {
        // Check if a customer is selected
        if (customer) {
            // Perform the save action here, e.g., update the customer data in the state or make an API call
            const idx = props.data.findIndex(ele => ele.id === props.custClicked)
            props.setData((prevCustomer) => (prevCustomer[idx] = { customer }))
            console.log('Customer saved:', customer);
        }
    };
    const handleClear = () => {
        setCustomer('');
        props.setCustClicked('');
    }
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-CA'); // Adjust the locale as per your requirements
      };
    
    return (
        <>
            <Card>
                <Card.Title>
                    <div style={{ textAlign: 'center', marginTop: 10 }}>{props.custClicked === "" ? "Add new Customer" : "Update/Delete Customer"}</div>
                </Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="3">
                                Email
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type='email' placeholder='Email-ID' value={customer?.email || ''} name='email' onChange={handleInputChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
                            <Form.Label column sm="3">
                                Name
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type='text' placeholder='Name' value={customer?.name || ''} name='name' onChange={handleInputChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhone">
                            <Form.Label column sm="3">
                                Phone Number
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type='Phone' placeholder='Phone number' value={customer?.phone || ''} name='phone' onChange={handleInputChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextDateOfBirth">
                            <Form.Label column sm="3">
                                Date of Birth
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type='Date' placeholder='DOB' value={customer?.dob ? formatDate(customer.dob) : ''} name='dob' onChange={handleInputChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextAge">
                            <Form.Label column sm="3">
                                Age
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type='number' placeholder='Age' value={customer?.age || ''} name='age' onChange={handleInputChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextAddress">
                            <Form.Label column sm="3">
                                Address
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type='address' placeholder='Address' value={customer?.address || ''} name='address' onChange={handleInputChange} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextNationality">
                            <Form.Label column sm="3">
                                Nationality
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" placeholder="Nationality" value={customer?.nationality || ''} name="nationality" onChange={handleInputChange} />
                            </Col>
                        </Form.Group>
                        <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 250 }} >
                            <Button onClick={handleSave}>Save</Button>
                            <Button onClick={handleClear}>Clear</Button>
                            {props.custClicked !== "" && <Button>Delete</Button>}
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
