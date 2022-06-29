import { useState,useEffect } from 'react';
import initializeFirebase from '../component/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,signOut, updateProfile,onAuthStateChanged } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser]=useState({});
    const [authError, setAuthError]=useState('');
    const [isloading, setIsLoading]=useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const registerUser =(email, password, name, location, navigate)=>{
        console.log(name);
        setIsLoading(true);
        const destination = location?.state?.from || '/';
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName:name};
            setUser(newUser);
            navigate(destination);
            savedUser(email, name);
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
              });
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=> setIsLoading(false));
    }
    const loginUser = (email, password, location, navigate)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    //observer user state
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    },[auth])
    const savedUser = (email, displayName) =>{
        const user = {email, displayName, status:false};
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
            .then()
    }
    //admin
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])
    const logOut = () =>{
        setIsLoading(true);
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        })
        .finally(()=> setIsLoading(false));
    }
 
    return {
      user,
      admin,
      authError,
      isloading,
      registerUser,
      loginUser,
      logOut
    }
}

export default useFirebase;