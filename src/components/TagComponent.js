import React from 'react';
import { Container, Label } from 'semantic-ui-react';

const TagComponent = () => {
  return (
    <div style={{marginRight: "200px"}}>
      <Container textAlign="right">
      <Label as='a' color='teal' tag >
      SPORT
      
      </Label>
      </Container>
    </div>
  )
}

export default TagComponent;
