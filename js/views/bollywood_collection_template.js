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
    this.prop.onImageSelect(id);
},

// SpinClickHAndler(){
//  this.props.OnSpinClick();
// },

displayAll(data){
return(
  <div className='thumbnails' key = {data.objectId}>
    <image src={data.Picture} id={data.objectId} onClick={this.SelectHandler(data.objectId)}/>
  </div>
  );
},

//trying to see the images on screen
render() {
  return (
    <div className='collection-view'>
        <h2> Details</h2>
        <div>{this.props.data.map(this.displayAll)}</div>
    </div>
    );
}

});

export default BollywoodTemplate;