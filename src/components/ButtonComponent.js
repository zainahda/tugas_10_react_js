import React from "react";
import { Container, Button } from "semantic-ui-react";

const ButtonComponent = () => {
  return (
    <div>
      <Container textAlign="center" style={{marginTop: "10px"}}>
      <Button content='Tambahkan Tautan Ke List' icon='plus' labelPosition='left' color="teal"/>
      </Container>
    </div>
  );
};

export default ButtonComponent;
