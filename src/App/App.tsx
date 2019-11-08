import React from 'react';
import './App.scss';
import TextArea from '@material-ui/core/TextareaAutosize';
import Card from '@material-ui/core/Card';

function App() {
  return ( 
    <div className="App">
      <div className="card-message">
        <Card raised={false}>
          <TextArea className="text-area"rows={3}>Send me a message! :-)</TextArea>
        </Card>
      </div>
    </div>
  );
}
export default App;
