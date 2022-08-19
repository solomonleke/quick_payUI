import './firstPage.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function searchForm(){
    return(
        <Form>
            <Form.Group>
                <Form.Control type="text" placeholder="Enter Account/ Meter No" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    )
}

export default searchForm;