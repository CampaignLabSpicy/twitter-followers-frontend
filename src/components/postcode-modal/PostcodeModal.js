import "./PostcodeModal.scss";

import React from "react";

import { fetchPostcodeData } from "../../services/apiService";

const PostcodeModal = (props) => {
  const { location={}, setPostcode, setError, error } = props;
  const { pc, pc7, pc8, pcd, pcs } = location;
  let isOpen = !location.specificity || location.specificity < 6     // 6 is either constituency or postcode sector.
  let postcodeValue = pc7 || pc8 || pc || pcd || pcs ;

  const onClick = e => {
    if (e.currentTarget === e.target) {
      isOpen= false;
    }
  };

  const onSubmit = async ev => {
    ev.preventDefault();
    try {
      const { location } = await fetchPostcodeData(ev.target.value);
      setPostcode ( postcodeValue );
    } catch (error) {
      setError(error.message);
    }
  };

  const setPostcodeValue = pc => {
    // is a required prop
  };

  console.log(location);

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
              value={ location.pc || '' }
              onChange={ ev=> setPostcodeValue(ev.target.value) }
            />
            <button type="submit">Go</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default PostcodeModal;
