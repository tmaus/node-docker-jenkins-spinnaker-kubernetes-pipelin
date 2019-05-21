

module.exports = {
    FriendsCache: [],

    addFriend: (req, res, next) => {
        const { label } = req.body
        if( !label ) {
            return next(Error('label missing'))
        }
        const friend = module.exports.FriendsCache.find( _ => _=== label)
        if(friend) {
            return next(Error('label duplicate'))
        }
        module.exports.FriendsCache.push(label)
        next()
    },

    findAllFriends: (req, res, next) => {
        req.friends = module.exports.FriendsCache
        next()
    }
}