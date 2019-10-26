import React from "react";
import Options from "./Options";

interface tableProps {
  table: {
    head: [];
    body: [];
  };
}
interface tableState {
  body: [];
  showCheck: Boolean;
}

class Table extends React.Component<tableProps, tableState> {
  searchList: any;
  pageNum: Number;
  pageLimit: Number;
  asc: Boolean;
  constructor(props: tableProps) {
    super(props);
    this.state = {
      body: this.props.table.body,
      showCheck: false
    };
    this.pageNum = 0;
    this.searchList = [];
    this.pageLimit = 2;
    this.asc = true;
  }
  componentWillMount() {
    this.setPageLimit(this.pageLimit);
  }
  private compareBy = (key: any) => {
    return (a: any, b: any) => {
      if (this.asc) {
        if (a[key] < b[key]) return -1;
      } else {
        if (a[key] > b[key]) return -1;
      }
      return 0;
    };
  };
  private sortBy = (key: any) => {
    let arrayCopy = [...this.state.body];
    arrayCopy.sort(this.compareBy(key));
    this.asc = !this.asc;
    this.setState({ body: arrayCopy } as Pick<tableState, any>);
  };
  private findArrayElementByTitle = (event: any) => {
    if (event.target.value != "") {
      isNaN(event.target.value)
        ? this.filterSearch("name", event.target.value)
        : this.filterSearch("id", event.target.value);
    } else {
      this.setPageLimit(this.pageLimit);
      this.removeClassFn();
      this.addClassFn(1);
    }
  };
  private filterSearch = (AphaNum: any, value: any) => {
    this.searchList = this.props.table.body.filter((v: any) =>
      v[AphaNum].toLowerCase().includes(value.trim().toLowerCase())
    );
    this.pageNum = Math.ceil(this.searchList.length / Number(this.pageLimit));
    this.setState({
      body: this.searchList.slice(0, this.pageLimit)
    } as Pick<tableState, any>);
  };

  private PageLim = (limit: any) => {
    this.pageLimit = limit.target.value;
    this.setPageLimit(limit.target.value);
  };
  private setPageLimit = (limit: any) => {
    this.removeClassFn();
    this.addClassFn(1);
    if (
      document.querySelector(".searchField") != null &&
      (document.querySelector(".searchField") as HTMLInputElement).value
    ) {
      this.pageNum = Math.ceil(this.searchList.length / limit);
      this.setState({
        body: this.searchList.slice(0, limit)
      });
    } else {
      this.pageNum = Math.ceil(this.props.table.body.length / limit);
      this.setState({
        body: this.props.table.body.slice(0, limit)
      } as Pick<tableState, any>);
    }
  };
  private removeClassFn = () => {
    let els = document.querySelectorAll(".pagination");
    for (var i = 0; i < els.length; i++) {
      for (var j = 0; j < els[i].children.length; j++) {
        els[i].children[j].classList.remove("active");
      }
    }
  };
  private addClassFn = (indexNum: Number) => {
    debugger;
    let els: any = document.querySelectorAll(".pagination");
    for (var i: any = 0; i < els.length; i++) {
      for (var j = 0; j < els[i].children.length; j++) {
        els[i].children[Number(indexNum) - 1].classList.add("active");
      }
    }
  };
  private changePageination = (pageNum: any, pageLimit: any, event: any) => {
    this.removeClassFn();
    this.addClassFn(event.target.textContent);
    document.querySelector(".searchField") != null &&
    (document.querySelector(".searchField") as HTMLInputElement).value != ""
      ? this.setState({ body: this.searchList.slice(pageNum, pageLimit) })
      : this.setState({
          body: this.props.table.body.slice(pageNum, pageLimit)
        } as Pick<tableState, any>);
  };
  private checkFn = () => {
    this.setState({ showCheck: !this.state.showCheck });
  };
  render() {
    return (
      <div className="table">
        <div className="table__head">
          <label>
            {" "}
            Show Options
            <input
              type="checkbox"
              className="showOptions"
              onClick={this.checkFn}
            />{" "}
          </label>
          {this.state.showCheck ? (
            <Options
              selectValue={this.pageLimit}
              search={this.findArrayElementByTitle.bind(this)}
              pageination={this.PageLim.bind(this)}
            />
          ) : (
            ""
          )}
          <div className="pagination">
            {[...Array(this.pageNum)].map((item, i: any) => (
              <button
                className={i == 0 ? "active" : ""}
                onClick={this.changePageination.bind(
                  this,
                  i * Number(this.pageLimit),
                  i * Number(this.pageLimit) + Number(this.pageLimit)
                )}
                key={i}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <table>
            <thead>
              <tr>
                {this.props.table.head.map(item => (
                  <th onClick={() => this.sortBy(item)} key={item}>
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.state.body.map((item, index) => (
                <tr key={item[index]}>
                  {Object.keys(item).map((itemData, i) => (
                    <td key={itemData}>{item[itemData]} </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            {[...Array(this.pageNum)].map((item, i: any) => (
              <button
                className={i == 0 ? "active" : ""}
                onClick={this.changePageination.bind(
                  this,
                  i * Number(this.pageLimit),
                  i * Number(this.pageLimit) + Number(this.pageLimit)
                )}
                key={i}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
