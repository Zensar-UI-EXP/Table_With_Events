import React from "react";

interface optionProps {
  search: any;
  pageination: any;
  selectValue: any;
}

function Options(props: optionProps) {
  return (
    <div className="options">
      <input
        className="searchField"
        type="text"
        placeholder="Search"
        onChange={props.search}
      />
      <label>
        Record Per Page:
        <select onChange={props.pageination} value={props.selectValue}>
          <option value="2">2</option>
          <option value="4">4</option>
        </select>
      </label>
    </div>
  );
}
export default Options;
