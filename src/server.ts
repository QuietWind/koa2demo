import Koa from "koa"
import Router from "koa-router"

const app = new Koa()
const router = new Router()

router.get("/", (ctx, next) => {
  console.log(ctx.params)

  ctx.body = "hello world"
  next()
})

app.use(router.routes())

app.use(router.allowedMethods())

app.listen(3000)
