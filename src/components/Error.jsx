import { Alert } from 'react-bootstrap';

const Error = ({ message }) => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Alert variant="danger">
                <Alert.Heading>Error</Alert.Heading>
                <p>{message}</p>
            </Alert>
        </div>
    );
};

export default Error;
