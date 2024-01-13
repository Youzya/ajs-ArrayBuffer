const Daemon = require('../Daemon.js');
// import Daemon from "./Daemon"

test('Проверка атаки без дурмана в зависимости от расстояния', () => {
    const result = new Daemon ('Joy');
    expect(result.attackDistance(2)).toBe(9)
})

test('Проверка атаки с дурманом', () => {
    const result = new Daemon ('Joy');
    result.stoned = true
    expect(result.attackDistance(2)).toBe(5)
})
