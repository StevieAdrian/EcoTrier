import { useState } from "react";

export default function useCategoryModal() {
    const [selectedCategory, setSelectedCategory] = useState<any>(null);
    const [modal, setModal] = useState(false);
    
    const openModal = (category: any) => {
        setSelectedCategory(category);
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    return { selectedCategory, modal, openModal, closeModal };
}