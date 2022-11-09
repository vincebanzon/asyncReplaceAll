
let replaceFrom = ''
let replaceTo = ''
let myLongString = "<h1>What is Encryption?</h1><p>The <a target=\"_blank\" href=\"https://csrc.nist.gov/glossary/term/encryption\">Computer Security Resource Center</a> (CSRC) describes encryption as the:</p><p>“transformation of data (called “plaintext”) into a form (called “ciphertext”) that conceals the data’s original meaning to prevent it from being known or used.”</p><p>At a basic level, encryption is the process of scrambling data so that it can only be read by its intended recipient. That person who has the means to return the data to its original state, ie. the password or decryption key. </p><h2>How Encryption Works</h2><p>Encryption is a rather complicated topic but for the sake of your own sanity (and our writer’s), we’re going to keep this nice and simple. </p><p>Encryption takes plain text data, like a text message or an email for example, and uses complex algorithms to encrypt that data by turning it into an <strong>unreadable format</strong>, or “cipher text”.</p><p>When the intended recipient opens the text or email, the cipher text is decrypted and translated back into its original readable form. Should an unauthorized person try to intercept the message, they won’t be able to decipher its content.</p><h2>What is Encryption Used For?</h2><p>Encryption technology enables the safe storage of sensitive information on a computer system. This type of encryption is known as “Data at Rest Encryption” (DARE). It also protects data while it is being transmitted between networks, known as “In Transit Encryption”. </p><p>These two functions are what make business operations, communications, and internet usage safer for all users.</p><p>Encryption technology is crucial for multiple industries from technology to retail, financial services, healthcare, tourism, and so many more. It helps them safeguard their hard drives, email inboxes, computers, networks, individual folders, file transfers, and portable devices. </p><p>Using encryption businesses can benefit from the following:</p><p><ul><li><strong>Data integrity</strong>: With encryption, you can be sure that private data has been kept secure and hasn’t been tampered with.</li><li><strong>Authentication</strong>: Using encrypted communication channels ensures that we are communicating with the real and intended person.</li><li><strong>Non-repudiation</strong>: Encryption provides the sender with proof of delivery and the recipient proof of the sender’s identity.</li></ul></p><span>Hoody blog</a>.</strong></p><p></p>"
myLongString = "Hello&nbspWorld!\n"
myLongString += "<b>Bold text</b>\n"
myLongString += "<a href='https://hoody.com'>Hyperlink </a>\n"
// myLongString += "style"
myLongString += "<p>Double  space</p>\n"
myLongString += "<p >Tag space </p >\n"
myLongString += "< p>Tag space </p>\n"
myLongString += "<p>Double next\\nline</p>\n"
myLongString += "<p>Next\nline</p>"
myLongString += " <p>Trim</p>"

// myLongString = "<b>What is Encryption?</b><p>The <a target=\"_blank\" href=\"https://csrc.nist.gov/glossary/term/encryption\">Computer Security Resource Center</a> (CSRC) describes encryption as the:</p><p>“transformation of data (called “plaintext”) into a form (called “ciphertext”) that conceals the data’s original meaning to prevent it from being known or used.”</p><p>At a basic level, encryption is the process of scrambling data so that it can only be read by its intended recipient. That person who has the means to return the data to its original state, ie. the password or decryption key. </p><h2>How Encryption Works</h2><p>Encryption is a rather complicated topic but for the sake of your own sanity (and our writer’s), we’re going to keep this nice and simple. </p><p>Encryption takes plain text data, like a text message or an email for example, and uses complex algorithms to encrypt that data by turning it into an <strong>unreadable format</strong>, or “cipher text”.</p><p>When the intended recipient opens the text or email, the cipher text is decrypted and translated back into its original readable form. Should an unauthorized person try to intercept the message, they won’t be able to decipher its content.</p><h2>What is Encryption Used For?</h2><p>Encryption technology enables the safe storage of sensitive information on a computer system. This type of encryption is known as “Data at Rest Encryption” (DARE). It also protects data while it is being transmitted between networks, known as “In Transit Encryption”. </p><p>These two functions are what make business operations, communications, and internet usage safer for all users.</p><p>Encryption technology is crucial for multiple industries from technology to retail, financial services, healthcare, tourism, and so many more. It helps them safeguard their hard drives, email inboxes, computers, networks, individual folders, file transfers, and portable devices. </p><p>Using encryption businesses can benefit from the following:</p><p><ul><li><strong>Data integrity</strong>: With encryption, you can be sure that private data has been kept secure and hasn’t been tampered with.</li><li><strong>Authentication</strong>: Using encrypted communication channels ensures that we are communicating with the real and intended person.</li><li><strong>Non-repudiation</strong>: Encryption provides the sender with proof of delivery and the recipient proof of the sender’s identity.</li></ul></p><span>Hoody blog</a>.</strong></p><p></p>"

/**
            .replaceAll('&nbsp;', ' ')
            .replaceAll('<b>', '<strong>')
            .replaceAll('</b>', '</strong>')
            .replaceAll('<a ', '<a target="_blank" ')
            .replaceAll(/style=\".*"/gm,'')
            .replaceAll('  ', ' ')
            .replaceAll(' >', '>')
            .replaceAll('< ', '<')
            .replaceAll('\\\n', '')
            .replaceAll('\n', '')
            .trim();

 */

async function asyncReplaceAll(resolve, reject) {
	try {
			resolve(await myLongString.replaceAll(replaceFrom, replaceTo))
	} catch (err) {
		reject('Error')

	}
}

async function ReplaceAllPromise() {
	return await new Promise(asyncReplaceAll)
}

async function asyncTrim(resolve, reject) {
	try {
		resolve(await myLongString.trim())
	} catch (err) {
		reject('Error')
	}
}

async function TrimPromise() {
	return await new Promise(asyncTrim)
}

function start() {
	replaceFrom = '&nbsp'
	replaceTo = ' '
	ReplaceAllPromise().then((result) => {
		myLongString = result
		replaceFrom = '<b>'
		replaceTo = '<strong>'
		ReplaceAllPromise().then((result) => {
			myLongString = result
			replaceFrom = '</b>'
			replaceTo = '</strong>'
			ReplaceAllPromise().then((result) => {
				myLongString = result
				replaceFrom = '<a'
				replaceTo = '<a target="_blank"'
				ReplaceAllPromise().then((result) => {
					myLongString = result
					replaceFrom = '/style=\".*"/gm'
					replaceTo = ''
					ReplaceAllPromise().then((result) => {
						myLongString = result
						replaceFrom = '  '
						replaceTo = ' '
						ReplaceAllPromise().then((result) => {
							myLongString = result
							replaceFrom = ' >'
							replaceTo = '>'
							ReplaceAllPromise().then((result) => {
								myLongString = result
								replaceFrom = '< '
								replaceTo = '<'
								ReplaceAllPromise().then((result) => {
									myLongString = result
									replaceFrom = '\\n'
									replaceTo = ''
									ReplaceAllPromise().then((result) => {
										myLongString = result
										replaceFrom = '\\n'
										replaceTo = ''
										TrimPromise().then(result => {
											console.log(myLongString)
										})
									})
								})
							})
						})
					})
				})
			})
		})
	})
}

start()