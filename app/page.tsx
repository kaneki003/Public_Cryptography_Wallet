"use client";


import { useRouter } from "next/navigation";

export default function Page(){
    const router = useRouter();
    router.push("/auth");
    return (
        <main>
        </main>
    )
}