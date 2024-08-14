//ALL USER DATA AND FORMATTING 
import Card from "./card";   
import { useLoaderData } from "react-router-dom";
function AllData(props){
  const { accounts } = useLoaderData();
    return (
    <Card
      bgcolor="danger"
      header="CREATED ACCOUNTS DOCUMENTATION:"
      status="" body={  <div>
        {accounts.length ? (<ul className="list-group">
            {accounts.map((account) => (  <li key={account.id} className="list-group-item">
                Name: {account.name}<br />
                Email: {account.email}<br />
                Password: {account.password}<br />
                Balance: {account.balance}     </li>     ))}
          </ul>
        ) : (
          <p>
            <i>NO VALID ACCOUNTS HAVE BEEN CREATED</i>
          </p>
        )}
        </div>                    
      }
    />
  );
}
//EXPORT ALL DATA - FIX FOR BACKEND WORK
export default AllData;