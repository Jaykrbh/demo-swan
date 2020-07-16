import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getScan, getPrint } from "../../actions/scan";
export class Results extends Component {
  static propTypes = {
    scan: PropTypes.array.isRequired,
    getScan: PropTypes.func.isRequired,
    getPrint: PropTypes.any.isRequired,
  };

  render() {
    return (
      <Fragment>
        <h2>Results</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>URL</th>
              <th>Detected</th>
              <th>Firewall</th>
              <th>Manufacturer</th>

              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.scan.map((scan) => (
              <tr key={scan.url}>
                <td>{scan.url}</td>
                <td>{scan.detected}</td>
                <td>{scan.firewall}</td>
                <td>{scan.manufacturer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  scan: state.scan.scan,
});

export default connect(mapStateToProps, { getScan, getPrint })(Results);
