import { transactionForm } from "./transactionForm";
import { useState, useEffect } from "react";
import { TransactionForm } from "./transactionForm";
// import { TransactionList } from "./transactionList";

//leave for now, but you can get rid of later

export const AddTransaction = () => {


    // const [transaction, setTransaction] = useState(undefined);


    // const updateTransaction = (new_transaction) => {

    //     setTransaction({

    //         ...transaction, ...new_transaction

    //     });
    // };

    return (
        <div>
            <TransactionForm />

            {/* <TransactionList  /> */}

        </div>



    );

}