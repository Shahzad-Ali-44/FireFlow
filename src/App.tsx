import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { Button } from "./components/ui/button"; // shadcn button import
import { LoaderCircle } from "lucide-react";

type User = {
  id: string;
  name: string;
  age: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const usersCollectionRef = collection(db, "users");

  const getUsers = async () => {
    setLoading(true);
    const data = await getDocs(usersCollectionRef);
    setUsers(
      data.docs.map((doc) => {
        const d = doc.data();
        return {
          id: doc.id,
          name: d.name as string,
          age: d.age as string,
        };
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    if (editId) {
      const userDoc = doc(db, "users", editId);
      await updateDoc(userDoc, { name, age });
      setEditId(null);
    } else {
      await addDoc(usersCollectionRef, { name, age });
    }
    setName("");
    setAge("");
    await getUsers();
    setSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    await getUsers();
    setDeletingId(null);
  };

  const handleEdit = (user: User) => {
    setName(user.name);
    setAge(user.age);
    setEditId(user.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center py-6 px-2 sm:py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-4 sm:p-8 border border-gray-100">
        <h1 className="text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-800 tracking-tight">
          FireFlow
        </h1>
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <LoaderCircle className="w-10 h-10 text-blue-700 animate-spin mb-4" />
            <span className="text-gray-500 text-sm">Loading...</span>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-base sm:text-lg"
                placeholder="Name"
                value={name}
                required={true}
                onChange={(e) => setName(e.target.value)}
                disabled={submitting}
              />
              <input
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-base sm:text-lg"
                placeholder="Age"
                value={age}
                required={true}
                onChange={(e) => setAge(e.target.value)}
                disabled={submitting}
              />
              <Button type="submit" className="w-full mt-2 text-base sm:text-lg flex items-center justify-center gap-2" disabled={submitting}>
                {submitting ? (
                  <>
                    <LoaderCircle className="w-5 h-5 animate-spin" />
                    {editId ? "Editing..." : "Adding..."}
                  </>
                ) : (
                  editId ? "Update" : "Add"
                )}
              </Button>
            </form>

            <ul className="mt-8 sm:mt-10 space-y-4">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 shadow-sm"
                >
                  <span className="font-medium text-gray-700 w-1/2 text-sm sm:text-base">
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold text-blue-700 break-words">{user.name}</span>
                      <span className="text-sm text-gray-500">Age: <span className="font-medium">{user.age}</span></span>
                    </div>
                  </span>
                  <div className="flex gap-2 w-1/2 justify-end">
                    <Button
                      variant="outline"
                      onClick={() => handleEdit(user)}
                      className="px-3 text-xs sm:text-sm w-24"
                      disabled={submitting || deletingId !== null}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(user.id)}
                      className="px-3 text-xs sm:text-sm flex items-center gap-2 w-24"
                      disabled={submitting || deletingId !== null}
                    >
                      {deletingId === user.id ? (
                        <>
                          <LoaderCircle className="w-4 h-4 animate-spin" />
                          Deleting...
                        </>
                      ) : (
                        "Delete"
                      )}
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
