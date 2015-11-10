
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import './ajax_setup';
import $ from 'jquery';

import ArtistTemplate       from './views/artist_model_template';
import BollywoodTemplate    from './views/bollywood_collection_template';

import AddTemplate          from './views/add_template';
import EditTemplate         from './views/edit_template';
import {Spinner}            from './views';


import BollywoodCollection from './resources/bollywood_collection';
import ArtistModel         from './resources/artist_model';


// const RECORD = {message:"All the things"};

let Router = Backbone.Router.extend({

routes: {
  ""              : "home", // redirect homescreen to bollywood pics
  "Artist/:id"    : "showArtist",
  "addForm"       : "showformAdd", 
  "editForm/:id"  : "showformEdit"
}, //end of routes
    
initialize(appElement) {
  this.el = appElement;
  this.collection = new BollywoodCollection();
  this.model = new ArtistModel();

  // this.goto('redirecttoBollywoodCollection', {trigger:true, replace :true } );
},

start(){
  Backbone.history.start();
  return this;
},

render(component){
  ReactDom.render(component, this.el);
},


// saveBtnClick{},

goto(route){
this.navigate(route, {trigger: true});
},

//TRYING TO SHOWS IMAGES ON THE HOME SCREEN
home() {
  //fetching data from the collection instance to act on it 
      this.collection.fetch().then(() => {
//new way
         this.render(
          <BollywoodTemplate 
//          grabbing the objectId into a variable
             id={this.collection.objectId}  
            onImageSelect={(id)=>this.goto('Artist/'+ id)} 
            data={this.collection.toJSON()}
            AddBtnClick={() =>this.goto('addForm')}/>);
      });
   //old way
    //this.el.html(BollywoodTemplate(this.collection.toJSON()) );
},



//SHOWS SINGLE ACTOR
showArtist(id){
   console.log('should show photo' + id);
    let photo = this.collection.get(id);

    if (photo){
      this.render(
        <ArtistTemplate 
        data={photo.toJSON()}
        editBtnClick={ (id) =>this.goto('editForm/'+ id)}
        homeBtnClick={ () =>this.goto('')} />);
     
    } 
    else {
      //console.log('adding this model');
      photo = this.collection.add({objectId : id});
      photo.fetch().then( () => {
      this.render(<ArtistTemplate 
        data={photo.toJSON()}
        editBtnClick={ (id) =>this.goto('editForm/'+ id)}
        homeBtnClick={ () =>this.goto('')}/>);
      });
    }
},

// EDITING EXISTING DATA
showformEdit(id){
  let getinfo = this.collection.get(id);
    if(getinfo){
      console.log('A', getinfo.toJSON());
      this.render(<EditTemplate 
                    homeBtnClick={()=> this.goto('')}
                    data={getinfo.toJSON()}
                    saveBtnClick={(id,Fname,Picture,Joined,Age,About) =>
                    this.saveEditedData(id, Fname,Picture,Joined,Age,About)}/>);
    }
    else{
      getinfo = this.collection.add({objectId : id});
      getinfo.fetch().then(() =>{
        console.log('B', getinfo.toJSON());
        this.render(<EditTemplate 
                    data={getinfo.toJSON()}
                    saveBtnClick={(id, Fname,Picture,Joined,Age,About) =>
                    this.saveEditedData(id,Fname,Picture,Joined,Age,About)}/>);
        console.log('BB');
      })
    }
    console.log('logging toJSON', getinfo.toJSON());
},

//SAVING EDITED DATA....
saveEditedData(id,Fname,Picture,Joined,Age,About){
  this.collection.get(id).save({
    objectId :id,
    Fname    :Fname,
    Picture  :Picture,
    Joined   :Joined,
    Age      :Age,
    About    :About
  }).then(() => {
      alert('UPDATED CHANGES.');
      this.goto('');
    });
},



//ADD NEW ACTORS
showformAdd(){
this.render(<AddTemplate 
  data={this.collection.toJSON()}
  editBtnClick={() =>this.goto('editForm/'+ id)}
  homeBtnClick={() =>this.goto('')}
  saveBtnClick={() =>{
    // event.preventDefault();
    let newUserName  = document.querySelector('.her-name').value;
    let newPhotoUrl  = document.querySelector('.photo').value;
    let newUserJoined= document.querySelector('.joined').value;
    let newUserAge   = document.querySelector('.age').value;
    let newUserAbout = document.querySelector('.about-her').value;
    console.log('new user',newUserName);

    let model = new ArtistModel({
      Fname   : newUserName,
      Picture: newPhotoUrl,
      Joined : newUserJoined,
      Age    : Number(newUserAge),
      About  : newUserAbout

    });
    console.log('is the model new ?', model);
      console.log('clicked');

      model.save().then(() => {
        alert('RECORD SUCCESSFULLY ADDED');
        this.goto(""); 
      });
  }
}/>);
}


});
export default Router;