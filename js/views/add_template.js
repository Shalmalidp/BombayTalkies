import React from 'react';

let AddTemplate = React.createClass({

HomeClickHAndler(){
  this.props.homeBtnClick();
},
EditClickHandler(){
  this.props.editBtnClick();
},
SaveClickHandler(){
  this.props.saveBtnClick();
},

  render() {
    return (
        <div className='singleImage'>
            <div className='collection-header'>
            <h2 className='header-text'>Bombay Talkies...</h2>
            <img className="header-image" src='http://www.daveandchad.com/wp-content/uploads/2015/07/bolly.jpg' />
        </div>
        <div className='buttons'>
            <button onClick='HomeClickHAndler' className='home'>Home</button>
            <button onClick='EditClickHandler' className='edit'>Edit</button>
        </div>
        <hr/>
        <div className='details'>
            <form className='add-form'>
                <label id='l1'>Name: <input type='text' placeholder='Enter Name' className='her-name'/></label>
                <label id='l2'>Picture URL : <input type='text' placeholder='Paste URL' className='photo'/></label>
                <label id='l3'>Number of years worked  :<input type='text' placeholder='Enter No of years worked' className='joined'/></label>
                <label id='l4'>Age :<input type='text' placeholder='Enter Age' className='age'/></label>
                <label id='l5'>About  :<input type='text' placeholder='Description' className='about-her'/></label>
                <button onClick ='SaveClickHandler' className='save'>Save</button>             
            </form>
        </div>
        <hr/>
  </div>

        );
  }
});

export default AddTemplate;