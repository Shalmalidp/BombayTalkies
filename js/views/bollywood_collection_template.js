import React from 'react';
import ArtistModel from '../resources';
// this.props{
//    data:
//    id:
//    onClick:
//    onImageSelect:
// }

//export default React.createClass
let BollywoodTemplate = React.createClass({

SelectHandler(id){
    this.props.onImageSelect(id);
},

// SpinClickHAndler(){
//  this.props.OnSpinClick();
// },

displayAll(data){
return(
  <div className='thumbnails' key = {data.objectId}>
    <img src={data.Picture} id={data.objectId} onClick={() => this.SelectHandler(data.objectId)}/>
  </div>
  );
},

//trying to see the images on screen
render() {
  return (
    <div className='collection-view'>
        <img className="header-image" src='http://www.daveandchad.com/wp-content/uploads/2015/07/bolly.jpg' />
        <h2> Details</h2>
        <div>{this.props.data.map(this.displayAll)}</div>
    </div>
    );
}

});

export default BollywoodTemplate;