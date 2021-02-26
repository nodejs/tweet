const fs = require('fs')
const path = require('path')

// will write a .tweet file to the filesystem
// in the /tweets/ directory
//
// takes in a 'type' which should be a unique identifier
// that describes the purpose or intent
function writeTweet (type, tweet) {
  const date = new Date().toISOString().split('T')[0] // gives us YYYY-MM-DD
  const filename = `${type}-${date}.tweet`

  fs.writeFileSync(path.join(__dirname, `../tweets/${filename}`), tweet) // writes the file and contents to the appropriate place on-disk
}

module.exports = writeTweet
