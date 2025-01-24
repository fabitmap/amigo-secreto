const listaAmigos = [];
const inputAmigo = document.getElementById('amigo');
const listaAmigosElemento = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function adicionarAmigo() {
    const nomeAmigo = inputAmigo.value.trim();

    if (!nomeAmigo) {
        alert('Adicione algum nome.');
        return;
    }

    if (listaAmigos.includes(nomeAmigo)) {
    alert('Este nome já está na lista.');
    return;
    }

    listaAmigos.push(nomeAmigo);
    atualizarLista();
    inputAmigo.value = '';
}

inputAmigo.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});

function atualizarLista() {
    listaAmigosElemento.innerHTML = '';
    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = listaAmigos[i];
        listaAmigosElemento.appendChild(li);
    }
}

function sortearAmigo() {
    if (!listaAmigos.length) {
        alert('Adicione amigos antes de sortear');
        return;
    }

    const sorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigo = listaAmigos[sorteado];

    resultado.textContent = amigo;
}
