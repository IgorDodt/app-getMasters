import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Question } from "./Question";
import { RequestOrder } from "./ResquestOrder";

@Entity()
export class RequestOrderAnswers extends BaseEntity {

    @Column({ type: 'text', nullable:false})
    answer: string;
    
    @ManyToOne(() => RequestOrder, {eager: true})
    requestOrder: RequestOrder;

    @ManyToOne(() => Question, {eager: true})
    question: Question;
}