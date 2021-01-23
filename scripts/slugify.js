const slugify = require('slugify')
const readline = require('readline')

const newInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

newInterface.question(`Title?: `, (title) => {
	const slug = slugify(title, {
	  replacement: '-',
	  remove: '/!',
	  lower: true,
	  strict: true,
	})
    console.log(`URL Slug: ${slug}`)
  newInterface.close()
})
