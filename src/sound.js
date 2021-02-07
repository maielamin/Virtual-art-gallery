var play = require('../node_modules/play/lib/play');

// play with a callback
play.sound('./file.mp3');
// , function(){
  
//   // these are all "fire and forget", no callback
//   play.sound('../wavs/sfx/alarm.wav');
//   play.sound('../wavs/sfx/crinkle.wav');
//   play.sound('../wavs/sfx/flush.wav');
//   play.sound('../wavs/sfx/ding.wav');
// });