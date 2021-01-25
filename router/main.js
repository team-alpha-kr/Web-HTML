module.exports = function(app)
{
    app.get('/', (req, res) => {
        res.render('../views/index.html');
    });
    app.get('/members', (req, res) => {
        res.render('../views/members.html');
    });
    app.get('/about', (req, res) => {
        res.render('../views/about.html');
    });
    app.get('/bots', (req, res) => {
        res.render('../views/team/join.html');
    });
    app.get('/term', (req, res) => {
        res.render('../views/term.html');
    });
    app.get('/privacy', (req, res) => {
        res.render('../views/privacy.html');
    });
    app.get('/discord', (req, res) => {
        res.render('../views/discord.html');
    });
    app.get('/invite', (req, res) => {
        res.render('https://discord.gg/YVF2JeWTJS');
    })
    app.use((req, res, next) =>{
        next(createError(404));
    });
    app.use((err, req, res, next) => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
      
        // render the error page
        res.status(err.status || 500);
        res.render('404.html');
    });
}
