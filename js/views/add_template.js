import React from 'react';

let AddTemplate = React.createClass({

  HomeClickHandler(){
    this.props.homeBtnClick();
  },
  EditClickHandler(){
    this.props.editBtnClick();
  },
  SaveClickHandler(event){
    event.preventDefault();
    console.log('this button was clicked');
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
            <button onClick={this.HomeClickHandler} className='home'>Home</button>
            <button onClick={this.EditClickHandler} className='edit'>Edit</button>
        </div>
        <hr/>
        <div className='detailsAdd'>
            <p>Add New Artist</p>
            <form className='add-form'>
                <label id='l1'>Name: </label>
                <input type='text' placeholder='Enter Name' className='her-name'/>
                <label id='l2'>Picture URL :</label> 
                <input type='text' placeholder='Paste URL' className='photo'/>
                <label id='l3'>Number of years worked  :</label>
                <input type='text' placeholder='Enter No of years worked' className='joined'/>
                <label id='l4'>Age :</label>
                <input type='text' placeholder='Enter Age' className='age'/>
                <label id='l5'>About  :</label>
                <input type='text' placeholder='Description' className='about-her'/>
                <button onClick ={this.SaveClickHandler} className='save'>Save</button>             
            </form>
        </div>
        <hr/>
  </div>

        );
  }
});

export default AddTemplate;