//IMPORT CARD FORMAT FOR STYLING
import Card from "./card";
//COMMENTED OUT MONGODB REFERENCE SINCE THIS IS ONLY FOR FRONT END STATIC DEPLOYMENT
import "bootstrap-icons/font/bootstrap-icons.css"
// import Home from "./home";
// import Mongodb from "./mongodb";
import CreateAccount from "./create_account";
import Accounts, { loader as accountsLoader } from "./accounts";
import Transaction, { loader as transactionLoader } from "./mover";
import AllData from "./all_data";
import Navbar from "./navbar";
import ErrorPage from "./note";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


//styled with card and bank image customized and imported
function Home(){
  return (
    <Card
      txtcolor="success" title="Welcome To Your Bank - The People's Bank"
  header="Bad Bank: The People's Bank"
  body={(<img src="bank.png" className="img-fluid"/>)}
  text="Navigate To Your Account Using The Navigation Bar"  />    
  )  
}
//EXPORT UPDATED AND FIXED FROM REV3
export default Home;