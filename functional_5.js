

function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
 		return submittedUsers.every(user => goodUsers.map(verUser => verUser.id).includes(user.id));
	};
 }
    
module.exports = checkUsersValid
