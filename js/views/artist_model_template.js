//this .prop{
// src
// id
// onSelect
// }

import React from 'react';

export default React.createClass({

clickHandler(event){
  this.props.onSelect(this.props.id);
},

render(){

return(
  <div className='singleImage' onClick={this.clickHandler}>
    <img src={this.props.data.Picture}/>
  </div>
  );

}
});