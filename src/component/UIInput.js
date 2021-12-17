import React, { useState } from "react";
import PropTypes from "prop-types";
import { DatePicker, Input, Radio } from "antd";
import { Button } from "antd/lib/radio";

const { TextArea } = Input;

/**
 * @param  {} props
 */
const UIInput = ({ option }) => {
  const [value, setValue] = useState(1);

  const handleOption = (e) => {
    setValue(e.target.value);
  };

  const onChange = (date, dateString) => {
    console.log(dateString);
  };

  const handleSubmit = () => {
    option(value);
  };

  return (
    <div className="ui-input">
      <form>
        <div className="flex date">
          <label>Chose date:</label>
          <DatePicker onChange={onChange} />
        </div>
        <div className="flex input-text">
          <label>Input Text:</label>
          <TextArea type="text" />
        </div>
        <div className="block-number">
          <div className="flex like">
            <label>Number of likes:</label>
            <Input type="number" />
          </div>
          <div className="flex comment">
            <label>Number of comments :</label>
            <Input type="number" />
          </div>
          <div className="flex share">
            <label>Number of share :</label>
            <Input type="number" />
          </div>
        </div>

        {/* option Fake or new */}
        <Radio.Group onChange={handleOption} value={value}>
          <Radio value={1}>Real</Radio>
          <Radio value={0}>Fake</Radio>
        </Radio.Group>

        <div className="btn --submit">
          <Button onClick={handleSubmit} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

UIInput.propTypes = {};

export default UIInput;
