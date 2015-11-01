import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import {
    ArtistTemplate,
    BollywoodTemplate,
    AddTemplate,
    EditTemplate,
    Spinner,
} from './views';

import {
    BollywoodCollection,
    ArtistModel
} from './resources';


// const RECORD = {message:"All the things"};

let Router = Backbone.Router.extend({

routes: {
  ""              : "redirecttoBollywoodCollection", // redirect homescreen to bollywood pics
  "Artist/:id"   : "showArtist",
  "addForm"       : "showformAdd", 
  "editForm"      : "showformEdit"
}, //end of routes
    
start(){
  Backbone.history.start();
  return this;
},

goto(route){
this.navigate(route, {trigger: true});
},

initialise(appElement){
  this.el = appElement;

//creating instance of Bollywood collection to later fetch data to display
  let collection = new BollywoodCollection();

  this.navigate(`redirecttoBollywoodCollection`,{trigger: true , replace :true});
},

//SHOWS IMAGES ON THE HOME SCREEN
redirecttoBollywoodCollection(){
  //fetching data from the collection instance to act on it 
    console.log(this);
  this.collection.fetch().then(()=>{
//new way
    ReactDom.render(
      <BollywoodCollection id={this.collection.objectId} onClick={(id)=>this.goto('Artist/'+id)} data={this.collection.toJSON()}/>,
      this.el);

   //old way
    //this.el.html(BollywoodTemplate(this.collection.toJSON()) );
    
  });
},

//SHOWS SINGLE ACTOR
showArtist(id){
   console.log('should show photo' + id);
    let photo = this.collection.get(id);

    if (photo){
      this.render(<ArtistTemplate images={photo.collection.get(id)}/>);
    } 
    else {
      //console.log('adding this model');
      photo = this.collection.add(id);
      photo.fetch().then( () => {
        this.render(<ArtistTemplate images={photo.toJSON()}/>);
      });
    }
},
showformAdd(){},
showformEdit(){}


});

export default Router;