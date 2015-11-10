import React from 'react';


let EditTemplate = React.createClass({

    getInitialState(){
        console.log('yy');
        console.log('zz', this.props.data);
        return ({
            objectId: this.props.data.objectId,
            Fname   : this.props.data.Fname,
            Picture : this.props.data.Picture,
            Joined  : this.props.data.Joined,
            Age     : this.props.data.Age,
            About   : this.props.data.About
        });
    },

    setId(event) {
    let newId = event.currentTarget.value;
    this.setState({objectId: newId});
    },

    HomeClickHandler(){
    this.props.homeBtnClick();
    },
    
    AddClickHandler(){
    this.props.AddBtnClick();
    },

    SaveClickHandler(event){
        event.preventDefault();
        console.log('this button was clicked');
        this.props.saveBtnClick(
          this.state.objectId,
          this.state.Fname,
          this.state.Picture,
          this.state.Joined,
          this.state.Age,
          this.state.About
          );
      console.log(this.state.Fname);
    },

    updateName(event){
        let herName = event.target.value;
        this.setState({
            Fname:herName
        })
    },
    updatePhoto(event){
        let photo = event.target.value;
        this.setState({
            Picture:photo
        })
    },
    updateAge(event){
        let age = event.target.value;
        this.setState({
            Age:age
        })
    },
    updateJoined(event){
        let joined = event.target.value;
        this.setState({
            Joined:joined
        })
    },
    updateAbout(event){
        let about = event.target.value;
        this.setState({
            About:about
        })
    },
         //MOVED FROM THE RENDER <button onClick={this.AddClickHandler} className='add'>Add</button>

  render() {
    console.log('qqq');
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
        <div className='detailsEdit'>
          <p>Edit Data Form</p>
          <div className="edit-container">
            <form className='edit-form'>
              
              <div>
                <label>
                  Id:
                </label> 
                <input className="id"
                  onChange={this.setId} 
                  type="text"  
                  value={this.state.objectId}/>
              </div>

              <div>
                <label className='edit-form-label'>
                  Name: 
                </label>
                <input className='hername' 
                  type='text' 
                  value={this.state.Fname} 
                  onChange={this.updateName}/>
              </div>
             
              <div>
                <label
                  className='edit-form-label'>
                  PastePicture URL :
                </label>
                <input
                 className='photo' 
                 type='text' 
                 value={this.state.Photo} 
                 onChange={this.updatePhoto}/>
              </div> 
             
              <div>
                <label
                 className='edit-form-label'>
                 Number of years worked  :
                </label>
                <input
                 className='joined' 
                 type='text'
                 value={this.state.Joined} 
                 onChange={this.updateJoined}/>
              </div>
             
              <div>  
                <label
                 className='edit-form-label'>
                 Age :
                </label>
                <input
                 className='age'
                 type='text' 
                 value={this.state.Age} 
                 onChange={this.updateAge}/>
              </div>
             
              <div>   
                <label
                 className='edit-form-label About'>
                 About  :
                </label>
                <textarea
                 className='about' 
                 type='text' 
                 value={this.state.About} 
                 onChange={this.updateAbout} />
              </div>
             <div className='btn'>
              <button 
                onClick ={this.SaveClickHandler} 
                className='save'>
                Save Changes
              </button>             
            </div>
            </form>
          </div>
        </div>
      </div>
    
    );
  }
});

export default EditTemplate;

