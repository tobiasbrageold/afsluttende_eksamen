let article = require('../services/article');
let admin = require('../services/admin');
const formidable  = require ('formidable');
const sharp       = require ('sharp');

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

    app.get('/admin/editor', (req, res) => {
        res.render('pages/admin/editor');
    }); // admin editor

    app.get('/admin/category', (req, res) => {
        res.render('pages/admin/category');
    }); // admin category

    app.get('/admin/comment', (req, res) => {
        res.render('pages/admin/comment');
    }); // admin comment

    app.get('/admin/contact', (req, res) => {
        res.render('pages/admin/contact');
    }); // admin contact

    app.get('/admin/sponsor', (req, res) => {
        res.render('pages/admin/sponsor');
    }); // admin sponsor

    app.get('/admin/add/sponsor', (req, res) => {
        res.render('pages/admin/addsponsor');
    }); // admin add sponsor

    app.get('/admin/add/article', (req, res) => {
        res.render('pages/admin/addarticle');
    }); // admin add article

    app.get('/admin/add/editor', (req, res) => {
        res.render('pages/admin/addeditor');
    }); // admin add editor

    app.get('/admin/user/settings', (req, res) => {
        res.render('pages/admin/settings');
    }); // admin settings

    app.get('/admin/user/changepassword', (req, res) => {
        res.render('pages/admin/changepassword');
    }); // admin change password

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

    app.get('/roles/all', async (req, res) => {
        let rolesAllRes = await admin.rolesAll();
        res.send(rolesAllRes);
    }); // return all roles

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
    }); // return editor by id

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
    }); // login token

    app.get('/user/data/:userid', async (req, res) => {
        let userId = req.params.userid;
        let userDataRes = await admin.userData(userId);
        res.send(userDataRes);
    }); // login user data

    app.get('/articles/all', async (req, res) => {
        let articleAllRes = await admin.articlesAll();
        res.send(articleAllRes);
    }); // return all articles

    app.get('/articles/category/:category', async (req, res) => {
        let artCategory = req.params.category;
        let articleCatRes = await admin.articlesCat(Number(artCategory));
        res.send(articleCatRes);
    }); // return articles by category

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

    app.put('/update/about', async (req, res) => {
        let street = req.body.street;
        let zipcode = req.body.zip;
        let city = req.body.city;
        let country = req.body.country;
        let phone = req.body.phone;
        let fax = req.body.fax;
        let email = req.body.email;
        let updateAboutRes = await admin.updateAbout(street, zipcode, city, country, phone, fax, email);
        res.send(updateAboutRes);
    }); // update about

    app.put('/update/editor', async (req, res) => {
        let ediId = req.body.editorid;
        let ediFName = req.body.fname;
        let ediLName = req.body.lname;
        let ediCat = req.body.category;
        let ediRole = req.body.role;
        let ediText = req.body.text;
        let editEdiRes = await admin.updateEditor(Number(ediId), ediFName, ediLName, Number(ediCat), Number(ediRole), ediText);
        res.send(editEdiRes);
    }); // update editor

    app.delete('/delete/article', async (req, res) => {
        let artId = req.body.articleid;
        let delArtRes = await admin.deleteArticle(Number(artId));
        res.send(delArtRes);
    }); // delete article

    app.delete('/remove/editor', async (req, res) => {
        let editorId = req.body.editorid;
        let removeEdiRes = await admin.removeEditor(editorId);
        res.send(removeEdiRes);
    }); // remove editor

    app.delete('/remove/comment', async (req, res) => {
        let commentId = req.body.commentid;
        let removeCommRes = await admin.removeComment(Number(commentId));
        res.send(removeCommRes);
    }); // remove comment

    app.delete('/remove/message', async (req, res) => {
        let messageId = req.body.messageid;
        let removeMessRes = await admin.removeMessage(Number(messageId));
        res.send(removeMessRes);
    }); // remove comment

    app.delete('/remove/sponsor', async (req, res) => {
        let sponsorId = req.body.adid;
        let removeSpoRes = await admin.removeSponsor(Number(sponsorId));
        res.send(removeSpoRes);
    }); // remove sponsor

    app.put('/update/navigation', async (req, res) => {
        let carId = req.body.car;
        let boatId = req.body.boat;
        let bikeId = req.body.bike;
        let updateNavResCar = await admin.updateNavCar(Number(carId));
        let updateNavResBoat = await admin.updateNavBoat(Number(boatId));
        let updateNavResBike = await admin.updateNavBike(Number(bikeId));
        res.send(updateNavResCar);
    }); // update navigation

    app.put('/update/user', async (req, res) => {
        let username = req.body.username;
        let userfName = req.body.fname;
        let userlName = req.body.lname;
        let userEmail = req.body.email;
        let userId = req.body.userid;
        let updateUserRes = await admin.updateUser(Number(userId), username, userfName, userlName, userEmail);
        res.send(updateUserRes);
    }); // update user data

    app.get('/all/comments', async (req, res) => {
        let commentRes = await admin.commentsAll();
        res.send(commentRes);
    }); // return all coments

    app.get('/messages/all', async (req, res) => {
        let messageRes = await admin.messagesAll();
        res.send(messageRes);
    }); // return all messages

    app.get('/sponsor/all', async (req, res) => {
        let sponsorRes = await admin.sponsorAll();
        res.send(sponsorRes);
    }); // return all sponsors

    app.post ('/admin/add/sponsor', async (req, res) => {
		let timestamp = Date.now();
		let form = new formidable.IncomingForm();
		form.multiples = false;

		form.parse (req, function (err, fields, files) {
			req.body = fields;
		});

		form.on ("end", async () => {
            let company = req.body.company;
            let category = req.body.category;
            let allFiles = form.openedFiles;
            let folderNm = ['car', 'boat', 'motorcycle'];
			let destinationFile = "";
			let imageFolder = "public/img/ads/"+folderNm[category-1]+'/';
            let file = allFiles[0];
            let imageName = `${timestamp}_${file.name}`;
            let sourceFile = file.path;
            destinationFile = imageFolder + "" + imageName;
            await sharp (sourceFile)  .resize(128, 128)  .max()  .toFile(destinationFile);
            await admin.addSponsor(imageName, company, category);
			res.render('pages/admin/sponsor');
		});
    }); // add new sponsor
    
    app.post('/add/article', async (req, res) => {
        let editorId = req.body.editorid;
        let artCategory = req.body.category;
        let artTitle = req.body.title;
        let artText = req.body.text;
        let artTime = req.body.time;
        let addArtRes = await admin.addArticle(Number(editorId), Number(artCategory), artTitle, artText, Number(artTime));
        res.send(addArtRes);
    }); // login user

    app.post ('/admin/add/editor', async (req, res) => {
		let timestamp = Date.now();
		let form = new formidable.IncomingForm();
		form.multiples = false;

		form.parse (req, function (err, fields, files) {
			req.body = fields;
		});

		form.on ("end", async () => {
            let time = Math.round((new Date()).getTime() / 1000);
            let name = req.body.name;
            let lastname = req.body.lastname;
            let username = req.body.username;
            let password = req.body.password;
            let role = req.body.role;
            let email = req.body.email;
            let about = req.body.about;
            let category = req.body.category;
            let allFiles = form.openedFiles;
			let destinationFile = "";
			let imageFolder = "public/img/editors/";
            let file = allFiles[0];
            let imageName = `${timestamp}_${file.name}`;
            let sourceFile = file.path;
            destinationFile = imageFolder + "" + imageName;
            await sharp (sourceFile)  .resize(128, 128)  .max()  .toFile(destinationFile);
            await admin.addEditor(imageName, name, lastname, username, hashMd5(password), role, category, email, about, time);
			res.render('pages/admin/editor');
		});
    }); // add new sponsor

};

// ---------- md5 hash ----------
let hashMd5 = function(s) {
    function L(k,d) {
        return(k<<d)|(k>>>(32-d))
    }
    function K(G,k) {
        let I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);
        if(I&d) {
            return(x^2147483648^F^H);
        }
        if(I|d) {
            if(x&1073741824) {
                return(x^3221225472^F^H);
            } else {
                return(x^1073741824^F^H);
            }
        } else {
            return(x^F^H);
        }
    }
    function r(d,F,k) {
        return(d&F)|((~d)&k);
    }
    function q(d,F,k) {
        return(d&k)|(F&(~k));
    }
    function p(d,F,k) {
        return(d^F^k);
    }
    function n(d,F,k) {
        return(F^(d|(~k)));
    }
    function u(G,F,aa,Z,k,H,I) {
        G=K(G,K(K(r(F,aa,Z),k),I));
        return K(L(G,H),F);
    }
    function f(G,F,aa,Z,k,H,I) {
        G=K(G,K(K(q(F,aa,Z),k),I));
        return K(L(G,H),F);
    }
    function D(G,F,aa,Z,k,H,I) {
        G=K(G,K(K(p(F,aa,Z),k),I));
        return K(L(G,H),F);
    }
    function t(G,F,aa,Z,k,H,I) {
        G=K(G,K(K(n(F,aa,Z),k),I));
        return K(L(G,H),F);
    }
    function e(G) {
        let Z;
        let F=G.length;
        let x=F+8;
        let k=(x-(x%64))/64;
        let I=(k+1)*16;
        let aa=Array(I-1);
        let d=0;
        let H=0;
        while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]| (G.charCodeAt(H)<<d));
            H++
        }
        Z=(H-(H%4))/4;
        d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);
        aa[I-2]=F<<3;
        aa[I-1]=F>>>29;
        return aa;
    }
    function B(x) {
        let k="",F="",G,d;
        for(d=0;d<=3;d++) {
            G=(x>>>(d*8))&255;
            F="0"+G.toString(16);
            k=k+F.substr(F.length-2,2)
        }
        return k;
    }
    function J(k) {
        k=k.replace(/rn/g,"n");
        let d="";
        for(let F=0;F<k.length;F++) {
            let x=k.charCodeAt(F);
            if(x<128) {
                d+=String.fromCharCode(x)
            } else {
                if((x>127)&&(x<2048)) {
                    d+=String.fromCharCode((x>>6)|192);
                    d+=String.fromCharCode((x&63)|128)
                } else {
                    d+=String.fromCharCode((x>>12)|224);
                    d+=String.fromCharCode(((x>>6)&63)|128);
                    d+=String.fromCharCode((x&63)|128)
                }
            }
        }
        return d;
    }
    let C=Array();
    let P,h,E,v,g,Y,X,W,V;
    let S=7,Q=12,N=17,M=22;
    let A=5,z=9,y=14,w=20;
    let o=4,m=11,l=16,j=23;
    let U=6,T=10,R=15,O=21;
    s=J(s);C=e(s);Y=1732584193;
    X=4023233417;W=2562383102;
    V=271733878;
    for(P=0;P<C.length;P+=16) {
        h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);
        V=u(V,Y,X,W,C[P+1],Q,3905402710);
        W=u(W,V,Y,X,C[P+2],N,606105819);
        X=u(X,W,V,Y,C[P+3],M,3250441966);
        Y=u(Y,X,W,V,C[P+4],S,4118548399);
        V=u(V,Y,X,W,C[P+5],Q,1200080426);
        W=u(W,V,Y,X,C[P+6],N,2821735955);
        X=u(X,W,V,Y,C[P+7],M,4249261313);
        Y=u(Y,X,W,V,C[P+8],S,1770035416);
        V=u(V,Y,X,W,C[P+9],Q,2336552879);
        W=u(W,V,Y,X,C[P+10],N,4294925233);
        X=u(X,W,V,Y,C[P+11],M,2304563134);
        Y=u(Y,X,W,V,C[P+12],S,1804603682);
        V=u(V,Y,X,W,C[P+13],Q,4254626195);
        W=u(W,V,Y,X,C[P+14],N,2792965006);
        X=u(X,W,V,Y,C[P+15],M,1236535329);
        Y=f(Y,X,W,V,C[P+1],A,4129170786);
        V=f(V,Y,X,W,C[P+6],z,3225465664);
        W=f(W,V,Y,X,C[P+11],y,643717713);
        X=f(X,W,V,Y,C[P+0],w,3921069994);
        Y=f(Y,X,W,V,C[P+5],A,3593408605);
        V=f(V,Y,X,W,C[P+10],z,38016083);
        W=f(W,V,Y,X,C[P+15],y,3634488961);
        X=f(X,W,V,Y,C[P+4],w,3889429448);
        Y=f(Y,X,W,V,C[P+9],A,568446438);
        V=f(V,Y,X,W,C[P+14],z,3275163606);
        W=f(W,V,Y,X,C[P+3],y,4107603335);
        X=f(X,W,V,Y,C[P+8],w,1163531501);
        Y=f(Y,X,W,V,C[P+13],A,2850285829);
        V=f(V,Y,X,W,C[P+2],z,4243563512);
        W=f(W,V,Y,X,C[P+7],y,1735328473);
        X=f(X,W,V,Y,C[P+12],w,2368359562);
        Y=D(Y,X,W,V,C[P+5],o,4294588738);
        V=D(V,Y,X,W,C[P+8],m,2272392833);
        W=D(W,V,Y,X,C[P+11],l,1839030562);
        X=D(X,W,V,Y,C[P+14],j,4259657740);
        Y=D(Y,X,W,V,C[P+1],o,2763975236);
        V=D(V,Y,X,W,C[P+4],m,1272893353);
        W=D(W,V,Y,X,C[P+7],l,4139469664);
        X=D(X,W,V,Y,C[P+10],j,3200236656);
        Y=D(Y,X,W,V,C[P+13],o,681279174);
        V=D(V,Y,X,W,C[P+0],m,3936430074);
        W=D(W,V,Y,X,C[P+3],l,3572445317);
        X=D(X,W,V,Y,C[P+6],j,76029189);
        Y=D(Y,X,W,V,C[P+9],o,3654602809);
        V=D(V,Y,X,W,C[P+12],m,3873151461);
        W=D(W,V,Y,X,C[P+15],l,530742520);
        X=D(X,W,V,Y,C[P+2],j,3299628645);
        Y=t(Y,X,W,V,C[P+0],U,4096336452);
        V=t(V,Y,X,W,C[P+7],T,1126891415);
        W=t(W,V,Y,X,C[P+14],R,2878612391);
        X=t(X,W,V,Y,C[P+5],O,4237533241);
        Y=t(Y,X,W,V,C[P+12],U,1700485571);
        V=t(V,Y,X,W,C[P+3],T,2399980690);
        W=t(W,V,Y,X,C[P+10],R,4293915773);
        X=t(X,W,V,Y,C[P+1],O,2240044497);
        Y=t(Y,X,W,V,C[P+8],U,1873313359);
        V=t(V,Y,X,W,C[P+15],T,4264355552);
        W=t(W,V,Y,X,C[P+6],R,2734768916);
        X=t(X,W,V,Y,C[P+13],O,1309151649);
        Y=t(Y,X,W,V,C[P+4],U,4149444226);
        V=t(V,Y,X,W,C[P+11],T,3174756917);
        W=t(W,V,Y,X,C[P+2],R,718787259);
        X=t(X,W,V,Y,C[P+9],O,3951481745);
        Y=K(Y,h);
        X=K(X,E);
        W=K(W,v);
        V=K(V,g);
    }
    let i=B(Y)+B(X)+B(W)+B(V);
    return i.toLowerCase()};