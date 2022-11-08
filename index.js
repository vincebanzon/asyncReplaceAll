console.log('hello')

async function asyncReplaceAll(resolve, reject) {
	try {
		setTimeout(() => {
			resolve('ok')
		}, 2000)
	} catch (err) {
		reject('Error')

	}
}

function ReplaceAllPromise() {
	return new Promise(asyncReplaceAll)
}

ReplaceAllPromise().then(() => {

	console.log('a')
})