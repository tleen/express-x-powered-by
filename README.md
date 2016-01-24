# Testing Express x-powered-by

See strongloop/express#2865

Trying to disable the x-powered-by header in express 5.

Problem I am finding in creating sub-apps is that when disabling the 'x-powered-by' header in the
parent' app the setting does not follow through to the sub app when mounted. Same problem on [Stack Overflow](http://stackoverflow.com/questions/14285050/broke-up-express-app-into-submodules-now-my-custom-x-powered-by-does-not-wor) supposed to be fixed [here](https://github.com/strongloop/express/commit/fa8eec449bf406cebd7a92d376a098a39a804879)?


If you start the server:

```shell
npm install
node .
```

[http://localhost:8080](http://localhost:8080) - will disable the express header

[http://localhost:8080/test](http://localhost:8080/test) - will not disable the express header
