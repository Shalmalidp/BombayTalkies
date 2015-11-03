
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import './ajax_setup';

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
  "Artist/:id"   : "showArtist",
  "addForm"       : "showformAdd", 
  "editForm/:id"      : "showformEdit"
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
       //console.log(collection);//fetch error
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
        homeBtnClick={ () =>this.goto('')}
        editBtnClick={ () =>this.goto('editForm/'+id ,{replace : true})}/>);
    } 
    else {
      //console.log('adding this model');
      photo = this.collection.add(id);
      photo.fetch().then( () => {
      this.render(<ArtistTemplate data={photo.toJSON()}
      homeBtnClick={ () =>this.goto('')}
      editBtnClick={ () =>this.goto('editForm/'+id,{replace:true})}/>);
      });
    }
},

showformAdd(){
this.render(<AddTemplate 
  data={this.collection.toJSON()}
  editBtnClick={() =>this.goto('editForm/'+id)}
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
      Name   : newUserName,
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
},


showformEdit(id){
  let singleItem = this.collection.get(id);
  this.render(<EditTemplate
    data ={singleItem.toJSON()}
    homeBtnClick={() =>this.goto(''),{replace:true}}
    AddBtnClick={() =>this.goto('addForm')}/>)}

});

export default Router;