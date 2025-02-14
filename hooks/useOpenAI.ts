import { useState } from "react";
import { OPENAI_JSON1 } from "../constants/api"; 
import { OPENAI_API_KEY } from "@env"; 

const useOpenAI = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const requestToOpenAI = async (imageUrl: string) => {
        setLoading(true);
        setError(null);

        const requestBody = OPENAI_JSON1(imageUrl);

        try {
            const res = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                },
                body: JSON.stringify(requestBody),
            });

            const data = await res.json();
            console.log("Response Data:", data);

            if (res.ok) {
                setResponse(data.choices?.[0]?.message?.content || "No response!");
            } else {
                setError(data.error?.message || "Something went wrong!");
            }
        } catch (err) {
            setError("Failed to connect to OpenAI");
        } finally {
            setLoading(false);
        }
    };

    return { requestToOpenAI, response, loading, error };
};

export default useOpenAI;
