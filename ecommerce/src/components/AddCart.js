import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTOCart,
  CartUserResClean,
  DeleteUserStart,
  GetCartSTART,
  showUserResClean,
  showUserStart,
} from "../Redux/action";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./table.css";
import { toast } from "react-hot-toast";
import { ControlCameraTwoTone } from "@mui/icons-material";

function AddCart() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { carts, response, deleteLoading } = useSelector((state) => state.cart);

  // console.log("carts called", carts);
  // console.log("delete response", response);
  console.log("loading", deleteLoading);
  useEffect(() => {
    if (deleteLoading) return;
    console.log("GetCartSTART user");
    dispatch(GetCartSTART());
  }, [dispatch, deleteLoading]);
 

  useEffect(() => {
    if (response === "OK") {
      // console.log("cart removed success");
      toast.success("cart removed success");
      dispatch(CartUserResClean());
    }
  }, [response]);

  
  function postDelete(id) {
    dispatch(DeleteUserStart(id));
  }
  const [counter, setCounter] = useState(0);
  const [val, setVal] = useState();
  const handleClick1 = (id) => {
    setCounter(counter + 1)
    console.log(counter);
    setVal(val=counter*id.price)
    console.log("val",val);

  }
 
  const handleClick2 = () => {
    setCounter(counter - 1)
  }
 
 

  return (
    <div className="tablecontainer">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Image</th>
            <th>price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td>
                  <img src={item.image} style={{ width: 70, height: 70 }}></img>
                </td><td>$price:{item.price}</td>
                
                <td>
                <>{counter}</>
                <>{val}</>
               {/* <div>
               setVal(val=counter*price)
               <>{val}</>
               <Button onClick={oneprice}>bmitsu</Button>
               </div>  */}
                
                
                <Button tyle={{ backgroundColor: "skyblue" }} onClick={()=>handleClick1(id)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                 
                  <Button onClick={handleClick2}>
                    <FontAwesomeIcon icon={faMinus} />
                  </Button>
                  <Button onClick={() => postDelete(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AddCart;
