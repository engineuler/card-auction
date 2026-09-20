// Firebase 초기화 (기존 spy-document-plaza 프로젝트 재사용)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  orderBy,
  onSnapshot,
  doc,
  getDoc,
  updateDoc,
  increment,
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBmDLvF1sIYxIZhTFjVi0M3C1Wk_GhWHic",
  authDomain: "spy-document-plaz.firebaseapp.com",
  projectId: "spy-document-plaz",
  storageBucket: "spy-document-plaz.firebasestorage.app",
  messagingSenderId: "796377225314",
  appId: "1:796377225314:web:7b624446f6bc00895dd93b",
  measurementId: "G-VHVJTRSK17",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  orderBy,
  onSnapshot,
  doc,
  getDoc,
  updateDoc,
  increment,
};
