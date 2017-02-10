const Koa = require('koa');
const mongoose = require('mongoose');
const Router = require('koa-router');
const favicon = require('koa-favicon');
const convert = require('koa-convert');
const bodyParser = require('koa-bodyparser');

mongoose.Promise = Promise;
mongoose.set = ('debug', true);
mongoose.connect('mongodb://127.0.0.1:27017/notes');
const app = new Koa();
const router = new Router();


const Note = require('./models/notes');

router
    .get('/test',(ctx)=>{
        ctx.body = 'test';
    })
    .get('/notes', async (ctx) => {
        ctx.body = await Note.find();
        console.log(ctx.body);
    })
    .post('/notes', async (ctx) => {
        await Note.create({title: ctx.request.body.title, text: ctx.request.body.text});
        ctx.body = ctx.request.body;
        console.log(ctx.body);
    });

app
    .use(convert(bodyParser({
        jsonLimit: '56kb'
    })))
    .use(router.routes())
    .use(convert(favicon()))
    .listen(8080);