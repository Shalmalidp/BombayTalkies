import $ from 'jquery';
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
  "editForm"      : "showformEdit"
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
             id={this.collection.objectId}  
            onImageSelect={(id)=>this.goto('Artist/'+ id)} 
            data={this.collection.toJSON()}
            AddBtnClick={() =>this.goto(`addForm`)}
            editBtnClick={ () =>this.goto(`editForm`)}/>);
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
        editBtnClick={ () =>this.goto(`editForm`)}/>);
    } 
    else {
      //console.log('adding this model');
      photo = this.collection.add(id);
      photo.fetch().then( () => {
      this.render(<ArtistTemplate data={photo.toJSON()}
      homeBtnClick={ () =>this.goto('')}
      editBtnClick={ () =>this.goto(`editForm`)}/>);
      });
    }
},

showformAdd(){
this.render(<AddTemplate 
  data={this.collection.toJSON()}
  editBtnClick={() =>this.goto(`editForm`)}
  homeBtnClick={() =>this.goto(''),{replace:true}}
  saveBtnClick={() =>{
    let newUserName  = document.querySelector('.her-name').value;
    let newPhotoUrl  = document.querySelector('.photo').value;
    let newUserJoined= document.querySelector('.joined').value;
    let newUserAge   = document.querySelector('.age').value;
    let newUserAbout = document.querySelector('.about-her').value;
    
    this.model = new ArtistModel({
      Name   : newUserName,
      Picture: newPhotoUrl,
      Joined : newUserJoined,
      Age    : newUserAge,
      About  : newUserAbout
    });
      model.save().then(()=>{
        alert('RECORD SUCCESSFULLY ADDED');
        this.goto(''); 
      });
  }
}/>);
},


showformEdit(){}

});

export default Router;