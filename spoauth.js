// var http = require('http');
var headers;
var spauth = require('node-sp-auth');
var requestprom = require('request-promise');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// set account
var url = 'https://metrosystemso365.sharepoint.com/sites/SharepointDev/tmbm';

// set bodyParserls
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// set Origin
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, X-access-token");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// get Items
app.post('/get', (req, res) => {
  cookieHeader(req.body.acount, req.body.endPoint).then(function (resp) {
    requestprom.get({
      url: req.body.endPoint,
      headers: headers,
      json: true
    }).then(function (listresponse) {
      res.json(listresponse);
    }, function (listresponse) {
      res.json(listresponse);
    });

  });
});

// add Items
app.post('/add', (req, res) => {
  cookieHeader(req.body.acount, req.body.endPoint).then(async function (resp) {
      var dg = await requestprom.post({
        url: url + "/_api/contextinfo",
        headers: headers,
        json: true
      });
      headers['X-RequestDigest'] = dg.d.GetContextWebInformation.FormDigestValue;
      headers['Accept'] = 'application/json;odata=verbose';
      headers['Content-Type'] = 'application/json;odata=verbose';
      await requestprom.post({
        url: req.body.endPoint,
        headers: headers,
        body: JSON.stringify(req.body.body),
      }).then(function (listresponse) {
        res.json(JSON.parse(listresponse));
      }, function (listresponse) {
        res.json(listresponse);
      });
    },
    function (listresponse) {
      res.json(listresponse);
    });
});

app.post('/delete', (req, res) => {
  cookieHeader(req.body.acount, req.body.endPoint).then(async function (resp) {
      var dg = await requestprom.post({
        url: url + "/_api/contextinfo",
        headers: headers,
        json: true
      });
      headers['X-RequestDigest'] = dg.d.GetContextWebInformation.FormDigestValue;
      headers['IF-MATCH'] = '*';
      headers['X-HTTP-Method'] = 'DELETE';
      await requestprom.post({
        url: req.body.endPoint,
        headers: headers,
      }).then(function (listresponse) {
        res.json({});
        // res.json(JSON.parse(listresponse));
      }, function (listresponse) {
        res.json({});
        // res.json(JSON.parse(listresponse));
      });
    },
    function (listresponse) {
      res.json(listresponse);
    });
});

// get cookie test
app.get('/cookie', (req, res) => {
  res.json(headers);
});

// get getDigest test
app.get('/contextinfo', (req, res) => {
  cookieHeaders(req.body.acount, req.body.endPoint).then(async function (resp) {
    var options_1 = await requestprom.post({
      url: url + "/_api/contextinfo",
      headers: headers,
      json: true
    });
    return res.json(options_1);
  });
});

// get cookie Header function
async function cookieHeader(_account, _endPoint) {
  return await spauth.getAuth(_endPoint, {
      username: _account.username,
      password: _account.password
    })
    .then(function (options) {
      headers = options.headers;
      headers['Accept'] = 'application/json;odata=verbose';
      headers['Content-Type'] = 'application/json;odata=verbose';
    });
};

// test
async function cookieHeaders() {
  return await spauth.getAuth(url, {
      username: 'spdemo01@metrosystems.co.th',
      password: 'Admin@2018'
    })
    .then(function (options) {
      headers = options.headers;
      headers['Accept'] = 'application/json;odata=verbose';
      headers['Content-Type'] = 'application/json;odata=verbose';
    });
};

app.listen(2562, () => {
  console.log('http://localhost:2562/');
});
