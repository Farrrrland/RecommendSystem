import $func from '../src/api/like'

describe("test addLike logic", ()=> {
    test('no uid', done =>  {
        var obj = {
            uid: null,
            fid: '39'
        }
        function callback_func (res) {
            expect(res).toBe(0)
            done()
        }
        $func.addToLike(obj, callback_func)
    })
    test('no fid', done =>  {
        var obj = {
            uid: '6',
            fid: null
        }
        function callback_func (res) {
            expect(res).toBe(0)
            done()
        }
        $func.addToLike(obj, callback_func)
    })
    test('success', done =>  {
        var obj = {
            // uid: '4',
            uid: '6',
            fid: '39'
        }
        function callback_func (res) {
            expect(res).toBe(1)
            done()
        }
        $func.addToLike(obj, callback_func)
    })
})

