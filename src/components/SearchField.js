import React from "react";

const SearchField = ({ on_change }) => {
  return (
    <div>
      <input
        type='text'
        className='pa3 ba bg-lightest-red'
        placeholder='Search user'
        onChange={on_change}
      />
    </div>
  );
};

export default SearchField;
