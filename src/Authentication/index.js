import { showToast } from "../utility/tool";




export const isAuthenticated = (show = false) => {
  if (localStorage.getItem("CustomerToken")) {
    return true;
  } else {
    show && (
      showToast({
        type: "error",
        message: "Please login to continue"
      })
    )
   
    return false;
  }
};

export const isActive = (history, path) => {
  let activeScreen = history.pathname === path ? true : false;
  return activeScreen;
};

export const isPrepaidUser = (OnlineUSerDetails) =>{
  //check for prepaid user here and set the state accordingly
  if(OnlineUSerDetails?.metering_type === "prepaid"){
    return true
  }else{
    return false
  }

}
export const isPostpaidUser = (OnlineUSerDetails) =>{
  //check for postpaid user here and set the state accordingly
  if(OnlineUSerDetails?.metering_type === "postpaid"){
    return true
  }else{
    return false
  }

}
