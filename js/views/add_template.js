import React from 'react';

let AddTemplate = React.createClass({

  HomeClickHandler(){
    this.props.homeBtnClick();
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
        </div>
        <hr/>
        <div className='detailsAdd'>
            <p className="addData">Add New Artist</p>
            <div className='add-container'>
              <form className='add-form'>
                <div>
                  <label  
                    className='add-form-label'>
                    Name: 
                  </label>
                  <input  
                    className='hername'
                    type='text' 
                    placeholder='Enter Name' />
                </div>

                <div>
                  <label  
                    className='add-form-label'>
                    Picture URL :
                  </label> 
                  <input 
                    className='photo'
                    type='text' 
                    placeholder='Paste URL' />
                </div>

                <div>
                  <label 
                    className='add-form-label'>
                    Number of years worked  :
                  </label>
                  <input 
                    className='joined'
                    type='text' 
                    placeholder='Enter No of years worked' />
                </div>

                <div> 
                  <label  
                    className='add-form-label'>
                    Age :
                  </label>
                  <input 
                    className='age'
                    type='text' 
                    placeholder='Enter Age' />
                </div>

                <div>
                  <label  
                    className='add-form-label About'>
                    About  :
                  </label>
                  <textarea 
                    className='about'
                    type='text' 
                    placeholder='Description' />
                </div>

                <div className='btn'>
                  <button 
                    onClick ={this.SaveClickHandler} 
                    className='save'>
                    Save
                  </button>             
                </div>
              </form>
            </div>
        </div>
      </div>

        );
  }
});

export default AddTemplate;