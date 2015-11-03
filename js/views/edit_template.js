import React from 'react';


let EditTemplate = React.createClass({

	getIntialState(){
		return ({
			herName: this.props.data.herName,
            photo:this.props.data.photo,
            joined:this.props.data.joined,
            age:this.props.data.age,
            about:this.props.data.about
		});
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
    	this.props.saveBtnClick();
  	},


	updateName(event){
		let herName = event.target.value;
		this.setState({
			herName:herName
		})
	},
    updatePhoto(event){
        let photo = event.target.value;
        this.setState({
            photo:photo
        })
    },
    updateAge(event){
        let age = event.target.value;
        this.setState({
            age:age
        })
    },
    updateJoined(event){
        let joined = event.target.value;
        this.setState({
            joined:joined
        })
    },
    updateAbout(event){
        let About = event.target.value;
        this.setState({
            about:about
        })
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
            <button onClick={this.AddClickHandler} className='add'>Add</button>
        </div>
        <hr/>
        <div className='detailsEdit'>
                <p>EDIT DATA FORM</p>
            <form className='edit-form'>
                <label id='l1'>Name: </label>
                <input type='text' value={this.state.herName} onChange={this.updateName} className='her-name'/>
                <label id='l2'>Picture URL :</label> 
                <input type='text' value={this.state.photo} onChange={this.updatePhoto} className='photo'/>
                <label id='l3'>Number of years worked  :</label>
                <input type='text'value={this.state.joined} onChange={this.updateJoined} className='joined'/>
                <label id='l4'>Age :</label>
                <input type='text' value={this.state.age} onChange={this.updateAge} className='age'/>
                <label id='l5'>About  :</label>
                <input type='text' value={this.state.about} onChange={this.updateAbout} className='about-her'/>
                <button onClick ={this.SaveClickHandler} className='SAVE CHANGES'>Save</button>             
            </form>
        </div>
        <hr/>
  </div>

      
    );
  }
});

export default EditTemplate;

