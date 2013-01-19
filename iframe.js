define(['module', 'text'],function(module, text){

	var Widget = function($text){

		//config should be strings
		var config = module.config(),
			policy = config.policy || "script-src 'none';default-src 'self'",
			sandbox = config.sandbox || "allow-scripts",
			baseUrl = config.baseUrl || ".";
		
		var content = "<html><head>";
		content += '<meta http-equiv="X-WebKit-CSP" content="'+ policy +'">';
		content += '<meta http-equiv="X-Content-Security-Policy" content="'+ policy +'">';
		content += '<meta http-equiv="Content-Security-Policy" content="'+ policy +'">';
		content += "<base href='" + baseUrl + "'>";

		content += $text;

		content = encodeURIComponent(content);

		var _iframe = document.createElement("iframe");
		_iframe.src = "data:text/html;charset=utf-8," + content;
		_iframe.setAttribute('sandbox', sandbox);


		this.root = function(){
			return _iframe;
		};

		this.place = function(dom){
			dom.appendChild(_iframe);
		};
	};

	return {
		load : function(name, req, load, config){
			//normalize?
			text.get(req.toUrl(name), function(data){
				load(new Widget(data));
			});
		}
	};

});