import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
  renderList() {
    return this.props.books.map((book)=>{
      return(
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}
function mapStateToProps(state){
  //whatever is retured will show up as props inside of BookList
  return{
    books: state.books
  }
}
function mapDispatchToProps(dispatch){
  //whenever selectbook is called, the result should be passed to all of the reducers
  //anything returned by this function will be returned as props

  return bindActionCreators({selectBook: selectBook}, dispatch)
}
//promote bookList from a regular component to a container - it needs to know about this new dispatch method, select book. make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
