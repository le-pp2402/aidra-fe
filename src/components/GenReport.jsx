import { useState } from "react";
import { Button } from "./ui/button";
import { Form } from "./ui/form";

export function GenReport({ data }) {
    const [report, setReport] = useState();

    async function gen(e) {
        e.preventDefault();
        const url = "http://localhost:8000/report-generate";

        const inp = {
            text: data,
            language: "English",
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inp),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const pdfBlob = await response.blob();
            const pdfUrl = URL.createObjectURL(pdfBlob);
            window.open(pdfUrl, "_blank");
        } catch (error) {
            console.error("Error generating report:", error);
        }
    }

    return (
        <>
            <Form className="max-w-sm mx-auto">
                <form onSubmit={gen}>
                    <Button type="submit">Generate report</Button>
                </form>
            </Form>
        </>
    );
}