// "use client";

// import { SessionProvider, signOut, useSession, signIn } from "next-auth/react";

// export default function Home() {
//     return <SessionProvider>
//         <RealHome />
//     </SessionProvider>
// }

// function RealHome() {
//     const session = useSession();

//     return (
//         <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font=[family-name:var(--font-gelst-sans)]">
//             {session.status === "authenticated" && <button onClick={() => signOut()}>Logout</button>}
//             {session.status === "unauthenticated" && <button onClick={() => signIn()}>Sign in</button>}
//         </div>
//     );
// }





import { getServerSession } from "next-auth";


export default async function Home() {
  const session = await getServerSession();
  
  return (
    <div>
      {JSON.stringify(session)}  
    </div>
  );
}