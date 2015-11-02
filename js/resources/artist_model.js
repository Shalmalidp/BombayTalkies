import Backbone from 'backbone';
import {APP_URL} from '../parse_data.js';

//export default Backbone.Model.extend
 let ArtistModel = Backbone.Model.extend({
	urlRoot: APP_URL,
	
	idAttribute : 'objectId'

});

 export default ArtistModel;