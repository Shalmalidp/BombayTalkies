import Backbone from 'backbone';
import ArtistModel from './artist_model';
import {APP_URL} from '../parse_data';

//export default Backbone.Collection.extend

let BollywoodCollection = Backbone.Collection.extend({
	
	url: APP_URL,
	
	model : ArtistModel,
	
	parse(data){
		return data.results;
	}
});

export default BollywoodCollection;

