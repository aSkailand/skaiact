import React from 'react';
import './App.scss';
import TextArea from '@material-ui/core/TextareaAutosize';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { CardContent, CardActions, Typography } from '@material-ui/core';

function App() {
  return ( 
    <div className="App">
      <div className="card-message">
        <Card raised={true}>
          <CardContent>
            <Typography variant="h5">Send me a message! :-)</Typography>
            <TextArea className="text-area"rows={5}>...</TextArea>
          </CardContent>
          <CardActions>
          <Button color="secondary">Submit</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
export default App;
