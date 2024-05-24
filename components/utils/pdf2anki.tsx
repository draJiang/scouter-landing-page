'use client'

import React, { useState, ChangeEvent } from 'react';
import pdfToText from "react-pdftotext";

export default function PDF2Anki() {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files ? event.target.files[0] : null;
        if (selectedFile) {
            setFile(selectedFile);
            readPdf(selectedFile);
        } else {
            console.log("No file selected.");
        }
    };

    const readPdf = async (file: File) => {
        try {
            pdfToText(file)
                .then((text: string) => console.log(text))
                .catch((error: any) => console.error("Failed to extract text from pdf"))
        } catch (error) {
            console.error('Error loading PDF: ', error);
        }
    };


    // const extractTextFromPdf = async (pdf: any) => {
    //     for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    //         const page = await pdf.getPage(pageNum);
    //         const textContent = await page.getTextContent();
    //         console.log(`Text from page ${pageNum}:`);
    //         textContent.items.forEach((item: any) => {
    //             console.log(item.str);
    //         });
    //     }
    // };

    return (
        <div className='mt-20'>
            <input type="file" onChange={handleFileChange} accept="application/pdf" />
            {file && <p>Loaded: {file['name']}</p>}
        </div>
    );
}