import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null
  };

  selectAuthor = author => {this.setState({currentAuthor:author})}
  isSelect = () => {
    if (this.state.currentAuthor) {
      return <AuthorDetail author={this.state.currentAuthor}/>;
     } else{
       return(
         <AuthorsList
         selectAuthor={this.selectAuthor}
         authors={authors}
         />
       );
     }
    


  };


render(){
  return(
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="content col-10"> 
        {this.isSelect()}
          <AuthorDetail author={this.state.currentAuthor}/>
          <AuthorsList authors={authors} selectAuthor={this.selectAuthor} 
            
          />
        </div>
      </div>
      </div>

  );
}};

export default App;
