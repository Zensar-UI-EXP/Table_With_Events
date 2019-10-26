import React from "react";

interface TableProps {
  country: any;
  tableData: {};
}

const Test = (props: TableProps) => {
  return <div>Hello Mohamed {props.country}</div>;
};

export default Test;
