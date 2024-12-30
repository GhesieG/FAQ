import React, { useState } from 'react';
import useSWR from 'swr';
import { Container, Row, Col, Form } from 'react-bootstrap';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const QAList: React.FC = () => {
  const { data, error } = useSWR(
    'https://qmbasefunctions.azurewebsites.net/api/questions?code=Y5DGbEq3YHjpTKgrwq9czVdm7ZxR8zy26Z_yNh8q4DFKAzFudvB65w==',
    fetcher
  );

  const [filter, setFilter] = useState('');

  if (error) return <p>Error loading data.</p>;
  if (!data) return <p>Loading...</p>;

  const filteredData = data.filter(
    (item: { question: string; answer: string }) =>
      item.question.toLowerCase().includes(filter.toLowerCase()) ||
      item.answer.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Form.Group className="mb-3">
        <Form.Label>Filter Q&A</Form.Label>
        <Form.Control
          type="text"
          placeholder="Type to filter..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </Form.Group>
      <Row>
        <Col>
          <h3>Questions</h3>
          {filteredData.map((item: { question: string }, index: number) => (
            <p key={index}>{item.question}</p>
          ))}
        </Col>
        <Col>
          <h3>Answers</h3>
          {filteredData.map((item: { answer: string }, index: number) => (
            <p key={index}>{item.answer}</p>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default QAList;
