var article = require('../services/article');

module.exports = function (app) {

    app.get('/', (req, res) => {
        res.render('pages/index');
    }); // index

    // ---------- GET data ----------

    app.get('/articles/newest/:id', async (req, res) => {
        let articleLimit = req.params.id;
        let articlesRes = await article.articleNewestLimit(Number(articleLimit));
        res.send(articlesRes);
    }); // return articles sorted by newest with a limit

    app.get('/articles/viewed/:id', async (req, res) => {
        let articlesViLimit = req.params.id;
        let articlesViewRes = await article.articleViewedLimit(Number(articlesViLimit));
        res.send(articlesViewRes);
    }); // return articles sorted by most viewed with a limit

    app.get('/comments/count/:id', async (req, res) => {
        let articleId = req.params.id;
        let commentCountRes = await article.commentCount(Number(articleId));
        res.send(commentCountRes);
    }); // return comments as number

    app.get('/sponsors/random/:id', async (req, res) => {
        let sponsorLimit = req.params.id;
        let sponsorRes = await article.sponsorRandom(Number(sponsorLimit));
        res.send(sponsorRes);
    }); // return sponsors by random with a limit

    app.get('/navigation/all', async (req, res) => {
        let navRes = await article.navigationAll();
        res.send(navRes);
    }); // return enitre navigation

};