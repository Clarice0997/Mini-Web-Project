// 定义常量
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circle = document.querySelectorAll('.circle')

var currentActive = 1

// next按钮点击事件
next.addEventListener('click', () => {
    // 变量增加
    currentActive++
    // 矫正超出数组范围
    if (currentActive > circle.length) {
        currentActive = circle.length
    }
    // 执行函数update()
    update()
})

// prev按钮点击事件
prev.addEventListener('click', () => {
    // 变量增加
    currentActive--
    // 矫正超出数组范围
    if (currentActive < 1) {
        currentActive = 1
    }
    // 执行函数update()
    update()
})

// update()函数
function update() {
    // forEach(currentValue, index, arr)调用数组的每个元素，并将元素传递给回调函数
    // currentValue 必需 当前元素
    // index 可选 当前元素的索引值
    // arr 	可选 当前元素所属的数组对象
    circle.forEach((circle, index) => {
        // 判断元素在数组中的索引值是否小于当前激活数 如果是，则为circle元素添加active类名 样式发生改变
        if (index < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    // 定义数组记录所有拥有active类名的元素
    const actives = document.querySelectorAll('.active')

    // 圈与圈连接线样式发生改变
    progress.style.width = (actives.length - 1) / (circle.length - 1) * 100 + '%'

    console.log(currentActive)
    // 判断是否按钮是否激活
    // ===:不做类型转换，类型不同的一定不等
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circle.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
