// import {
//   GithubAuthProvider,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../../firebase/firebase.init";
// import { useState } from "react";

// const Login = () => {
//   const [user, setUser] = useState(null);

//   const googleProvider = new GoogleAuthProvider();
//   const githubProvider = new GithubAuthProvider();

//   const handleGoogleSignIn = () => {
//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         console.log(result.user);
//         setUser(result.user);
//       })
//       .catch((error) => {
//         console.log("ERROR", error);
//         setUser(null);
//       });
//   };

//   const handleGithubSignIn = () => {
//     signInWithPopup(auth, githubProvider)
//       .then((result) => {
//         console.log(result.user);
//         setUser(result.user);
//       })
//       .catch((error) => console.log("ERROR", error));
//   };

//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         console.log("sign out done");
//         setUser(null);
//       })
//       .catch((error) => console.log(error));
//   };

//   console.log(user);
//   const email =
//     user?.email ||
//     user?.providerData.find((provider) => provider.providerId === "github.com")
//       ?.email;
//   console.log("Email:", email);

//   return (
//     <div>
//       {/* user ? logout : sign in */}

//       {user ? (
//         <button onClick={handleSignOut}>Sign out</button>
//       ) : (
//         <>
//           <button onClick={handleGoogleSignIn}>Google login</button>
//           <button onClick={handleGithubSignIn}>Github Login</button>
//         </>
//       )}
//       {user && (
//         <div>
//           <h3>User: {user.displayName}</h3>
//           <p>Email: {email}</p>
//           <img src={user.photoURL} alt="" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import app from "../../firebase/firebase.init";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const email =
    user?.email ||
    user?.providerData.find((provider) => provider.providerId === "github.com" || "google.com")
      ?.email;
  console.log("Email:", email);

  return (
    <div>
      {/* user ? logout : sign in */}

      {user ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google login</button>
          <button onClick={handleGithubSignIn}>Github Login</button>
        </>
      )}
      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <p>Email: {email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;