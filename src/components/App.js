import React from "react";
import { Container } from "@material-ui/core";
import { Box } from "@material-ui/core/";
import { Grid } from "@material-ui/core";
import ListCategory from "./ListCategory";
import Form from "./Form";
import Header from "./Header";
import AddTodoInput from "./AddTodoInput";
import ListTodos from "./ListTodos";
import DoneProgressBar from "./DoneProgressBar";

const App = () => (
  <>
    <Container>
      <Header></Header>
      <DoneProgressBar></DoneProgressBar>
      <Grid container spacing={3} className="mainContainer">
        <Grid item lg={4}>
          <Form />
          <h4 className="categoryHeadline">Categories</h4>
          <ListCategory />
        </Grid>
        <Grid item lg={7}>
          <Container>
            <Box display="flex">
              <AddTodoInput></AddTodoInput>
            </Box>
            <h4 className="todoListHeadline"> Todos</h4>
            <ListTodos></ListTodos>
          </Container>
        </Grid>
      </Grid>
    </Container>
  </>
);
export default App;
