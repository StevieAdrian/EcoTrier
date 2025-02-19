import { WasteCategory } from "@/constants/types";

export const WasteCategories: WasteCategory[] = [
    { 
        id: "1", 
        name: "Plastic", 
        icon: require("@/assets/images/plastic.png"), 
        description: 
            "🔹 **Deskripsi dan Karakteristik:**\n" +
            "Sifat fisik dan kimia plastik, seperti ringan dan tahan air.\n\n" +
            "🔹 **Jenis-jenis Plastik:**\n" +
            "PET, HDPE, PVC, LDPE, PP, PS, dan lainnya.\n\n" +
            "🔹 **Contoh:**\n" +
            "Botol air mineral, sedotan, kantong kresek.\n\n" +
            "🔹 **Proses Daur Ulang:**\n" +
            "Pengumpulan, pembersihan, pencacahan, peleburan, dan pencetakan ulang.\n\n" +
            "🔹 **Manfaat Daur Ulang:**\n" +
            "Menghemat sumber daya dan energi.\n\n" +
            "🔹 **Dampak Lingkungan:**\n" +
            "Pencemaran tanah dan laut, bahaya bagi kehidupan laut.\n\n" +
            "🔹 **Alternatif Ramah Lingkungan:**\n" +
            "Bioplastik, plastik yang dapat terurai (degradable plastic).\n\n" +
            "🔹 **Cara Mengurangi Penggunaan:**\n" +
            "Reusable bags, botol minum, dan peralatan makan."
    },
    { 
        id: "2",
        name: "Metal", 
        icon: require("@/assets/images/metal.png"), 
        description: "Deskripsi dan Karakteristik: Kuat, tahan lama, dan penghantar listrik dan panas.\nJenis-jenis Logam: Aluminium, besi, baja, tembaga, dan kuningan.\nContoh: Kaleng minuman, peralatan dapur, komponen elektronik.\nProses Daur Ulang: Pemisahan, pembersihan, peleburan, dan pencetakan ulang.\nManfaat Daur Ulang: Dapat didaur ulang tanpa kehilangan kualitas.\nDampak Lingkungan: Emisi karbon dari penambangan dan peleburan logam.\nAlternatif Ramah Lingkungan: Menggunakan logam daur ulang, desain modular untuk perbaikan mudah.\nCara Mengurangi Penggunaan: Memilih produk tahan lama dan dapat diperbaiki." 
    },
    { 
        id: "3", 
        name: "Glass", 
        icon: require("@/assets/images/glass.png"), 
        description: "Sampah kaca seperti botol kaca, pecahan kaca, dan wadah kaca bekas lainnya." 
    },
    { 
        id: "4", 
        name: "Fabric", 
        icon: require("@/assets/images/fabric.png"), 
        description: "Sampah kain seperti pakaian bekas, kain perca, dan bahan tekstil lainnya." 
    },
    { 
        id: "5", 
        name: "Organic", 
        icon: require("@/assets/images/organic.png"), 
        description: "Sampah organik seperti sisa makanan, dedaunan, dan bahan yang mudah terurai." 
    },
    { 
        id: "6", 
        name: "Paper", 
        icon: require("@/assets/images/paper.png"), 
        description: "Sampah kertas seperti koran bekas, majalah, dan kardus." 
    },
    { 
        id: "7", 
        name: "Wood", 
        icon: require("@/assets/images/wood.png"), 
        description: "Sampah kayu seperti kursi, meja." 
    },
    { 
        id: "8", 
        name: "Electronic", 
        icon: require("@/assets/images/electronic.png"), 
        description: "Sampah elektronik seperti baterai, handphone." 
    },
]