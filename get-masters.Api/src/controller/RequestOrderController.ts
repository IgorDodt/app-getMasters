import { Request } from 'express';
import { RequestStatus } from '../entity/enum/RequestStaus';
import { RequestOrder } from "../entity/ResquestOrder";
import { BaseController } from "./BaseController";

export class RequestOrderController extends BaseController<RequestOrder> {

    constructor() {
        super(RequestOrder,false);
    }

    async save(request: Request) {
        let _request = <RequestOrder>request.body;

        super.isRequired(_request.title, 'Informe o título.');
        super.isRequired(_request.description, 'Informa a descricao.');
        super.isRequired(_request.customer, 'Preciso saber quem é você.');
        super.isRequired(_request.longlat, 'Preciso saber onde você está.');

        if(!_request.uid)
            _request.statusOrder = RequestStatus.pending

        return super.save(_request, request);
    }

}