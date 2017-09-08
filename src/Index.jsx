import React from 'react'
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react'

const ButtonExampleButton = () => (
  <Button>
    Click Here
  </Button> 
)

const _root = document.getElementById('root');

alert(123);

ReactDOM.render(<ButtonExampleButton />, _root);