import React from "react";
import "./style.css";

const ContactItem = ({ name, phone, onClickDelete }) => (
    <div className="ContactItem">
        <p className="ContactItem__name">{name}</p>
        <p className="ContactItem__phone">{phone}</p>
        <button
          type="button"
          className="ContactItem__button"
          onClick={onClickDelete}
        >
            Delete
        </button>
    </div>
);

export default ContactItem;