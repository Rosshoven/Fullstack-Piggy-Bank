import { Router } from 'express';

import User from '../models/User';

const router = Router();

router.post('/api/users', async (req, res) => {
    console.log(req.body);
    const newUser = await User.create(req.body);
    res.json(newUser);
})