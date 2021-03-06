
import React from 'react';
import ArtistModel from '../resources';
// this.props{
//    data:
//    id:
//    onImageSelect:
// }


//export default React.createClass
let BollywoodTemplate = React.createClass({

SelectHandler(id){
    this.props.onImageSelect(id);
},

AddClickHandler(){
  this.props.AddBtnClick();
},

// SpinClickHAndler(){
//  this.props.OnSpinClick();
// },

displayAll(data){
return(
  <div className='thumbnails' key = {data.objectId}>
    <img className='collection-display' 
    src={data.Picture} width='200px' height='200px' 
    id={data.objectId} 
    onClick={() => this.SelectHandler(data.objectId)}/>
  </div>
  );
},

//trying to see the images on screen
render() {
  return (
    <div className='collection-view'>
        <div className='collection-header'>
          <h2 className='header-text'>Bombay Talkies...</h2>
          <img className="header-image" src='http://www.daveandchad.com/wp-content/uploads/2015/07/bolly.jpg' />
        </div>
        <div className='buttons'>
            <button onClick={this.AddClickHandler} className='add'>Add</button>
        </div>
        <hr/>
        <div className='collection-display'>{this.props.data.map(this.displayAll)}</div>
        
        <hr/>
    </div>
    );
}

});

export default BollywoodTemplate;