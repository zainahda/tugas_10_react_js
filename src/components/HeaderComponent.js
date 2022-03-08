import React from "react";
import {
  Container,
  Flag,
  Grid,
  Icon,
  Header,
  Image,
  Input,
  Divider
} from "semantic-ui-react";

const HeaderComponent = () => {
  return (
    <div style={{ marginTop: "25px" }}>
      <Container>
        <Grid>
          <Grid.Column>
            <Flag name="id" />
          </Grid.Column>
          <Grid.Column>
            <Icon name="angle left" />
          </Grid.Column>
          <Grid.Column>
            <Icon name="angle right" />
          </Grid.Column>
          <Grid.Column width={10}>
            <Input fluid icon="star" placeholder="Search..." />
          </Grid.Column>
          <Header as="h3" style={{marginTop: "15px"}}>
          <Image
              circular
              src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
              size="small"
            />
            Patrick
            </Header>
        </Grid>
      </Container>
      <Divider horizontal>SELAMAT DATANG !!!!</Divider>
    </div>
  );
};

export default HeaderComponent;
