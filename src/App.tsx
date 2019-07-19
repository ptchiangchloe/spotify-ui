import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Button, Input, Form } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Button>Artists</Button>
      <Button color="light">Songs</Button>
      <Form className="search-bar">
        <Input type="text" id="artist" placeholder=" " />
        <Button className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </Form>
    </div>
  );
}

export default App;
