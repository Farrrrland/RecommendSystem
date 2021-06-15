import $func from '../src/api/test/getData'
describe("test getData logic", ()=> {

    test('display all', done =>  {
        var obj = {
            uid: null,
            fid: null
        }
        function callback_func (res) {
            expect(res).toBe(200)
            done()
        }
        $func.getLike(obj, callback_func)
    })
    test('display food 34', done =>  {
        var obj = {
            uid: null,
            fid: '34'
        }
        function callback_func (res) {
            expect(res).toBe(200)
            done()
        }
        $func.getLike(obj, callback_func)
    })
    test('display for user 6', done =>  {
        var obj = {
            uid: '6',
            fid: null
        }
        function callback_func (res) {
            expect(res).toBe(200)
            done()
        }
        $func.getLike(obj, callback_func)
    })
    test('display food 24 for user 6', done =>  {
        var obj = {
            uid: '6',
            fid: '24'
        }
        function callback_func (res) {
            expect(res).toBe(200)
            done()
        }
        $func.getLike(obj, callback_func)
    })
})

