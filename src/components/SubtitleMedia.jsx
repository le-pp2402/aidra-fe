import React from 'react';
import { ScrollArea } from './ui/scroll-area';
export function SubtitleMedia ({data}) {
    return (
        <div className="p-2">
            <h1 className="text-2xl font-bold mb-3 text-center">Subtitle</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3">
                <ScrollArea className="h-[400px] w-[350px] rounded-md border p-4">
                    {data}
                </ScrollArea>  
            </div>
        </div>
    )
}