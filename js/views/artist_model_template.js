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

render(){

return(
  <div className='singleImage'>
    <img src={this.props.data.Picture}/>
    <p>{this.props.data.About} </p>
  </div>
  );

}
});

export default ArtistTemplate;