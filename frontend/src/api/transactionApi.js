import axios from 'axios';

const apiEndpoint = '//localhost:8000';

export const addTransaction = (transaction) => new Promise ((resolve, reject) => {
    axios.post(`${apiEndpoint}/claims`, transaction)
    .then(x => resolve(x.data))
    .catch(x => {
        alert(x);
        reject(x);
    });
}); 


export const getTransactionById =() => new Promise ((resolve, reject) =>{

    axios.get(`${apiEndpoint}/claims`)
    .then(x => resolve(x.data))
    .catch(x=>{

        alert(x);
        reject(x);
    });

});

export const getTransactionByStatus =(employee_id, status) => new Promise ((resolve, reject) =>{

    axios.get(`${apiEndpoint}/claims?employee_id=${employee_id}&claim_status=${status}`)
    .then(x => resolve(x.data))
    .catch(x=>{

        alert(x);
        reject(x);
    });
});

export const getSortTransactionByStatus =(employee_id, status, sortBy) => new Promise ((resolve, reject) =>{

    axios.get(`${apiEndpoint}/claims?employee_id=${employee_id}&claim_status=${status}`, sortBy)
    .then(x => resolve(x.data))
    .catch(x=>{

        alert(x);
        reject(x);
    });
});



