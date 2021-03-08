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
router.get('/board', (req, res) => {
  res.redirect('https://bbs.alphakr.xyz', 301)
})
router.get('/term/service', (req, res) => {
  // res.render('term/service.html')
  res.redirect('preparing', 302)
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
  res.redirect('https://intotw.tistory.com/73', 301)
})
router.get('/team/join', (req, res) => {
  // res.redirect('preparing', 302)
  res.redirect('https://bbs.alphakr.xyz/recruit', 301)
})
router.get('/dashboard/', (req, res) => {
  res.redirect('preparing', 302)
  // res.render('dashboard/index')
})
router.get('/partner', (req, res) => {
  // res.redirect('https://partner.alphakr.xyz', 301)
  res.render('preparing')
})
router.get('/blog', (req, res) => {
  // res.redirect('https://blog.alphakr.xyz', 301)
  res.redirect('http://team-alpha-kr.github.io', 301);
  // res.render('preparing')
})
router.get('/errortest', () => {
  throw new Error('hello world testing')
})

// 400
router.use((req, res) => {
  res.status(400).render('400')
})

// 403
router.use((req, res) => {
  res.status(403).render('403')
})

// 404
router.use((req, res) => {
  res.status(404).render('404')
})

// 500 (이외 오류는 라우터에서 res.sendStatus()로 처리)
router.use((err, req, res, next) => {
  if (req.app.get('env') !== 'development') {res.sendStatus(500)}
  // else { res.status(500).end(err.stack) }
  else { res.status(500).render('500') }
})

module.exports = router
