// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

process.env.DEBUG = 'actions-on-google:*';
const Assistant = require('actions-on-google').ApiAiAssistant;

// [START YourAction]
exports.yourAction = (req, res) => {
  const assistant = new Assistant({request: req, response: res});
  console.log('Request headers: ' + JSON.stringify(req.headers));
  console.log('Request body: ' + JSON.stringify(req.body));

  // Fulfill action business logic
  function responseHandler (assistant) {
    // Complete your fulfillment logic and send a response
    assistant.tell('Hello, World!');
  }

  const actionMap = new Map();
  actionMap.set('find_trash_day', responseHandler);

  assistant.handleRequest(actionMap);
};
// [END YourAction]

// 'use strict';

// const express = require('express');
// const bodyParser = require('body-parser');


// const restService = express();
// restService.use(bodyParser.json());

// restService.post('/hook', function (req, res) {

//     console.log('hook request');

//     try {
//         var speech = 'empty speech';

//         if (req.body) {
//             var requestBody = req.body;

//             if (requestBody.result) {
//                 speech = '';

//                 if (requestBody.result.fulfillment) {
//                     speech += requestBody.result.fulfillment.speech;
//                     speech += ' ';
//                 }

//                 if (requestBody.result.action) {
//                     speech += 'action: ' + requestBody.result.action;
//                 }
//             }
//         }

//         console.log('result: ', speech);

//         return res.json({
//             speech: speech,
//             displayText: speech,
//             source: 'apiai-webhook-sample'
//         });
//     } catch (err) {
//         console.error("Can't process request", err);

//         return res.status(400).json({
//             status: {
//                 code: 400,
//                 errorType: err.message
//             }
//         });
//     }
// });

// restService.listen((process.env.PORT || 5000), function () {
//     console.log("Server listening");
// });