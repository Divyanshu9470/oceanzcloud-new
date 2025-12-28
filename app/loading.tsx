import React from 'react';
import LoadingSpinner from './components/ui/LoadingSpinner';

export default function Loading() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-black/50 backdrop-blur-sm">
            <LoadingSpinner />
        </div>
    );
}
