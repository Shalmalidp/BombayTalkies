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
EditClickHandler(id){
  console.log('click', this.props.editBtnClick);
	this.props.editBtnClick(id);
},


render(){

  console.log(this.props);

return(
  <div className='singleImage'>
  		<div className='collection-header'>
          <h2 className='header-text'>Bombay Talkies...</h2>
          <img className="header-image" src='http://www.daveandchad.com/wp-content/uploads/2015/07/bolly.jpg' />
        </div>
        <div className='buttons'>
            <button onClick={this.HomeClickHandler} className='home'>Home</button>
            <button onClick={() => this.EditClickHandler(this.props.data.objectId)} className='edit'>Edit</button>
        </div>
        <hr/>
    
    	<img className='single' width='300px' height='300px' src={this.props.data.Picture}/>
    	<div className='details'>
    		<p><span>Name  :</span> {this.props.data.Fname}</p>
    		<p><span>Number of years worked  : </span>  {this.props.data.Joined}</p>
    		<p><span>Age  : </span> {this.props.data.Age} years </p>
    		<p><span>About   : </span> {this.props.data.About}</p>
        
  		</div>
  		<hr/>
  </div>
  );

}
});

export default ArtistTemplate;