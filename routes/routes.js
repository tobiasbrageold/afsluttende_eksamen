let article = require('../services/article');
let admin = require('../services/admin');

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

    app.get('/contact', (req, res) => {
        res.render('pages/contact');
    }); // contact

    app.get('/editors', (req, res) => {
        res.render('pages/editors');
    }); // editors

    app.get('/sponsors', (req, res) => {
        res.render('pages/sponsor');
    }); // sponsor

    app.get('/admin/signin', (req, res) => {
        res.render('pages/signin');
    }); // sign in

    app.get('/admin', (req, res) => {
        res.render('pages/admin/home');
    }); // admin

    // ---------- GET data ----------

    app.get('/article/offset/:offset/:limit', async (req, res) => {
        let articleOff = req.params.offset;
        let articleLim = req.params.limit;
        let articleOffRes = await article.articleOffLim(Number(articleOff), Number(articleLim));
        res.send(articleOffRes);
    }); // return articles by offset and limit

    app.get('/editors/all', async (req, res) => {
        let editorsRed = await article.editorsAll();
        res.send(editorsRed);
    }); // return all editors

    app.get('/site/about', async (req, res) => {
        let aboutRes = await article.siteAbout();
        res.send(aboutRes);
    }); // return about

    app.get('/sponsor/about', async (req, res) => {
        let sponsorRes = await article.sponsorAbout();
        res.send(sponsorRes);
    }); // return sponsor about

    app.get('/article/all/count', async (req, res) => {
        let articleAllCouRes = await article.articleAllCount();
        res.send(articleAllCouRes);
    }); // return articles count

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

    app.get('/search/count/:query', async (req, res) => {
        let srcQue = req.params.query;
        let srcRes = await article.srcAllCount(srcQue.toString());
        res.send(srcRes);
    }); // return articles count

    app.get('/search/all/:query/:offset/:limit', async (req, res) => {
        let srcQue = req.params.query;
        let srcOff = req.params.offset;
        let srcLim = req.params.limit;
        let srcRes = await article.srcAll(srcQue.toString(), Number(srcOff), Number(srcLim));
        res.send(srcRes);
    }); // return articles by search query, offset and limit

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

    // ---------- contact message ----------

    app.post('/message/add', async (req, res) => {
        let contactName = req.body.name;
        let contactMail = req.body.email;
        let contactSubj = req.body.subject;
        let contactMess = req.body.message;
        let contactTime = req.body.time;
        let addMessageRes = await article.messageAdd(contactName, contactMail, contactSubj, contactMess, contactTime);
        res.send(addMessageRes);
    }); // add message

    // ---------- admin ----------

    app.post('/admin/login', async (req, res) => {
        let username = req.body.username;
        let userPass = req.body.password;
        let userToken = req.body.token;
        let confirmUser = await admin.confirmUsername(username);
        let confirmPass = await admin.confirmUserPswd(username, userPass);
        if(confirmUser.length == 1) {
            if(confirmPass[0].user == 1) {
                let userId = confirmUser[0].id;
                await admin.removeToken(userId);
                await admin.createToken(userToken, userId);
                res.send({"message":"success", "userId":userId});
            } else {
                res.send({"message":"noPass"});
            }
        } else {
            res.send({"message":"noUser"});
        }
    }); // login user

    app.get('/confirm/token/:token/:userid', async (req, res) => {
        let conToken = req.params.token;
        let conUserId = req.params.userid;
        let confirmTokenRes = await admin.confirmToken(conToken, conUserId);
        res.send(confirmTokenRes);
    }); // return all editors

    app.get('/user/data/:userid', async (req, res) => {
        let userId = req.params.userid;
        let userDataRes = await admin.userData(userId);
        res.send(userDataRes);
    }); // return all editors

    app.get('/articles/all', async (req, res) => {
        let articleAllRes = await admin.articlesAll();
        res.send(articleAllRes);
    }); // return all articles

    app.get('/articles/category/:category', async (req, res) => {
        let artCategory = req.params.category;
        let articleCatRes = await admin.articlesCat(Number(artCategory));
        res.send(articleCatRes);
    }); // return all articles

    app.get('/category/all', async (req, res) => {
        let categoryRes = await admin.categoryAll();
        res.send(categoryRes);
    }); // return all categories

    app.put('/update/article', async (req, res) => {
        let artCat = req.body.category;
        let artTitle = req.body.title;
        let artText = req.body.text;
        let artId = req.body.articleid;
        let categoryRes = await admin.updateArticle(Number(artId), Number(artCat), artTitle, artText);
        res.send(categoryRes);
    }); // update article

    app.delete('/delete/article', async (req, res) => {
        let artId = req.body.articleid;
        let delArtRes = await admin.deleteArticle(Number(artId));
        res.send(delArtRes);
    }); // delete article

};