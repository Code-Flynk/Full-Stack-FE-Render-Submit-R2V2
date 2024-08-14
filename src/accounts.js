//ACCONT TRANSACTIONS AND CARD FUNCTIONREF
import Card from "./card";
import { useLoaderData, NavLink, Outlet } from "react-router-dom";
import { getAccounts } from "./accountdata";
//ACCOUNT
function Accounts(props){
  const { accounts } = useLoaderData();
    return (
    <div className="row">
      <div className="col">
        <Card
          bgcolor="success"
          header={`Select Account to ${props.transaction_type}`}
          status=""     body={      <nav>      {accounts.length ? (<ul className="list-group"> {accounts.map((account) => (
          <li key={account.id} className="list-group-item">
                    {(props.transaction_type === "Deposit") ? (<NavLink to={`deposit/${account.id}`} className={({ isActive }) => isActive ? "link-dark link-opacity-100 link-underline-opacity-0" : "link-primary link-opacity-50 link-underline-opacity-0"}> {account.name}
                        </NavLink>
                      ) : (
                        <NavLink
                          to={`withdraw/${account.id}`}
                          className={({ isActive }) => isActive ? "link-dark link-opacity-100 link-underline-opacity-0" : "link-primary link-opacity-50 link-underline-opacity-0"}
                        > {account.name} </NavLink>)
                    } </li> ))} </ul>
                  ) : (
              <p> <i>No accounts</i>  </p>
            )} </nav>                    
          }/>
      </div>

      <div className="col-9">
        <Outlet />
      </div>
    </div>
  );
}
//EXPORT-REFERENCE ACCURATE
export async function loader() {
  const accounts = await getAccounts();
  return { accounts };
}export default Accounts;