import request from 'superagent';
import store from '../store';
import { setBlueprints, selectBlueprint } from '../ducks/blueprint';

export default class BlueprintSrvc {
	static postBlueprint( blueprint, resolve, reject ) {
		return request.post(`/api/blueprints`)
			.send( blueprint )
			.end( ( err, blueprint ) => {
				if ( err ) {
					return reject( err );
				}
				return resolve( blueprint.body );
			});
	}

	static getBlueprintById( blueprintId ) {
		return request.get(`/api/blueprint/${ blueprintId }`, ( err, blueprint ) => {
			if ( err ) {
				return console.error( err );
			}

			store.dispatch( selectBlueprint( blueprint.body ) );
			return blueprint.body;
		});
	}

	static getBlueprints() {
		return request.get(`/api/blueprints`, ( err, blueprints ) => {
			if ( err ) {
				return console.error( err );
			}

			return store.dispatch( setBlueprints( blueprints.body.owned, blueprints.body.shared));
		});
	}

	static checkCompletion( planningItem ) {
		let numberCompleted = 0;

		planningItem.forEach( item => {
			if ( item.complete ) {
				numberCompleted++;
			}
		});

		return numberCompleted;
	}

	static updateTopLevel( changed, newValue, blueprintId ) {
		request.put(`/api/blueprint/${ blueprintId }`)
			.send({
				  changed
				, newValue
			})
			.end( ( err, blueprint ) => {
				console.log( err, blueprint );
			});
	}
}