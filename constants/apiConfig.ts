export const OPENAI_JSON1 = (imageUrl: string) => ({
    model: "gpt-4o",
    messages: [
        {
            role: "system",
            content: [
                {
                    type: "text",
                    text: `Analisis kandungan sampah dari sebuah gambar. Anda hanya perlu menjawab dengan format berikut:\n\nKategori Sampah: Organik/Anorganik/B3\nBerbahaya: Ya/Tidak/Bisa Jadi\nSumber Sampah: ... (maksimal 20 huruf)\nWaktu Terurai: ... Hari/Bulan/Tahun\nJenis Bahan: ... (maksimal 20 huruf)\nDampak Lingkungan: Ringan/Sedang/Parah\nDaur ulang: Bisa/Tidak\nSolusi pengelolaan: ... (maksimal 30 huruf)`,
                },
            ],
        },
        {
        role: "user",
        content: [
            {
                type: "image_url",
                image_url: { url: imageUrl },
            },
        ],
        },
    ],
    response_format: { type: "text" },
    temperature: 1,
    max_completion_tokens: 2048,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
});


export const OPENAI_JSON2 = (imageUrl: string) => ({
    model: "gpt-4o",
    messages: [
        {
            role: "system",
            content: [
                {
                type: "text",
                text: `Analisis kandungan sampah dari sebuah gambar. Jika gambar tidak jelas atau bukan termasuk sampah maka jawab dengan "TIDAK JELAS". Jika tidak, gunakan format berikut:\n\nKategori Sampah: Organik/Anorganik/B3\nBerbahaya: Ya/Tidak/Bisa Jadi\nSumber Sampah: ... (maksimal 20 huruf)\nWaktu Terurai: ... Hari/Bulan/Tahun\nJenis Bahan: ... (maksimal 20 huruf)\nDampak Lingkungan: Ringan/Sedang/Parah\nDaur ulang: Bisa/Tidak\nSolusi pengelolaan: ... (maksimal 30 huruf)`,
                },
            ],
        },
        {
        role: "user",
        content: [
            {
            type: "image_url",
            image_url: { url: imageUrl },
            },
        ],
        },
    ],
    response_format: { type: "text" },
    temperature: 0.8,
    max_completion_tokens: 2048,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
});
