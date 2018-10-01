module.exports = {

    bicycleColor: (bicycleId) => {

        return new Promise((resolve, reject) => {
            let sql = `
                SELECT 
                bicycle_color.color,
                bicycle_color.image
                FROM bicycle_color
                INNER JOIN color_relation ON bicycle_color.id = color_relation.color_fk
                WHERE color_relation.bicycle_fk = ?
            `;

            db.query(sql, [bicycleId], function (err, result) {
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
    }
}