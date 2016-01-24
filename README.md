# Testing Express x-powered-by

Trying to disable the x-powered-by header in express 5.

Problem I am finding in creating sub-apps is that when disabling the 'x-powered-by' header in the
parent' app the setting does not follow through to the sub app when mounted. Same problem on [Stack Overflow](http://stackoverflow.com/questions/14285050/broke-up-express-app-into-submodules-now-my-custom-x-powered-by-does-not-wor) supposed to be fixed [here](https://github.com/strongloop/express/commit/fa8eec449bf406cebd7a92d376a098a39a804879)?

