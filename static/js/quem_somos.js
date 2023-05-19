function abrirModal(carregarModal){
    console.log("Carregar a janela modal: " + carregarModal);
    let modal = document.getElementById('vis-modal');

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function fecharModal(fecharModal){
    console.log("Fechar a janela modal: " + fecharModal);

    let modal = document.getElementById(fecharModal);

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}