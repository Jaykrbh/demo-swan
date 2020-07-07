import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getScan } from "../../actions/scan";
export class Results extends Component {
  static propTypes = {
    scan: PropTypes.array.isRequired,
    getScan: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getScan();
  }

  render() {
    return (
      <Fragment>
        <h2>Results</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.scan.map((scan) => (
              <tr key={scan.glossary}>
                <td></td>
                <td>{scan.glossary.title}</td>
                <td>{scan.glossary.GlossDiv.title}</td>
                <td></td>
                <td>
                  {/* <button
                    onClick={this.props.deleteLead.bind(this, lead.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button> */}
                </td>
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

export default connect(mapStateToProps, { getScan })(Results);
