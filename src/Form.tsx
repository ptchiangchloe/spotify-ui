import React, {Component} from 'react';
import './App.scss';

import { Button, Input, Form } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface ComponentState {
    inputValue: string
}

export default class SearchForm extends Component<{}, ComponentState> {
    constructor(props: any) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            inputValue: ""
        }
    }

    handleSubmit(event: any) {
        event.preventDefault();
        console.log('The button was clicked.')
        console.log(this.refs.artisit)
    }

    render() {
        return (
          <div>
            <Button>Artists</Button>
            <Button color="light">Songs</Button>
            <Form className="search-bar" onSubmit={this.handleSubmit}>
                <Input type="text" id="artist" placeholder=" " ref="artisit" value={this.state.inputValue} />
                <Button className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
                </Button>
            </Form>
          </div>  
        )
    }
}
