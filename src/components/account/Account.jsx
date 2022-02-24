import { useEffect } from "react";
import styled from "styled-components";
import { auth, db } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";

const Main = styled.div`
  width: 100%;
  height: 1000px;
`;

export const Account = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      //   console.log(user);

      const postsCollectionRef = collection(db, "users");
      async function handlePost() {
        await addDoc(postsCollectionRef, {
          cart: [
            {
              title: "cult",
            },
          ],
          author: {
            name: user.displayName,
            id: user.uid,
          },
        });
      }
      //   handlePost();
    } else {
      // User is signed out
      // ...
    }
  });
  //   useEffect(() => {

  //   }, []);

  return <Main>hello</Main>;
};
