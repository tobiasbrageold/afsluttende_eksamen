var article = require('../services/article');

module.exports = function (app) {

    // ---------- render ----------

    app.get('/', (req, res) => {
        res.render('pages/index');
    }); // index

    app.get('/cars', (req, res) => {
        res.render('pages/category');
    }); // cars

    app.get('/boats', (req, res) => {
        res.render('pages/category');
    }); // boats

    app.get('/bikes', (req, res) => {
        res.render('pages/category');
    }); // bikes

    app.get('/article/:id', (req, res) => {
        res.render('pages/article');
    }); // article

    app.get('/archive', (req, res) => {
        res.render('pages/archive');
    }); // archive

    // ---------- GET data ----------

    app.get('/article/data/:id', async (req, res) => {
        let articleId = req.params.id;
        let articleIdRes = await article.articleId(Number(articleId));
        res.send(articleIdRes);
    }); // return article by id

    app.get('/comments/:id', async (req, res) => {
        let commArtId = req.params.id;
        let commentsRes = await article.commentsId(Number(commArtId));
        res.send(commentsRes);
    }); // return comments by article id

    app.get('/articles/newest/:category/:limit', async (req, res) => {
        let articleCat = req.params.category;
        let articleLimit = req.params.limit;
        let articlesRes = await article.articleNewestCatLim(Number(articleCat), Number(articleLimit));
        res.send(articlesRes);
    }); // return articles sorted by newest and category with a limit

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

    app.get('/articles/viewed/:category/:limit', async (req, res) => {
        let articleViewCat = req.params.category;
        let articleViewLimit = req.params.limit;
        let articlesCatViewRes = await article.articleViewedCatLim(Number(articleViewCat), Number(articleViewLimit));
        res.send(articlesCatViewRes);
    }); // return articles sorted by most viewed and category with a limit

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

    app.get('/sponsors/:category/:limit', async (req, res) => {
        let sponsorCat = req.params.category;
        let sponsorLimit = req.params.limit;
        let sponsorCatRes = await article.sponsorCategory(Number(sponsorCat), Number(sponsorLimit));
        res.send(sponsorCatRes);
    }); // return sponsors by random with a limit and by category

    app.get('/navigation/all', async (req, res) => {
        let navRes = await article.navigationAll();
        res.send(navRes);
    }); // return enitre navigation

    app.get('/editor/:id', async (req, res) => {
        let editorId = req.params.id;
        let editorRes = await article.editorId(Number(editorId));
        res.send(editorRes);
    }); // return sponsors by random with a limit

    // ---------- newsletter ----------

    app.post('/newsletter/add', async (req, res) => {
        let newsLetEmail = req.body.email;
        let newsLetResult = await article.newsLetterConfirm(newsLetEmail);
        if(newsLetResult[0].newsLetCount == 0) {
            // email added
            let newsLetAdd = await article.newsLetterAdd(newsLetEmail);
            res.send({"message":"emailAdded"});
        } else {
            // email exist
            res.send({"message":"emailExist"});
        }
    }); // return emailAdded or emailExist

    app.delete('/newsletter/remove', async (req, res) => {
        let newsLetEmail = req.body.email;
        let newsLetResult = await article.newsLetterConfirm(newsLetEmail);
        if(newsLetResult[0].newsLetCount == 0) {
            // email dosen't exist
            res.send({"message":"emailNone"});
        } else {
            // email removed
            let newsRemoveRes = await article.newsLetterRemove(newsLetEmail);
            res.send({"message":"emailRemoved"});
        }
    }); // return emailNone or emailRemoved

    // ---------- comment ----------

    app.post('/comment/add', async (req, res) => {
        let commentName = req.body.name;
        let commentMail = req.body.email;
        let commentMess = req.body.comment;
        let commentTime = req.body.time;
        let commentArtId = req.body.articleId;
        let addCommentRes = await article.commentAdd(commentName, commentMail, commentMess, commentTime, commentArtId);
        res.send(addCommentRes);
    }); // add comment

};