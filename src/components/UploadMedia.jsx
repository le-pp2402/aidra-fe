import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Label } from "./ui/label";

export function UploadMedia () {
    const [media, setMedia] = useState();
    const [name, setName] = useState('');

    async function sendFile(e) {
        console.log("passing");
        e.preventDefault();
        const url = "http://localhost:8080/media/upload";
        var formData = new FormData();

        formData.append('name', name);
        formData.append('media', media); 
        
        try {
            const response = await fetch(url, {
                method: "POST",
                body: formData,
              });
            console.log(await response.json());   
            window.location.reload();
        } catch (e) {
            console.error   (e);
        }
    }

    function handleChangeFile(e) {
        console.log(e.target.files[0]);
        setMedia(e.target.files[0]);
    }

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    return (
     <Form className="max-w-sm mx-auto">
        <form onSubmit={sendFile}>
            <h1 className="text-2xl font-bold mb-3 text-center">Upload media</h1>
            <Label htmlFor="filename">Media name: </Label>
                <Input onChange = {handleChange} type="text" placeholder="..." required />
                <Label htmlFor="user_avatar">Upload file</Label>
                <Input type="file" onChange={handleChangeFile}/>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Max size: 2GB</div>
            <Button type = "submit">Submit</Button>
        </form>
      </Form>
    )
}