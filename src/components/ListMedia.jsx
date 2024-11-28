import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardFooter, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { useState, useEffect } from "react";
import { Progress } from "./ui/progress";

function getNumber (str) {
    var num = 0;
    console.log(str);
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
            num = num * 10 + (str.charAt(i) - '0');
        }
    }
    console.log(num);
    return num; 
}

function MakeItCool(str) {
    var res;
    if (str === "IN QUEUE") {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        res = <p className="text-red-600"> Status: { str }</p>
    } else {
        res = <p className="text-green-600"> Status: { str }</p> 
    }
    return res;
}

function Status (str) {
    if (getNumber(str) == 0) {
        return (
            <Label> {MakeItCool(str)} </Label>
        )
    } else {
        return (
            <div>
                <p> Progress: {getNumber(str)} % </p>
                <Progress value={getNumber(str)} className="w-[100%]" />
            </div>
        )
    }
}

function MediaDetail ({media, handleGet}) {
    return (
        <Card className="w-[350px]">
        <CardHeader>
            <CardTitle> {media.name} </CardTitle>
        </CardHeader>
        <CardContent>
            <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                    <Label> Tiêu đề: {media.mediaPath}</Label>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Label> {Status(media.status)}   </Label>
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter className="flex justify-between float-right">
            <Button onClick={() => handleGet(media.id)}> Get </Button>
        </CardFooter>
        </Card>
    )
    
}

export function ListMedia({handleGet}) {
    const [mediaList, setMediaList] = useState([]);

    useEffect(() => {
        const fetchMedia = async () => {
            try {
                const response = await fetch("http://localhost:8080/media");
                const data = await response.json();
                setMediaList(data);
            } catch (error) {
                console.error("Error fetching media:", error);
            }
        };

        fetchMedia();
    }, []);


    return (
        <div className="p-2">
            <h1 className="text-2xl font-bold mb-3 text-center">Media List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-3">
                {mediaList.length > 0 ? (
                    mediaList.map((media) => (
                        <MediaDetail media = {media} key = {media.id} handleGet = {handleGet} />
                    ))
                ) : (
                    <p>You haven't uploaded any media yet</p>
                )}
            </div>
        </div>

    );
}