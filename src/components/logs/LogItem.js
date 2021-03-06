import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { deleteLog, setCurrent } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min";

function MyComponent({ log, deleteLog, setCurrent }) {
  const { attention, message, id, date, tech } = log;

  const onDelete = () => {
    deleteLog(id);
    M.toast({ html: `Log by ${tech} deleted` });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          onClick={() => setCurrent(log)}
          className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span> last updated by{" "}
          <span className="black-text">{tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
}

MyComponent.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(MyComponent);
