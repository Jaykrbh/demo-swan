import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getScan } from "../../actions/scan";

export class Scan extends Component {
  state = {
    ip: "",
    
  };

  static propTypes = {
    getScan: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { ip,} = this.state;
    const scan = { ip};
    this.props.getScan(scan.ip);
    this.setState({
      ip: "",
      
    });
  };
  render() {
    const { ip } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Check For Firewall</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>URL</label>
            <input
              className="form-control"
              type="text"
              name="ip"
              placeholder='example.com'
              onChange={this.onChange}
              value={ip}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { getScan })(Scan);
