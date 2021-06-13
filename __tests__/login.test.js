import {sum} from '../src/api/add'

test('测试sum函数 1 加 2 等于 3',()=>{
    expect(sum(1,2)).toBe(3)
})