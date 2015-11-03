//this .prop{
// src
// id
// onSelect
// }

import React from 'react';

// export default React.createClass

let ArtistTemplate = React.createClass({

clickHandler(event){
  this.props.onSelect(this.props.id);
},

HomeClickHandler(){
	this.props.homeBtnClick();
},
EditClickHandler(){
	this.props.editBtnClick();
},


render(){

return(
  <div className='singleImage'>
  		<div className='collection-header'>
          <h2 className='header-text'>Bombay Talkies...</h2>
          <img className="header-image" src='http://www.daveandchad.com/wp-content/uploads/2015/07/bolly.jpg' />
        </div>
        <div className='buttons'>
            <button onClick={this.HomeClickHandler} className='home'>Home</button>
            <button onClick={this.EditClickHandler} className='edit'>Edit</button>
        </div>
        <hr/>
    
    	<img className='single' width='300px' height='300px' src={this.props.data.Picture}/>
    	<div className='details'>
    		<p>Name <i className="fa fa-heart"> </i>{this.props.data.Name}</p>
    		<p>Number of years worked  :  {this.props.data.Joined}</p>
    		<p>Age  :  {this.props.data.Age} years </p>
    		<p>About   :  {this.props.data.About}</p>
  
  		</div>
  		<hr/>
  </div>
  );

}
});

export default ArtistTemplate;