import { Button, Spinner } from "react-bootstrap";
import "./Spinner.style.css";

function SpinnerComponent() {
  return (
    <div className="spinner_container">
      <Button variant="primary" disabled>
        <Spinner
          style={{ marginRight: "10px" }}
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
}

export default SpinnerComponent;
