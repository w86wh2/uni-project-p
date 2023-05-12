export function debounce(func, wait = 600, immediate) {
    let timeout
    let callNow = immediate

    if (callNow) {
        let flag = true
        return (...args) => {
            const context = this
            if (timeout) clearTimeout(timeout)
            if (flag) {
                func.apply(context, args)
                callNow = false
                flag = false
            }
            timeout = setTimeout(() => {
                flag = true
            }, wait)
        }
    }

    return (...args) => {
        const context = this

        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            func.apply(context, args)
        }, wait)
    }
}