import { Map } from 'immutable';

const initialState = Map({
	  blueprintModal: false
	, planningItemModal: Map({
		  toggled: false
		, item: Map()
	})
});

const TOGGLE_BLUEPRINT_MODAL = `modals/OPEN_BLUEPRINT_MODAL`;
const TOGGLE_PLANNING_ITEM_MODAL = `modals/TOGGLE_PLANNING_ITEM_MODAL`;

export default ( state = initialState, action ) => {
	switch( action.type ) {
		case TOGGLE_BLUEPRINT_MODAL:
			return state.set( `blueprintModal`, action.status );
		case TOGGLE_PLANNING_ITEM_MODAL:
			return state.set( `planningItemModal`, action.planningItem );
	}
	return state;
}

export function toggleBlueprintModal( status ) {
	return { type: TOGGLE_BLUEPRINT_MODAL, status }
}

export function togglePlanningItemModal( item, toggled ) {
	return {
		  type: TOGGLE_PLANNING_ITEM_MODAL
		, planningItem: Map({ toggled, item })
	}
}