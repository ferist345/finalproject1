const getCurrentDate = () => {
    const now = new Date()
    const yr = now.getFullYear()
    const mon = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hr = String(now.getHours()).padStart(2, '0')
    const mi = String(now.getMinutes()).padStart(2, '0')
    const s = String(now.getSeconds()).padStart(2, '0')

    return `${yr}-${mon}-${day} ${hr}:${mi}`;
}