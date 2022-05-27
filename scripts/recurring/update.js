const writeTweet = require('../writeTweet')

const warningDayOffsets = {
  lts: [90, 30, 7, 0],
  maintenance: [90, 30, 7, 3, 0],
  end: [30, 7, 3, 0]
}

const statusMessage = {
  lts: 'enters LTS',
  maintenance: 'enters maintenance',
  end: 'is end-of-life'
}

function warningMessage (warning) {
  return [
    warning.version,
    statusMessage[warning.type],
    warning.days ? `in ${warning.days} days` : 'today'
  ].join(' ')
}

fetch('https://raw.githubusercontent.com/nodejs/Release/main/schedule.json')
  .then(data => data.json())
  .catch(() => ({}))
  .then(schedules => {
    const warnings = []

    for (const [version, schedule] of Object.entries(schedules)) {
      for (const [type, dayOffsets] of Object.entries(warningDayOffsets)) {
        for (const days of dayOffsets) {
          const d = new Date()
          d.setUTCHours(0, 0, 0, 0)
          d.setDate(d.getDate() + days)

          if (d.getTime() === Date.parse(schedule[type])) {
            warnings.push({
              lts: Object.hasOwn(schedule, 'lts'),
              version,
              type,
              days
            })
          }
        }
      }
    }

    if (!warnings.length) return

    const tweet = `It might be time to update your Node.js! ⏰
    
${warnings.map(warningMessage).join('\n')}`

    writeTweet('eol', tweet)
  })
