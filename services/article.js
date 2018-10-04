module.exports = {

    articleNewestLimit: (aLimit = 6) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    article.id,
                    article.title,
                    article.article,
                    article.time,
                    article.views,
                    category.name as 'category_name',
                    category.id as 'category_id'
                FROM article
                INNER JOIN category ON article.category_fk = category.id
                ORDER BY article.time DESC
                LIMIT ?
            `;

            db.query(sql, [aLimit], function (err, result) {
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
    commentCount: (articleId) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT COUNT(*) as 'comments'
                FROM comments
                WHERE article_fk = ?
            `;

            db.query(sql, [articleId], function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result);
                }
            });
        })
    },
    sponsorRandom: (spoLimit = 5) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    *
                FROM sponsors
                ORDER BY RAND() 
                LIMIT ?
            `;

            db.query(sql, [spoLimit], function (err, result) {
                if(result.length > 0) {
                    resolve(result);
                } else {
                    resolve({"message":"none"});
                }
            });
        })
    },
    articleViewedLimit: (viewLimit = 6) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    id,
                    title
                FROM article
                ORDER BY views DESC
                LIMIT ?
            `;

            db.query(sql, [viewLimit], function (err, result) {
                if(result.length > 0) {
                    resolve(result);
                } else {
                    resolve({"message":"none"});
                }
            });
        })
    },
    navigationAll: () => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    *
                FROM navigation
                ORDER BY sorted ASC
            `;

            db.query(sql, function (err, result) {
                if(result.length > 0) {
                    resolve(result);
                } else {
                    resolve({"message":"none"});
                }
            });
        })
    },
    newsLetterConfirm: (newsLetEmail) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT COUNT(*) as 'newsLetCount'
                FROM news_letter
                WHERE email = ?
            `;

            db.query(sql, [newsLetEmail], function (err, result) {
                resolve(result);
            });
        })
    },
    newsLetterAdd: (newsLetEmail) => {
        return new Promise((resolve, reject) => {
            let sql = `
                INSERT INTO news_letter
                VALUES ('', ?)
            `;

            db.query(sql, [newsLetEmail], function (err, result) {
                resolve(result);
            });
        })
    },
    newsLetterRemove: (newsLetEmail) => {
        return new Promise((resolve, reject) => {
            let sql = `
                DELETE FROM news_letter
                WHERE email = ?
            `;

            db.query(sql, [newsLetEmail], function (err, result) {
                resolve(result);
            });
        })
    },
    articleNewestCatLim: (articleCat, articleLim = 3) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    id,
                    title,
                    article,
                    time,
                    views
                FROM article
                WHERE category_fk = ?
                ORDER BY time DESC
                LIMIT ?
            `;

            db.query(sql, [articleCat, articleLim], function (err, result) {
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
    articleViewedCatLim: (articleViewCat, articleViewLim = 6) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    id,
                    title
                FROM article
                WHERE category_fk = ?
                ORDER BY views DESC
                LIMIT ?
            `;

            db.query(sql, [articleViewCat, articleViewLim], function (err, result) {
                if(result.length > 0) {
                    resolve(result);
                } else {
                    resolve({"message":"none"});
                }
            });
        })
    },
    sponsorCategory: (spoCategory, spoLimit = 5) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    *
                FROM sponsors
                WHERE category_fk = ?
                ORDER BY RAND() 
                LIMIT ?
            `;

            db.query(sql, [spoCategory, spoLimit], function (err, result) {
                if(result.length > 0) {
                    resolve(result);
                } else {
                    resolve({"message":"none"});
                }
            });
        })
    },
    articleId: (articleId) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    article.id,
                    article.title,
                    article.article,
                    article.time,
                    article.views,
                    article.editor_fk,
                    category.name as 'category_name',
                    category.id as 'category_id'
                FROM article
                INNER JOIN category ON article.category_fk = category.id
                WHERE article.id = ?
            `;

            db.query(sql, [articleId], function (err, result) {
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
    editorId: (editorId) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    f_name,
                    l_name,
                    image,
                    about
                FROM editor
                WHERE id = ?
            `;

            db.query(sql, [editorId], function (err, result) {
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
    commentsId: (articleId) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                   name,
                   comment,
                   time
                FROM comments
                WHERE article_fk = ? 
            `;

            db.query(sql, [articleId], function (err, result) {
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
    commentAdd: (commName, commMail, commMess, commeTime, commArtId) => {
        return new Promise((resolve, reject) => {
            let sql = `
                INSERT INTO comments
                VALUES ('', ?, ?, ?, ?, ?)
            `;

            db.query(sql, [commName, commMail, commMess, commeTime, commArtId], function (err, result) {
                resolve(result);
            });
        })
    },
    articleAllCount: () => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT COUNT(*) as 'articleCount'
                FROM article
            `;

            db.query(sql, function (err, result) {
                resolve(result);
            });
        })
    },
    articleOffLim: (articleOff, articleLim) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    article.id,
                    article.title,
                    article.article,
                    article.time,
                    article.views,
                    category.name as 'category_name',
                    category.id as 'category_id'
                FROM article
                INNER JOIN category ON article.category_fk = category.id
                ORDER BY article.time DESC
                LIMIT ?
                OFFSET ?
            `;

            db.query(sql, [articleLim, articleOff], function (err, result) {
                resolve(result);
            });
        })
    },
    srcAll: (srcQue, srcOff, srcLim) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    article.id,
                    article.title,
                    article.article,
                    article.time,
                    article.views,
                    category.name as 'category_name',
                    category.id as 'category_id',
                    editor.f_name,
                    editor.l_name
                FROM article
                INNER JOIN category ON article.category_fk = category.id
                INNER JOIN editor ON article.editor_fk = editor.id
                WHERE article.title LIKE '%' ? '%'
                OR article.article LIKE '%' ? '%'
                OR editor.f_name LIKE '%' ? '%'
                OR editor.l_name LIKE '%' ? '%'
                OR category.name_d LIKE '%' ? '%'
                LIMIT ?
                OFFSET ?
            `;

            db.query(sql,[srcQue, srcQue, srcQue, srcQue, srcQue, srcLim, srcOff], function (err, result) {
                resolve(result);
            });
        })
    },
    srcAllCount: (srcQue) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT COUNT(*) as 'articleCount'
                    FROM article
                INNER JOIN category ON article.category_fk = category.id
                INNER JOIN editor ON article.editor_fk = editor.id
                WHERE article.title LIKE '%' ? '%'
                OR article.article LIKE '%' ? '%'
                OR editor.f_name LIKE '%' ? '%'
                OR editor.l_name LIKE '%' ? '%'
                OR category.name_d LIKE '%' ? '%'
            `;

            db.query(sql,[srcQue, srcQue, srcQue, srcQue, srcQue], function (err, result) {
                resolve(result);
            });
        })
    },
    siteAbout: () => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    *
                FROM about
            `;

            db.query(sql, function (err, result) {
                resolve(result);
            });
        })
    },
    messageAdd: (contName, contMail, contSubj, contMess, contTime) => {
        return new Promise((resolve, reject) => {
            let sql = `
                INSERT INTO messages
                VALUES ('', ?, ?, ?, ?, ?)
            `;

            db.query(sql, [contName, contMail, contSubj, contMess, contTime], function (err, result) {
                resolve(result);
            });
        })
    },
    editorsAll: (contName, contMail, contSubj, contMess, contTime) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    *
                FROM editor
            `;

            db.query(sql, function (err, result) {
                resolve(result);
            });
        })
    },
    sponsorAbout: (contName, contMail, contSubj, contMess, contTime) => {
        return new Promise((resolve, reject) => {
            let sql = `
                SELECT
                    *
                FROM sponsor_about
            `;

            db.query(sql, function (err, result) {
                resolve(result);
            });
        })
    }
}