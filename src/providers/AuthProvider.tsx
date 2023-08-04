"use client"

import React, { createContext, useEffect, useState, ReactNode } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from "firebase/auth";
import app from "@/firebase/firebase.config";

const auth = getAuth(app);
const goggleProvider = new GoogleAuthProvider();

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthInfo {
  user: User | null;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  signInUser: (email: string, password: string) => Promise<UserCredential>;
  signInWithGoggle: () => Promise<UserCredential>;
  logOut: () => Promise<void>;
  loading: boolean;
  profileUpdate: (updateUser: Record<string, any>) => Promise<void>;
}

export const AuthContext = createContext<AuthInfo | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
  
    const createUser = (email: string, password: string) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const signInUser = (email: string, password: string) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const signInWithGoggle = () => {
      setLoading(true);
      return signInWithPopup(auth, goggleProvider);
    };
  
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    const profileUpdate = async (updateUser: Record<string, any>) => {
      setLoading(true);
      await updateProfile(auth.currentUser!, updateUser);
      setUser((preUser) => ({ ...preUser!, ...updateUser }));
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    const authInfo: AuthInfo = {
      user,
      createUser,
      signInUser,
      signInWithGoggle,
      logOut,
      loading,
      profileUpdate,
    };
  
    return (
      <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
      </div>
    );
  };
  
  export default AuthProvider;
  