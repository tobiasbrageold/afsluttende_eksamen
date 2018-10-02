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
    }
}