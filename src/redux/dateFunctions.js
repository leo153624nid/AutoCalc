// Получение текущей даты в мс
export const getNowDateMS = () => {
    const now = new Date()
    return now.getTime()
}

// Перевод даты в мс
export const getDate = (time) => time.getTime()

// Перевод даты в ДД.ММ.ГГГГ
export const getThisDate = (timestamp) => new Date(timestamp)
