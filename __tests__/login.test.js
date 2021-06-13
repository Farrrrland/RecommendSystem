import {sum} from '../src/api/add'
import {userLogin} from '../src/api/login'

test('测试sum函数 1 加 2 等于 3',()=>{
    expect(sum(1,2)).toBe(3)
})

test('evelyn login', ()=>{
    var obj = {}
    obj.user_name = 'evelyn'
    obj.password = 'evelyn'
    expect(userLogin(obj)).toBe(1)

})