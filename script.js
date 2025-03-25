document.addEventListener("DOMContentLoaded", function () {


    let metas = {
        "metaCardcar": 3000,
        "metaCar": 20000,
        "metaHouse": 20000
    };

    let valoresObtidos = {
        "metaCardcar": parseFloat(localStorage.getItem("metaCardcar")) || 0,
        "metaCar": parseFloat(localStorage.getItem("metaCar")) || 0,
        "metaHouse": parseFloat(localStorage.getItem("metaHouse")) || 0
    };

    atualizarMeta("metaCardcar");
    atualizarMeta("metaCar");
    atualizarMeta("metaHouse");

    function atualizarMeta(metaId) {
        let valorMeta = metas[metaId];
        let valorObtido = valoresObtidos[metaId];
        let percentual = (valorObtido / valorMeta) * 100;

        document.getElementById(`progress${metaId.substring(4)}`).style.width = `${percentual}%`;

        document.getElementById(metaId).textContent = 
            `Meta: R$ ${valorObtido.toLocaleString('pt-BR', {minimumFractionDigits: 2})} / R$ ${valorMeta.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    }

    function adicionarSaldo(metaId) {
        let inputElement = document.getElementById(`input${metaId.substring(4)}`);
        let valorAdicional = parseFloat(inputElement.value);

        if (isNaN(valorAdicional) || valorAdicional <= 0) {
            alert("Por favor, insira um valor válido.");
            return;
        }

        valoresObtidos[metaId] += valorAdicional;

        localStorage.setItem(metaId, valoresObtidos[metaId]);

        atualizarMeta(metaId);

        inputElement.value = '';
    }

    document.getElementById("addCardcar").addEventListener("click", function () {
        adicionarSaldo("metaCardcar");
    });

    document.getElementById("addCar").addEventListener("click", function () {
        adicionarSaldo("metaCar");
    });

    document.getElementById("addHouse").addEventListener("click", function () {
        adicionarSaldo("metaHouse");
    });

});


function abrirInput(id, id2) {
    id2.style.height = "0px";
    id2.style.padding = "0px";
    id.style.height = "60px";
}

function fecharInput(id, id2) {
    id2.style.height = "auto";
    id2.style.padding = "10px 20px 10px 20px";
    id.style.height = "0px";
}