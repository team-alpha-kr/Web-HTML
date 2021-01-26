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
  res.redirect('https://discord.gg/pVgDwdQ4C6')
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

router.get('/errortest', () => {
  throw new Error('hello world testing')
})

// 404
router.use((req, res) => {
  res.status(404).render('404.html')
})

// 500 (이외 오류는 라우터에서 res.sendStatus()로 처리)
router.use((err, req, res, next) => {
  // set locals, only providing error in development
  //res.locals.message = err.message
  //res.locals.error = req.app.get('env') === 'development' ? err : {}

  if (req.app.get('env') !== 'development') res.sendStatus(500)
  else res.status(500).end(err.stack)
})

module.exports = router
