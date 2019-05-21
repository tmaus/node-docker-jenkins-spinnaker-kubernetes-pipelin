const { expect, assert } = require('chai')

const mw = require('../middlewares/myMiddleware')

describe('MyMiddleware tests', function() {
  
    describe('#addFriend', () => {
        it('add friend successfull to cache', () => {
            mw.addFriend( { body: {  label: 'A friend' } } , {}, (e,r) => {
                expect(e).is.undefined
            })            
        })
        it('add friend failing with missing label', () => {
            mw.addFriend( { body: '' } , {}, (e,r) => {
                expect(e).instanceOf(Error).with.property('message').eq('label missing')
            })
        })


  })
})