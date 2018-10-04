module.exports = {

    confirmUsername: (username) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    id
                FROM editor
                WHERE username = ?
            `;

            db.query(sql, [username], function (err, result) {
                resolve(result);
            });
        })
    },
    confirmUserPswd: (username, password) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT COUNT(*) as 'user'
                FROM editor
                WHERE password = ?
                AND username = ?
            `;

            db.query(sql, [password, username], function (err, result) {
                resolve(result);
            });
        })
    },
    createToken: (token, userId) => {
        return new Promise((resolve, reject) => {
            let sql = `
                INSERT INTO login_token
                VALUES ('', ?, ?)
            `;

            db.query(sql, [token, userId], function (err, result) {
                resolve(result);
            });
        })
    },
    removeToken: (userId) => {
        return new Promise((resolve, reject) => {
            let sql = `
                DELETE FROM login_token
                WHERE user_id = ?
            `;

            db.query(sql, [userId], function (err, result) {
                resolve(result);
            });
        })
    },
    confirmToken: (token, userId) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT COUNT(*) as 'token'
                FROM login_token
                WHERE token = ?
                AND user_id = ?
            `;

            db.query(sql, [token, userId], function (err, result) {
                resolve(result);
            });
        })
    },
    userData: (userId) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    f_name,
                    l_name,
                    image,
                    about,
                    username,
                    email,
                    role_fk,
                    category_fk
                FROM editor
                WHERE id = ?
            `;

            db.query(sql, [userId], function (err, result) {
                resolve(result);
            });
        })
    },
    articlesAll: () => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    *
                FROM article
                ORDER BY category_fk DESC
            `;

            db.query(sql, function (err, result) {
                resolve(result);
            });
        })
    },
    articlesCat: (catId) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    *
                FROM article
                WHERE category_fk = ?
            `;

            db.query(sql, [catId], function (err, result) {
                resolve(result);
            });
        })
    },
    categoryAll: () => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    *
                FROM category
                WHERE name != 'all'
            `;

            db.query(sql, function (err, result) {
                resolve(result);
            });
        })
    },
    updateArticle: (artId, artCat, artTit, artTxt) => {
        return new Promise((resolve, reject) => {
            let sql = `
                UPDATE article
                SET title = ?, article = ?, category_fk = ?
                WHERE id = ?
            `;

            db.query(sql, [artTit, artTxt, artCat, artId], function (err, result) {
                resolve(result);
            });
        })
    },
    deleteArticle: (artId) => {
        return new Promise((resolve, reject) => {
            let sql = `
                DELETE FROM article
                WHERE id = ?
            `;

            db.query(sql, [artId], function (err, result) {
                resolve(result);
            });
        })
    }
}