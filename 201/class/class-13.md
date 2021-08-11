# Class Thirteen

[Local Storage](http://diveinto.html5doctor.com/storage.html)

HTML Storage is a way for web pages to store key/value pairs locally, within the client web browser. The data persists even after you navigate away from the page, close your browser, etc. It's not transmitted to a remote web server like cookies are, and is available even when third-party browser plug-ins are not. 

The data can be any type supported by JavaScript but is usually stored as a string. "If you are storing something other than a string, you’ll need to coerce it yourself when you retrieve it."

You can keep track of when the storage area changes by "trapping the storage event".