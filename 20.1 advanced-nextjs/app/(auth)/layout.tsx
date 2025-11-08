import { Navbar } from "@/components/Navbar";
import { ReactNode } from "react";

export default function AuthLayout({children}:{children: ReactNode}) {
    return <div>
        <Navbar />
        {children}
    </div>
}
// auth is in () because in url we can then directly go to localhost:3000/signin
// instead of localhost:3000/auth/signin
// this allows us to apply layouts to all the pages that comes after it i.e only all child pages without affecting the url or any other pages.