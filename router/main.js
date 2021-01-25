module.exports = function(app)
{
    app.get('/', (req, res) => {
        res.render('../views/index.html');
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