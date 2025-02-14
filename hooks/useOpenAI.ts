import { useState } from "react";
import { OPENAI_JSON1 } from "../constants/apiConfig"; 

const useOpenAI = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const key = process.env.EXPO_PUBLIC_OPENAI_API_KEY;
    
    const requestToOpenAI = async (imageUrl: string) => {
        setLoading(true);
        setError(null);
    
        const requestBody = OPENAI_JSON1(imageUrl);
        // console.log("debig1:", JSON.stringify(requestBody, null, 2));
        
        try {
            const res = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${key}`,
                },
                body: JSON.stringify(requestBody),
            });
    
            const data = await res.json();
            // console.log("debug2:", JSON.stringify(data, null, 2));
    
            if (res.ok) {
                const content = data.choices?.[0]?.message?.content; 
                if (content) {
                    setResponse(content); 
                    console.log("OpenAI Response:", content);
                } else {
                    setError("No valid response from OpenAI.");
                }
            } else {
                setError(data.error?.message || "Something went wrong!");
            }
        } catch (err) {
            console.error("Request Failed:", err);
            setError("Failed to connect to OpenAI");
        } finally {
            setLoading(false);
        }
    }

    return { requestToOpenAI, response, loading, error };
};

export default useOpenAI;
