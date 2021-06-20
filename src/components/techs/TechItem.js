import React from "react";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";
import PropTypes from "prop-types";

import M from "materialize-css/dist/js/materialize.min";

function TechItem({ tech, deleteTech }) {
  const onDelete = () => {
    deleteTech(id);
    M.toast({ html: `${firstName} ${lastName} Deleted` });
  };

  const { lastName, firstName, id } = tech;
  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text" onClick={onDelete}>
            delete
          </i>
        </a>
      </div>
    </li>
  );
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
