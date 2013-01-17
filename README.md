requirejs-plugin-iframe
=======================

This is a simple requirejs plugin to execute application scripts in different web origins 

Privilege separation allows you to create large scale applications with second line of defense. It often comes with a price 
because of the SOP (Same Origin Policy) that mandates to use separate origins for each component of the application .

This plugin use the approach described in this paper: 
http://www.cs.berkeley.edu/~devdatta/LeastPrivileges.pdf
