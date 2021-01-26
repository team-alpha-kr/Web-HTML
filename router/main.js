const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index.html')
})
router.get('/members', (req, res) => {
  res.render('members.html')
});
router.get('/about', (req, res) => {
  res.render('about.html')
})
router.get('/bots', (req, res) => {
  res.render('bots.html')
})
router.get('/term', (req, res) => {
  res.render('term.html')
})
router.get('/privacy', (req, res) => {
  res.render('privacy.html')
})
router.get('/discord', (req, res) => {
  res.render('discord.html')
})
router.get('/invite', (req, res) => {
  res.redirect('https://discord.gg/pVgDwdQ4C6')
})
router.get('/check-id', (req, res) => {
  res.redirect('https://intotw.tistory.com/73')
})
router.get('/team/join', (req, res) => {
  res.render('team/join.html')
})

router.use((req, res, next) =>{
  next(createError(404));
});
router.use((err, req, res, next) => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
      
        // render the error page
        res.status(err.status || 500);
        res.render('404.html');
    });

module.exports = router
