exports.initLocals = function(req, res, next) {
	
	var locals = res.locals;

	// setup environment variables to toggle minified/unminified scripts
  	if (RSVPSubmit == true) {
        locals.RSVPSubmit = true
    } else {
    	locals.RSVPSubmit = false  
    };

	next();
	
};