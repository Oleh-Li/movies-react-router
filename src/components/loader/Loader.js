import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import React, {Component} from "react";
import Loader from "react-loader-spinner";
import styles from "./loader.module.css";

const Spinner = () => {
    return (
        <div className={styles.spinnerContainer}>
      <Loader
        type="Oval"
        color="#00BFFF"
        height={150}
        width={150}
        timeout={1000} //3 secs
      />
      </div>
    );
  };
  
  export default Spinner;

// export default class Spinner extends Component{
//   render(){
//     return(
// <div className={styles.spinnerContainer}>
//       <Loader
//         type="Oval"
//         color="#00BFFF"
//         height={150}
//         width={150}
//         timeout={1000} //3 secs
//       />
//       </div>
//     )
//   }
// }
