const PRODUTOS = [
    {nome: 'Box Zygmunt Bauman. Para Entender o Mundo Líquido', preco: 161, imagem: "https://images-na.ssl-images-amazon.com/images/I/51Rp%2B4Y1z0L._SX258_BO1,204,203,200_.jpg"},
    {nome: 'Seja Foda', preco: 27, imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQfYWTQht_Nnjo9WMWTsgODnxin8YgwJ8N7ieaqBOo_Z4lSBara9cT35Db5w6JUpBQ2yt8wgDuFQbM2U2C2F0ROcdcNPabH_bFcVbyq8yZL-tEYAfp9S23f&amp;usqp=CAE"},
    {nome: 'IKIGAI: Os segredos dos japoneses para uma vida longa e feliz', preco: 27, imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQJy7LBVPcW3QaRkmaJyMmLToak2pnqFIEN5jlWuwn7WkZ763V6ZSLAFBtf5eefzwf8e3yFMsFJLmUBuIC60sLdlVolCZgdJqhb_VPcYG0aaItFTc-yH9Kydw&amp;usqp=CAE"},
    {nome: 'As Ciências Ocultas', preco: 75, imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSDiEX5UvGcYrkZJbgDBboTVUMfsLCysnXnCE114tHBOdN0bzY50Ynnt_9XQ7czBmsxvhKmP-_p-iOc0wLZUTT2eT_LZkGTIw3WATFQc7TMgJc0hjBK9L-3&amp;usqp=CAE"},
    {nome: 'As Emoções das Pessoas Normais', preco: 195, imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRKAMPaUaTOkCg0zOSilPdiFQ9A3dsebA66YpJ8_H73grqLiYKc-T7nQxsHmAqXk0CjMVViXpd5h3RNBjzBSrffmP6x8fyLAzpdrODLYeogiaf6GEQ1CSEB&amp;usqp=CAE"},
    {nome: 'E Se', preco: 20, imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTelv8nvh3p8hm1cW3xCzpFSrKiGHKGFL5EnhhhXq95Xfp8PlbK8fJEzGlzhQQyPENWGrPF0dB4dJw4PBVA_z_jd0VmEEdoenOypgMPaolURMmOPa6XEbGbkw&amp;usqp=CAE"},
    {nome: 'Cultura geral: Tudo que se deve saber', preco: 95, imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQRn3xYfnvEmMYLiE10Qd38YYsq_Lo09DCZ-1k_R-hOWCeq_8T0iAvEkSdcvxGr3Ep9NpCmvTZx0096t3XnYc-9du2gGC-B8gGcdk0J2UdyHv84dIbq5H_tjg&amp;usqp=CAE"},
    {nome: 'Os grandes julgamentos da História', preco: 49, imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQRBPXWuW0Ns_WPFbxkgKh69mp2aX8FqP0Qx2m6w3wI1l2goHu0JGIkq3ecR2XkgkZ0THOHP9utB_N7M2Xe_lb-nBmckjJCONTTbKNxCgPVaD3JsbSIlBxM&amp;usqp=CAE"}
];

class BancoDeDados {
    static getProdutos() {
        return PRODUTOS;
    }
}

export default BancoDeDados;