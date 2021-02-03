const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index')
})
router.get('/preparing', (req, res) => {
  res.render('preparing')
})
router.get('/preparing/nc', (req, res) => {
  res.render('preparing_nc')
})
router.get('/members', (req, res) => {
  res.render('members')
});
router.get('/about', (req, res) => {
  res.render('about')
})
router.get('/bots', (req, res) => {
  res.render('bots')
})
router.get('/term/', (req, res) => {
  res.render('term/index')
})
router.get('/discord', (req, res) => {
  res.render('discord')
})
router.get('/term/service', (req, res) => {
  // res.render('term/service.html')
  res.redirect('preparing')
})
router.get('/term/tos', (req, res) => {
  res.render('term/tos')
})
router.get('/term/privacy', (req, res) => {
  res.render('term/privacy')
})
router.get('/invite', (req, res) => {
  res.render('invite')
})
router.get('/check-id', (req, res) => {
  res.redirect('https://intotw.tistory.com/73')
})
router.get('/team/join', (req, res) => {
  res.render('team/join')
})
router.get('/dashboard/', (req, res) => {
  res.redirect('preparing')
  // res.render('dashboard/index')
})
router.get('/partner', (req, res) => {
  res.redirect('https://partner.alphakr.xyz')
  // res.render('preparing')
})
router.get('/blog', (req, res) => {
  res.redirect('https://blog.alphakr.xyz')
  // res.render('preparing')
})
router.get('/errortest', () => {
  throw new Error('hello world testing')
})

// 404
router.use((req, res) => {
  res.status(404).render('404')
})

// 500 (이외 오류는 라우터에서 res.sendStatus()로 처리)
router.use((err, req, res, next) => {
  // set locals, only providing error in development
  //res.locals.message = err.message
  //res.locals.error = req.app.get('env') === 'development' ? err : {}

  if (req.app.get('env') !== 'development') {res.sendStatus(500)}
  else { res.status(500).end(err.stack) }
})

module.exports = router
