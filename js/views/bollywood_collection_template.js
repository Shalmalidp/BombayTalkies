import React from 'react';
// this.props{
//    data:
//    id:
//    onClick:
//    onItemSelect:
// }

import ArtistModel from '../resources';

export default React.createClass({

SelectHandler(id){
    this.prop.onImageSelect(id);
},

// SpinClickHAndler(){
//  this.props.OnSpinClick();
// },

displayAll(data){
return(
  <div>
    <image src={data.Picture} id={data.objectID} onImageSelect={this.SelectHandler}/>

  </div>
  );

},

render() {
  return (
    <div className='collection-view'>
        <div>
          {this.props.data.map(this.displayAll)}
        </div>
    </div>
    );

}


});