import $func from '../src/api/delete'

describe("test deleteLike logic", ()=> {

    test('success', done =>  {
        var obj = {
            // uid: '6',
            uid: '4',
            fid: '39'
        }
        function callback_func (res) {
            expect(res).toBe(1)
            done()
        }
        $func.deleteLike(obj, callback_func)
    })
    test('no uid', done =>  {
        var obj = {
            uid: null,
            fid: '39'
        }
        function callback_func (res) {
            expect(res).toBe(0)
            done()
        }
        $func.deleteLike(obj, callback_func)
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
        $func.deleteLike(obj, callback_func)
    })
})

