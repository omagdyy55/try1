"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our App</h1>
      <Link href="/login">
        <Button className="w-48">Go to Login</Button>
      </Link>
    </div>
  );
};

export default HomePage;
