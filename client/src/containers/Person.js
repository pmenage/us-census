import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getColumns, findByColumn } from "../redux/actions/person.actions";
import {
    getColumns as getColumnsSelector,
    getResults as getResultsSelector
} from "../redux/reducers/person.reducer";

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Person({
    columns,
    getColumns,
    results,
    findByColumn,
}) {
    const [value, setValue] = useState('');

    useEffect(() => {
        getColumns();
    }, [getColumns]);

    const change = (event) => {
        const v = event.target.value;
        setValue(v);
        findByColumn(v);
    }

    return (
        <Container>
            <Row>
                <Col sm={5}>
                    <h1>Columns</h1>
                    <Form.Control as="select" onChange={change} value={value}>
                        {columns.map(column => (
                            <option key={column} value={column}>{column}</option>
                        ))}
                    </Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Results</h2>
                    <Table>
                        <thead>
                            <tr>
                                <th>Value</th>
                                <th>Count</th>
                                <th>Average age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map(result => (
                                <tr key={result.value}>
                                    <td>{result.value}</td>
                                    <td>{result.count}</td>
                                    <td>{result.averageAge}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

function mapStateToProps(state) {
    return {
        columns: getColumnsSelector(state),
        results: getResultsSelector(state),
    }
}

export default connect(
    mapStateToProps,
    {
        getColumns,
        findByColumn,
    }
)(Person);