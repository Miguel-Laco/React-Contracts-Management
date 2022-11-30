import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-box">
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={1}>
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Qué estás buscando?" />
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row} className="search-radios">
            <Form.Label as="legend" column sm={1}>
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Cliente"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="N° de Contrato"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="Año de finalización"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 1 }}>
            <Button className="search-button">Buscar</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchBar;
