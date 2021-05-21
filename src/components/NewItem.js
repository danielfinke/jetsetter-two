import { inject } from 'mobx-react';
import React, { Component } from 'react';

@inject('itemList')
class NewItem extends Component {
  state = { value: '' };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    const { itemList } = this.props;
    const { value } = this.state;

    event.preventDefault();

    itemList.addItem(value);
  };

  render() {
    const { value } = this.state;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
