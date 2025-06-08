import { WasteCategory } from "@/constants/types";

export const WasteCategories: WasteCategory[] = [
    { 
        id: "1", 
        name: "Plastic", 
        icon: require("@/assets/images/plastic.png"), 
        description: 
            "Sampah plastik seperti botol, sedotan, kantong kresek.\n" +
            "Jenis: PET, HDPE, PVC, LDPE, PP, PS.\n" +
            "Daur ulang dengan pencucian dan peleburan.\n" +
            "Dampak: Pencemaran lingkungan dan sulit terurai.\n" +
            "Alternatif: Bioplastik dan penggunaan ulang."
    },
    { 
        id: "2",
        name: "Metal", 
        icon: require("@/assets/images/metal.png"), 
        description: 
            "Sampah logam seperti kaleng, peralatan dapur.\n" +
            "Jenis: Aluminium, besi, baja, tembaga.\n" +
            "Daur ulang melalui peleburan ulang.\n" +
            "Dampak: Emisi karbon dari peleburan.\n" +
            "Alternatif: Logam daur ulang dan produk tahan lama."
    },
    { 
        id: "3", 
        name: "Glass", 
        icon: require("@/assets/images/glass.png"), 
        description: 
            "Sampah kaca seperti botol dan pecahan kaca.\n" +
            "Dapat didaur ulang dengan peleburan.\n" +
            "Penggunaan ulang mengurangi sampah."
    },
    { 
        id: "4", 
        name: "Fabric", 
        icon: require("@/assets/images/fabric.png"), 
        description: 
            "Sampah kain seperti pakaian bekas dan kain perca.\n" +
            "Dapat didaur ulang atau digunakan ulang.\n" +
            "Pengurangan dengan donasi pakaian layak pakai."
    },
    { 
        id: "5", 
        name: "Organic", 
        icon: require("@/assets/images/organic.png"), 
        description: 
            "Sampah organik seperti sisa makanan dan dedaunan.\n" +
            "Dapat diolah menjadi kompos.\n" +
            "Mengurangi sampah dan memperbaiki tanah."
    },
    { 
        id: "6", 
        name: "Paper", 
        icon: require("@/assets/images/paper.png"), 
        description: 
            "Sampah kertas seperti koran, majalah, dan kardus.\n" +
            "Daur ulang dengan penghancuran dan cetak ulang.\n" +
            "Kurangi penggunaan kertas untuk lingkungan."
    },
    { 
        id: "7", 
        name: "Wood", 
        icon: require("@/assets/images/wood.png"), 
        description: 
            "Sampah kayu seperti kursi dan potongan kayu.\n" +
            "Dapat diperbaiki atau diolah ulang.\n" +
            "Kurangi pemborosan kayu."
    },
    { 
        id: "8", 
        name: "Electronic", 
        icon: require("@/assets/images/electronic.png"), 
        description: 
            "Sampah elektronik seperti baterai dan handphone.\n" +
            "Perlu pengelolaan khusus karena bahan berbahaya.\n" +
            "Perbaiki dan gunakan perangkat lebih lama."
    },
];
