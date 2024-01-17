// withCheckboxState.js
import React, { useState } from 'react';

function WithCheckboxState(WrappedComponent: any) {
  return function CheckboxWithState(props: any) {
    const [isChecked, setChecked] = useState(false);

    const toggleCheckboxChange = () => {
      setChecked((prevState: any) => !prevState);
    };

    return (
      <WrappedComponent
        {...props}
        isChecked={isChecked}
        toggleCheckboxChange={toggleCheckboxChange}
      />
    );
  };
}

export default WithCheckboxState;
