export default function request(url, data, method = 'GET') {
    return new Promise((resolve, reject) => {
        uni.request({
            url,
            method,
            data,
            success: res => {
                if (res.statusCode === 200) {
                    resolve(res.data)
                } else {
                    reject(res.errMsg)
                }
            },
            fail: err => {
                reject(err.errMsg)
            }
        })
    })
}







