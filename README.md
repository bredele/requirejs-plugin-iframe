requirejs-plugin-iframe
=======================

This is a simple requirejs plugin to execute application scripts in different web origins.

Privilege separation allows you to create large scale applications with second line of defense. It often comes with a price 
because of the SOP (Same Origin Policy) that mandates to use separate origins for each component of the application .

This plugin use the approach described in this paper: 
http://www.cs.berkeley.edu/~devdatta/LeastPrivileges.pdf


## Documentation

check the `examples` folder. All the info you probably need will be inside
comments or on the example code itself.

Note : Cross origin requests are only supported for HTTP, so put examples into a web server in order to test them.


## Basic usage

Let's assume you put the plugins inside the `baseUrl` folder or create an alias to the plugin location:

The iframe plugin use the requirejs-text plugin to load your iframe HTML content.

```js
require.config({
    paths : {
        iframe: 'lib/requirejs-plugin-iframe/iframe',
        //paths allows you to put your plugins wherever you want
        text: 'lib/requirejs-plugin-iframe/lib/text'
    }
});

//use plugins as if they were at baseUrl
define([
        'iframe!examples/iframe.html'
    ], function(iframe){
        //use the iframe object to place your sandboxed iframe.
    }
);
```

## Notes about the iframe plugin

The iframe plugin can be configured through requirejs config:
   - policy key is the content policy security (see http://www.w3.org/TR/CSP/)
   - sandbox key is the iframe restrictions (http://www.w3schools.com/html5/att_iframe_sandbox.asp)
   - baseUrl is your application origin

Example build settings:

```js
({
    baseUrl : './',
    config : {
        iframe : {
        	//content-security-policy
        	policy : "",
        	// iframe sandbox attribute
        	sandbox : "allow-scripts",
        	//the base origin
        	baseUrl : "."
    	}
    },
    paths : {
        iframe : 'lib/requirejs-plugin-iframe/iframe',
        text : 'lib/requirejs-plugin-iframe/text',
    },
})
```
