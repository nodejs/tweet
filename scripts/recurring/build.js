const writeTweet = require('../writeTweet')

const type = 'build'

const tweet = `Thanks those that provide infrastructure to the Build WG:

Tier 1:
✨ @digitalocean
✨ @Rackspace

Tier 2:
@Microsoft, @joyent, @IBM, @MacStadium, @Scaleway, @arm, @Cloudflare, @osuosl, @packethost, @intel

More details:
https://github.com/nodejs/build`

writeTweet(type, tweet)
