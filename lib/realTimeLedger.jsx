import React from 'react';

const { Component } = React;

export default
class RealTimeLedger extends Component {

  shouldComponentUpdate(nextProps) {
    const next = nextProps.transactions;
    const current = this.props.transactions;
    return next[next.length - 1] !== current[current.length - 1];
  }

  componentDidUpdate() {
    const panel = this.refs.transaction_container;
    if (panel.lastChild) panel.lastChild.scrollIntoView();
  }

  render() {
    const TransactionFullList = this.props.transactions.map((tran, idx) => {
      return (
        <div key={idx} style={this.props.myStyle.stylee}>
          <li style={this.props.myStyle.list_items}>
            {tran.buyer}
          </li>
          <li style={this.props.myStyle.list_items}>
            {tran.seller}
          </li>
          <li style={this.props.myStyle.list_items}>
            {tran.transID}
          </li>
          <li style={this.props.myStyle.list_items}>
            {tran.price}
          </li>
          <li style={this.props.myStyle.list_items}>
            {tran.sector}
          </li>
        </div>
      );
    });

    return (
      <div ref={'transaction_container'} style={this.props.myStyle.container}>
        <div style={this.props.myStyle.styleFirst}>
          <li style={this.props.myStyle.list_items}>
            Patient ID
          </li>
          <li style={this.props.myStyle.list_items}>
            Bed ID
          </li>
          <li style={this.props.myStyle.list_items}>
	           Machine ID
          </li>
          <li style={this.props.myStyle.list_items}>
            Doctor ID
          </li>
          <li style={this.props.myStyle.list_items}>
            Hospital
          </li>
        </div>
        {TransactionFullList}
      </div>
    );
  }
};
