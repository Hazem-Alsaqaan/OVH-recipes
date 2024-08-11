import { create } from "zustand"
const getUser = JSON.parse(
    `${window.sessionStorage.getItem("saveCurrentUser")}`
  );
export interface TUser {
email: string
family_name: string
given_name: string
id: string
name: string
picture: string
verified_email: true
}
interface TAuth {
    currentUser: TUser;
    setCurrentUser: (user: TUser)=> void
}

const useAuthStore = create<TAuth>((set)=> ({
    currentUser: getUser ? getUser : null,
    setCurrentUser: (user: TUser) => set({currentUser: user})
}))

export default useAuthStore