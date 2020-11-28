import {Router, Request, Response} from 'express';
import {addressRepository} from '../../repository';

export const addressRouter = Router({
    strict: true
});

addressRouter.get('/', async (req: Request, res: Response) => {
    try {
        res.json(await addressRepository.getAll());
    }catch(e) {
        res.status(500).send(e.message);
        res.end();
    }
})