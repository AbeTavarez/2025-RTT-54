


function getAllUsers(req, res) {
    res.send('Sending all users...');
}

function getUserById(req, res) {
    res.send(`Data for user: ${req.params.id}`)
}

module.exports = {
    getAllUsers,
    getUserById,
};
