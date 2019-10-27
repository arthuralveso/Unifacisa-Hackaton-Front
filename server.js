
function getServer() {
    return {
        "produtos": getProdutos(),
        "categorias": getCategorias()
    }
}

function getProdutos() {
    return [
        {
            id: 1,
            nome: 'Produto 1',
            desc: 'Descricao Teste do Produto 1',
            categoriasId: 1,
            valor: 13.50
        },
        {
            id: 2,
            nome: 'Produto 2',
            categoriasId: 1,
            desc: 'Descricao Teste do Produto 2',
            valor: 34.99
        },
        {
            id: 3,
            nome: 'Produto 3',
            categoriasId: 2,
            desc: 'Descricao Teste do Produto 3',
            valor: 102.67
        }
    ];
}

function getCategorias() {
    return [
        {
            id: 1,
            descricao: 'Brinquedos'
        },
        {
            id: 2,
            descricao: 'Informática'
        },
        {
            id: 3,
            descricao: 'Livros'
        }
    ]
}

module.exports = getServer;
