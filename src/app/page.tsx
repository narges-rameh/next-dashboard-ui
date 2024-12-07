"use client"
import { useRouter } from 'next/navigation';
import Image from "next/image";
// Use 'next/navigation' for app directory

const HomePage: React.FC = () => {
    const router = useRouter();

    const navigateToAdmin = () => {
        router.push('/admin');
    };

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-lamaSkyLight">
            <Image src="/logo.png" alt="Logo" width={100} height={100}/>
            <h1 className="text-3xl text-gray-600 font-bold pt-6">Welcome to the
                School App</h1>
            <button
                onClick={navigateToAdmin}
                className="mt-4 px-4 py-2 text-lg bg-lamaYellow text-gray-600 rounded hover:bg-lamaSky transition"
            >
                Go to Admin Dashboard
            </button>
        </div>
    );
};

export default HomePage;
