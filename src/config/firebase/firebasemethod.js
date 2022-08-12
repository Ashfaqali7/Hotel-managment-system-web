import app from "./firebaseconfig"
import { getAuth,
     createUserWithEmailAndPassword,
    signInWithEmailAndPassword
 } from "firebase/auth";
 import { getDatabase,
  ref,
   push,
    set,
     child,
      get,
      remove
     } from "firebase/database";

const auth = getAuth(app);
const database = getDatabase(app);

//Sing up && Auth

const SignInUser=(userObj)=>{
   return new Promise((resolve,reject)=>{
    createUserWithEmailAndPassword(auth, userObj.email, userObj.password)
    
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user)
   resolve("user Creat Successfully")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    reject(errorMessage)
    // ..
  });
   })
    
}


const LogInUser=(userObj)=>{
    return new Promise((resolve,reject)=>{
        signInWithEmailAndPassword(auth, userObj.email, userObj.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    resolve("logn Suvv")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    reject(errorMessage)
  });
    })
    
}

//FireBAse Data Base

const sendData =(obj,nodeName,id)=>{
  if(!id){
    const postListRef = ref(database, nodeName);
    obj.id = push(postListRef).key;
    console.log(obj.id)
  }
  const newPostRef = ref(database,`${nodeName}/${id?id:obj.id}`);
  return set(newPostRef,obj);
  console.log(newPostRef);

}

// const getData = async (nodeName,id)=>{
//   const dbRef = ref(database);
//   return new Promise((resolve,reject)=>{
//     get(child(dbRef,`${nodeName}/${id?id:"--"}` ),{
//       onlyOnce:false,
//     })
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         console.log("yyy")
//         let arr;
//         if(id){
//           arr=snapshot.val();
//           resolve(arr);
//         }else{
//           arr=Object.values(snapshot.val())
//         resolve(arr);
//         }
//       } else {
//         reject("no data")
//       }
//     }).catch((error) => {
//       console.log(error)
//     });
//   })
  
  
// }

let getData = async (nodeName, id) => {
  const dbRef = ref(database);
  return new Promise((resolve, reject) => {
    get(child(dbRef, `${nodeName}/${id ? id : ""}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let arr;
          
          if (id) {
            arr = snapshot.val();
            resolve(arr);
          } else {
            arr = Object.values(snapshot.val());
            resolve(arr);
          }
          console.log(arr)
        } else {
          reject("No Data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

let deletData =(nodeName,id)=>{
  const refrence=ref(database,nodeName+"/"+id);
  return remove(refrence);
}


export {SignInUser,LogInUser,sendData,getData,deletData};