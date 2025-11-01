import { Navbar } from "@/components/Navbar";

export default function AuthLayout({children}) {
    return <div>
        <Navbar />
        {children}
    </div>
}
// auth is in () because in url we can then directly go to localhost:3000/signin
// instead of localhost:3000/auth/signin