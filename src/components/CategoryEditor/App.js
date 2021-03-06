import React from "react";
import { connect } from "react-redux";
import "./style.css";

class CategoryEditor extends React.Component {
  submitCategory = e => {
    e.preventDefault();
    this.props.addCategory(this.input.value);
    this.input.value = "";
  };

  render() {
    return (
      <div hidden={!this.props.editMode} className="category__editor">
        <h1 className="category__editor__header">Select category</h1>

        {/* input field to add new categories */}
        <form onSubmit={this.submitCategory} className="category__editor__form">
          <input
            required
            ref={e => (this.input = e)}
            type="text"
            placeholder="Add a new one"
          />
        </form>

        {/* category list below the input */}
        <ul className="category__editor__display">
          {this.props.categories.map((name = "", index) => (
            <li key={index} onMouseDown={_ => this.props.onChange(name)}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({ categories: state.category }))(
  CategoryEditor
);
