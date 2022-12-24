import { Request, Response } from "express";
import { ListOrderServices } from "../../services/order/ListOrderServices";

class ListOrderController {
  async handle(req: Request, res: Response) {
    const listOrderServices = new ListOrderServices();
    const order = await listOrderServices.execute();

    return res.json(order);
  }
}

export { ListOrderController };
