document.addEventListener("DOMContentLoaded", function () {
    let metas = {
        "metaCardcar": 3000,
        "metaCar": 20000,
        "metaHouse": 20000
    };

    let valoresObtidos = {
        "metaCardcar": 0, 
        "metaCar": 0,
        "metaHouse": 0
    };

    // Inicializa as metas
    Object.keys(metas).forEach(metaId => {
        atualizarMeta(metaId, 0);
    });

    function atualizarMeta(metaId, valorAdicional) {
        valoresObtidos[metaId] += valorAdicional;
        let percentual = (valoresObtidos[metaId] / metas[metaId]) * 100;
        
        // Atualiza a barra de progresso
        document.getElementById(`progress${metaId.substring(4)}`).style.width = `${percentual}%`;
        
        // Atualiza o texto
        document.getElementById(metaId).textContent = 
            `Meta: R$ ${valoresObtidos[metaId].toLocaleString('pt-BR', {minimumFractionDigits: 2})} / R$ ${metas[metaId].toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    }

    // Exemplo de como adicionar valores (pode ser chamado de outros eventos)
    // atualizarMeta("metaCardcar", 500);
    // atualizarMeta("metaCar", 3000);
    // atualizarMeta("metaHouse", 2000);
});