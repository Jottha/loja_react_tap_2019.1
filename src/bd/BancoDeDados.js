class BancoDeDados {
    static getLivros = async () => {
        const response = await fetch('http://localhost:9000/livros');
        const livros = await response.json();

        if (response.status !== 200) {
            throw new Error(livros.message);
        }
        
        return livros.map((l) => {
            return {...l, preco: parseFloat(l.preco)}
        });
    }
}

export default BancoDeDados;