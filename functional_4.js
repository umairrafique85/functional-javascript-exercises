

function getShortMessages(messages) {
	return messages.map(obj => obj.message).filter(mess => mess.length<50);
}

module.exports = getShortMessages
