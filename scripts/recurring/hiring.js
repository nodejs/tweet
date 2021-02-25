const writeTweet = require('../writeTweet')

const type = 'hiring'

const tweet = `Are you currently hiring for a role that includes using Node.js? Reply with a link to the opening and any relevant context.

If you're not, we'd appreciate a retweet for visibility 💚`

writeTweet(type, tweet)