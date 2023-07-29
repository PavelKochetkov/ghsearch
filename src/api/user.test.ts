import { getUsersByQuery } from "./user"
import { getUserByLogin } from "./user";


describe('Тестирование запросов', () => {
    test('Тестирование получения списка пользователей', async () => {
        const response = await getUsersByQuery('test', 1, 30)

        expect(response.status).toBe(200)
        expect(response.data.total_count).toBeGreaterThan(0)
        expect(response.data.items.length).toBe(30)
    })
})

describe('Тестирование запроса', () => {
    test('Тестирование получения профиля, id и login пользователя', async () => {
        const response = await getUserByLogin('test')

        expect(response.status).toBe(200)
        expect(response.data.id).toBeGreaterThan(0)
        expect(response.data.login).toBe('test')
    })
})