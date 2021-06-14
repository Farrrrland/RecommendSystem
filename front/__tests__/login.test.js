import {sum} from '../src/api/add'
import $login_func from '../src/api/login'

test('测试sum函数 1 加 2 等于 3',()=>{
    expect(sum(1,2)).toBe(3)
})

test('evelyn login', done =>  {
    var obj = {
        user_name: 'evelyn',
        password: 'evelyn'
    }
    function callback_func (res) {
        console.log("got feedback")
        // console.log(res)
        expect(res.data[0]).toBe(200)
        done()
    }
    $login_func.userLogin(obj, callback_func)
})