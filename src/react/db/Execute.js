export const execute = async (db, sql, params = []) => {
    if (params && params.length > 0) {
        return new Promise((resolve, reject) => {
            db.run(sql, params, function (err) {
                if (err) {
                    reject(err)
                } else {
                    resolve(this)
                }
            })
        })
    }

    return new Promise((resolve, reject) => {
        db.exec(sql, function (err) {
            if (err) {
                reject(err)
            } else {
                resolve(this)
            }
        })
    })
}