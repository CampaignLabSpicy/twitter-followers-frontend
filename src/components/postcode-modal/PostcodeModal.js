import "./PostcodeModal.scss";

import React, { useState } from "react";

import { fetchPostcodeData } from "../../services/apiService";

const PostcodeModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState(undefined);

  const onClick = e => {
    if (e.currentTarget === e.target) {
      setIsOpen(false);
    }
  };
  const onSubmit = async e => {
    e.preventDefault();

    try {
      const data = await fetchPostcodeData(postcode);
    } catch (error) {
      setError(error.message);
    }
  };

  console.log(data);

  return (
    <div
      className={`postcode-modal ${isOpen ? "postcode-modal--open" : ""}`}
      onClick={onClick}
    >
      <div className="postcode-modal__inner">
        <form onSubmit={onSubmit}>
          <fieldset className="postcode-modal__fieldset">
            <legend className="postcode-modal__legend">
              Want to help more? Let us know your postcode so we can link you in
              with your local Labour network!
            </legend>
            {error && <p>{error}</p>}
            <input
              type="text"
              value={postcode}
              onChange={e => setPostcode(e.target.value)}
            />
            <button type="submit">Go</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default PostcodeModal;
