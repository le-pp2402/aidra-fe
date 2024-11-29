import React from 'react';
import { ScrollArea } from './ui/scroll-area';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export function SubtitleMedia({ data, handleChangeInput }) {

    return (
        <div className="p-2">
            <h1 className="text-2xl font-bold mb-3 text-center">Subtitle</h1>
            <div>
                <ScrollArea className="h-[400px] w-[350px] rounded-md border p-4">
                    {
                        <Textarea value={data} className="h-[400px] w-[350px] rounded-md border p-4" onChange={handleChangeInput}>
                        </Textarea>
                    }
                </ScrollArea>
            </div>
        </div>
    )
}