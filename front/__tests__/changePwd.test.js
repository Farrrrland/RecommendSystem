import $func from '../src/api/changePwd'

describe("test changePwd logic", ()=> {

    test('wrong old password', done =>  {
        var obj = {
            uid: '17',
            old_password:'wrongpwd',
            new_password: 'PasswordChangeTest'
        }
        function callback_func (res) {
            expect(res).toBe(0)
            done()
        }
        $func.changePassword(obj, callback_func)
    })
    test('no oldpassword', done =>  {
        var obj = {
            uid: '17',
            old_password:null,
            new_password: 'PasswordChangeTest'
        }
        function callback_func (res) {
            expect(res).toBe(0)
            done()
        }
        $func.changePassword(obj, callback_func)
    })
    test('no newpassword', done =>  {
        var obj = {
            uid: '17',
            old_password:'APITest',
            new_password: null
        }
        function callback_func (res) {
            expect(res).toBe(0)
            done()
        }
        $func.changePassword(obj, callback_func)
    })

    // test('change success', done =>  {
    //     var obj = {
    //         uid: '17',
    //         old_password:'APITest',
    //         new_password: 'PasswordChangeTest'
    //         // old_password:'PasswordChangeTest',
    //         // new_password: 'APITest'
    //     }
    //     function callback_func (res) {
    //         expect(res).toBe(1)
    //         done()
    //     }
    //     $func.changePassword(obj, callback_func)
    // })
})

