/* Add leading zero */
const format = num => {
  num = num.toString()
  return num.length == 1 ? `0${num}` : num
}

const now = new Date()

const year = format(now.getFullYear())
const month = format(now.getMonth() + 1)
const day = format(now.getDate())
const date = `${year}-${month}-${day}`

const hours = format(now.getHours())
const minutes = format(now.getMinutes())
const seconds = format(now.getSeconds())
const milliseconds = format(now.getMilliseconds())
const time = `${hours}:${minutes}:${seconds}.${milliseconds}`

console.log(`${date}T${time}Z`)
