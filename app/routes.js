import { Router } from 'express';

const routes = new Router();

// สร้าง routing โดยใช้ HTTP GET 
routes.get("/", (req, res) => {
    const json = JSON.parse('{"test":"Hello World"}');
    res.send(json);
});

export default routes;