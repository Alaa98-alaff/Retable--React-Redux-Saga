import { Button, Spinner } from "react-bootstrap";

function SpinnerComponent() {
  return (
    <Button
      variant="primary"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: "-50px",
        marginLeft: "-80px",
      }}
      disabled
    >
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
  );
}

export default SpinnerComponent;
