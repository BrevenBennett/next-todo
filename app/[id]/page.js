import { getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";

async function getData({ params }) {
  const id = params.id;
  const docRef = doc(db, "todos", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();

  return {
    todo: {
      title: data.title,
      detail: data.detail,
    },
  };
}

export default async function Todo({ params }) {
  const { todo } = await getData({ params });

  return (
    <div className="container">
      <h1>Todo title: {todo.title}</h1>
      <h3>Detail: {todo.detail}</h3>
    </div>
  );
}
