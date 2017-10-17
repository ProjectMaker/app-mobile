import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

const API_URL = 'http://private-5d708-interviewfront.apiary-mock.com/transactions';

@Injectable()
export class TransactionService {
  constructor(private http:Http) { }

  public getList():Observable<Array<any>> {
    return this.http.get(API_URL)
      .map((res:Response) => res.json())
      .map(doc => doc.transactions
        .map(transaction => {
          transaction.amount = parseInt(transaction.amount)
          return transaction;
        })
      )
      .catch((err:Response) => this.handleErrors(err))
  }

  handleErrors(error: Response) {
    return Observable.throw(error);
  }
}