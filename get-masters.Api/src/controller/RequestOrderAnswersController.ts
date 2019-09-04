import { Request } from 'express';
import { RequestOrderAnswers } from '../entity/RequestOrderAnswers';
import { BaseController } from "./BaseController";

export class RequestOrderAnswersController extends BaseController<RequestOrderAnswers> {

    constructor() {
        super(RequestOrderAnswers, false);
    }

    async all(request: Request) {
        let { orderUid } = request.params;
        
        if (!orderUid)
            return { status: 400, message: 'Informe o código da requisição' }
            
        this.repository.find({
            requestOrder: orderUid
        });
    }
    async save(request: Request) {
        let _request = <RequestOrderAnswers>request.body;

        super.isRequired(_request.answer, 'Informe a resposta da pergunta.');
        super.isRequired(_request.question, 'Informa a questao.');
        super.isRequired(_request.requestOrder, 'Informe a requisição.');

        return super.save(_request, request);
    }

}