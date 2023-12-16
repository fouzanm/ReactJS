import { redirect } from "react-router-dom";

export function action() {
    console.log("Logout 4")
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    return redirect('/')
}