import { useState } from 'react';
import './App.css'
import { ListMedia } from './components/ListMedia';
import { SubtitleMedia } from './components/SubtitleMedia';
import { UploadMedia } from './components/UploadMedia';
function App() {
    const [content, setContent] = useState('');
    
    async function handleGet(id) {
        try {
            const response = await fetch("http://localhost:8080/media/subtitle/" + id);
            const data = await response.json();
            setContent(data.content);   
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="grid grid-cols-12 gap-4 p-2">
            <div className="bg-white p-4 rounded-lg shadow-md col-span-4">
                {/* <AllMedia handleGet = {handleGet} /> */}
                <ListMedia handleGet = {handleGet} />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md col-span-4">
                {/* <Info data={content} /> */}
                <SubtitleMedia data={content}/>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md col-span-4">
                {/* <Upload /> */}
                <UploadMedia/>
            </div>
        </div>
    )
}

export default App
