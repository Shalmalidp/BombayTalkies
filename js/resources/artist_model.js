import Backbone from 'backbone';
import {APP_URL} from '../parse_data.js';

//export default Backbone.Model.extend
 let ArtistModel = Backbone.Model.extend({
	urlRoot: APP_URL,
	
	idAttribute : 'objectId',

//had not done this before but spoke to issac and he had done it need to ask JD "why ?"
	templateData(){
		let data = this.toJSON();
		return data;
	}

});

 export default ArtistModel;