import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function TextExample() {
  return (
   
    <div className="centered-container">
       <Card style={{ width: '70rem' }}></Card>
      <Card className="center-card text-center">
      <Card.Body>
        <Card.Title style={{ fontWeight: 'normal' }}>Frequent Questions</Card.Title>
        
        <Card.Text>
          Simple answers to your most common questions
        </Card.Text>

      <>
      <div className="d-flex justify-content-between gap-2">
        <Button variant ="success" className="custom-btn">

          Getting started guide
        </Button>
        <Button variant ="primary" className="custom-btn">
        
          Email support
        </Button>
        </div>
      </>
      
      </Card.Body>
    </Card>
    </div>
  
  );
}

export default TextExample;


