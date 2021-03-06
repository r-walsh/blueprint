import passport from 'passport';

export default app => {
	app.post( `/api/signup`, passport.authenticate( `local-signup` ), passport.authenticate( `local-login` ), ( req, res ) => {
		res.send( {
			authenticated: true
			, user: {
				email: req.user.email
				, blueprints: req.user.blueprints
				, admin: req.user.admin
				, mentor: req.user.mentor
				, _id: req.user._id
			}
		} );
	} );

	app.post( `/api/login`, passport.authenticate( `local-login` ), ( req, res ) => {
		res.send( {
			  authenticated: true
			, user: {
				  email: req.user.email
				, blueprints: req.user.blueprints
				, admin: req.user.admin
				, mentor: req.user.mentor
				, _id: req.user._id
			}
		} );
	} );

	app.get( `/api/verify-auth`, ( req, res ) => {
		if ( req.user ) {
			return res.send( req.user );
		}
		return res.status( 401 ).send( false );
	} );
};