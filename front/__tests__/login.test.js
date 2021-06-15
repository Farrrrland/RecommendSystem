import {sum} from '../src/api/test/add'
import $login_func from '../src/api/test/login'

test('测试sum函数 1 加 2 等于 3',()=>{
    expect(sum(1,2)).toBe(3)
})

describe("test login logic", ()=> {
    test('successful login', done =>  {
        var obj = {
            user_name: 'evelyn',
            password: 'evelyn'
        }
        function callback_func (res) {
            console.log("got feedback")
            // console.log(res)
            // expect(res.data[0]).toBe(200)
            expect(res).toBe(1)
            done()
        }
        $login_func.userLogin(obj, callback_func)
    })

    test('wrong password login', done =>  {
        var obj = {
            user_name: 'evelyn',
            password: 'evely'
        }
        function callback_func (res) {
            expect(res).toBe(0)
            done()
        }
        $login_func.userLogin(obj, callback_func)
    })
    test('wrong username login', done =>  {
        var obj = {
            user_name: 'somebody',
            password: 'anything'
        }
        function callback_func (res) {
            expect(res).toBe(0)
            done()
        }
        $login_func.userLogin(obj, callback_func)
    })
})

