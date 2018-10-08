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
    },
    rolesAll: () => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    *
                FROM role
            `;

            db.query(sql, function (err, result) {
                resolve(result);
            });
        })
    },
    updateEditor: (ediId, ediFName, ediLName, ediCat, ediRole, ediText) => {
        return new Promise((resolve, reject) => {
            let sql = `
                UPDATE editor
                SET f_name = ?, l_name = ?, about = ?, role_fk = ?, category_fk = ?
                WHERE id = ?
            `;

            db.query(sql, [ediFName, ediLName, ediText, ediRole, ediCat, ediId], function (err, result) {
                resolve(result);
            });
        })
    },
    removeEditor: (ediId) => {
        return new Promise((resolve, reject) => {
            let sql = `
                DELETE FROM editor
                WHERE id = ?
            `;

            db.query(sql, [ediId], function (err, result) {
                resolve(result);
            });
        })
    },
    updateNavCar: (car) => {
        return new Promise((resolve, reject) => {
            let sql = `
                UPDATE navigation
                SET sorted = ?
                WHERE id = 2
            `;

            db.query(sql, [car], function (err, result) {
                resolve(result);
            });
        })
    },
    updateNavBoat: (boat) => {
        return new Promise((resolve, reject) => {
            let sql = `
                UPDATE navigation
                SET sorted = ?
                WHERE id = 3
            `;

            db.query(sql, [boat], function (err, result) {
                resolve(result);
            });
        })
    },
    updateNavBike: (bike) => {
        return new Promise((resolve, reject) => {
            let sql = `
                UPDATE navigation
                SET sorted = ?
                WHERE id = 4
            `;

            db.query(sql, [bike], function (err, result) {
                resolve(result);
            });
        })
    },
    commentsAll: () => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    *
                FROM comments
            `;

            db.query(sql, function (err, result) {
                resolve(result);
            });
        })
    },
    removeComment: (commId) => {
        return new Promise((resolve, reject) => {
            let sql = `
                DELETE FROM comments
                WHERE id = ?
            `;

            db.query(sql, [commId], function (err, result) {
                resolve(result);
            });
        })
    },
    messagesAll: () => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    *
                FROM messages
            `;

            db.query(sql, function (err, result) {
                resolve(result);
            });
        })
    },
    removeMessage: (messId) => {
        return new Promise((resolve, reject) => {
            let sql = `
                DELETE FROM messages
                WHERE id = ?
            `;

            db.query(sql, [messId], function (err, result) {
                resolve(result);
            });
        })
    },
    sponsorAll: () => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    *
                FROM sponsors
            `;

            db.query(sql, function (err, result) {
                resolve(result);
            });
        })
    },
    removeSponsor: (spoId) => {
        return new Promise((resolve, reject) => {
            let sql = `
                DELETE FROM sponsors
                WHERE id = ?
            `;

            db.query(sql, [spoId], function (err, result) {
                resolve(result);
            });
        })
    },
    addSponsor: (imgName, company, category) => {
        console.log(imgName);
        return new Promise((resolve, reject) => {
            let sql = `
                INSERT INTO sponsors
                VALUES ('', ?, ?, ?)
            `;

            db.query(sql, [company, imgName, category], function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    if(result.length > 0) {
                        resolve(result);
                    } else {
                        resolve({"message":"none"});
                    }
                }
            });
        })
    },
    addArticle: (editorId, artCat, artTit, artText, artTime) => {
        return new Promise((resolve, reject) => {
            let sql = `
                INSERT INTO article
                VALUES ('', ?, ?, ?, '0', ?, ?)
            `;

            db.query(sql, [artTit, artText, artTime, artCat, editorId], function (err, result) {
                resolve(result);
            });
        })
    },
    addEditor: (imageName, name, lastname, username, password, role, category, email, about, time) => {
        return new Promise((resolve, reject) => {
            let sql = `
                INSERT INTO editor
                VALUES ('', ?, ?, ?, ?, ?, ?, ?, ?, '1', ?, ?)
            `;

            db.query(sql, [name, lastname, imageName, about, username, password, email, time, role, category], function (err, result) {
                resolve(result);
            });
        })
    },
    updateAbout: (street, zip, city, country, phone, fax, email) => {
        return new Promise((resolve, reject) => {
            let sql = `
                UPDATE about
                SET street = ?, zip_code = ?, city = ?, country = ?, phone = ?, fax = ?, email = ?
                WHERE id = 1
            `;

            db.query(sql, [street, zip, city, country, phone, fax, email], function (err, result) {
                resolve(result);
            });
        })
    },
    updateUser: (userid, username, fname, lname, email) => {
        return new Promise((resolve, reject) => {
            let sql = `
                UPDATE editor
                SET f_name = ?, l_name = ?, username = ?, email = ?
                WHERE id = ?
            `;

            db.query(sql, [fname, lname, username, email, userid], function (err, result) {
                resolve(result);
            });
        })
    }
}