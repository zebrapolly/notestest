const Koa = require('koa');
const mongoose = require('mongoose');
const Router = require('koa-router');
const favicon = require('koa-favicon');
const convert = require('koa-convert');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

mongoose.Promise = Promise;
mongoose.connect('mongodb://127.0.0.1:27017/notes');
const app = new Koa();
const router = new Router();


const Note = require('./models/notes');

router
    .get('/test',(ctx)=>{
        ctx.body = 'test';
    })
    .get('/notes', async (ctx) => {
        console.log('get notes');
        ctx.body = await Note.find({});
        console.log(ctx.body);
    })
    .delete('/notes/:id', async (ctx) => {
        console.log(ctx.request.body);
        await Note.remove({id: ctx.params.id});
        console.log('user deleted');
        ctx.body = ctx.request.body;
    })
    .post('/notes', async (ctx) => {
        console.log(ctx.request.body);
        await Note.create({title: ctx.request.body.title, text: ctx.request.body.text, noteid: ctx.request.body.id});
        ctx.body = ctx.request.body;
    });

app
    .use(convert(cors()))
    .use(convert(bodyParser({
        jsonLimit: '56kb'
    })))
    .use(router.routes())
    .use(convert(favicon()))
    .listen(8080);