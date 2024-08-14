//IMPORT AND REFERENCE
import Card from "./card";
import "bootstrap-icons/font/bootstrap-icons.css"
import { getAccount, updateBalance } from "./accountdata";
import { useState, useEffect } from "react";
import { NumericFormat } from "react-number-format";
import { useLoaderData } from "react-router-dom";
export async function loader({ params }) {
  const account = await getAccount(params.accountid);
  if (!account) {
    throw new Response("", {
      status: 404,
      statusText: "NO ACCOUNT EXISTS OR TRACED",
    });
  }
  return { account };
}
//FUNCTION FOR TRANSCTION REFERENCES
function Transaction(props){
  const {account}               = useLoaderData();
  const [show, setShow]         = useState(true);
  const [status, setStatus]     = useState('');
  const [amount, setAmount]     = useState('');
  const [balance, setBalance]     = useState(account.balance);

  //FORM VALIDATION AND TIMING
  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),1000);
      return false;
    }
    if (label == "amount" && isNaN(field)) { setStatus('Error, not a number: ' + label); setTimeout(() => setStatus(''),1000);
      return false;
    }
    if (label == "amount" && Number(field) < 0.00) { setStatus('Error, negative number: ' + label); setTimeout(() => setStatus(''),1000);
      return false;
    }
    if (label == "amount" && props.transaction_type == "Withdraw" && Number(field) > Number(balance)) {
      setStatus('OVERDRAFT CAUTION: ' + label); setTimeout(() => setStatus(''),1000);
      return false;
    }
    return true;
  }

  useEffect(() => {
    clearForm();
    setBalance(account.balance);
  }, [account.id]);

  function handleUpdate(){
    if (!validate(amount,   'amount'))   return;
    updateBalance(account.id, Number(amount), props.transaction_type).then((newBalance) => {
      setBalance(Number(newBalance));
      setShow(false);
    });
  }    
//FUNCTION TO CLEAR FORM AFTER SUBMIT
  function clearForm(){
    setAmount('');
    setStatus('');
    setShow(true);
  }
//RETURN BASED ON TRANSACTION TYPE AND PAGE/ACTION - WILL VARY
  return (
    <Card
      bgcolor="success"
      header={`ACTION: ${props.transaction_type}`}
      status={status}
      body={show ? (  
              <>
              BALANCE:<br/>
              <NumericFormat value={balance} displayType="text" prefix={'$'} decimalScale={2} fixedDecimalScale />
              <br/><br/>
              Amount<br/>
              <input type="input" className="form-control" id="amount" placeholder="INPUT $" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" disabled={!amount} onClick={handleUpdate}>CLICK TO: {props.transaction_type}</button>
              </>
            ):(
              <>
              {/* <h5>Primary</h5> */}
              UPDATED BALANCE:<br/>
              <NumericFormat value={balance} displayType="text" prefix={'$'} decimalScale={2} fixedDecimalScale />
              <br/><br/>
              <button type="submit" className="btn btn-light" onClick={clearForm}>ANOTHER TRANSACTION?</button>
              </>
            )}
    />
  )  
}
//EXPORT
export default Transaction;