export function gerarSenha(valueInput, setSenha, senha){
    senha = "";
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    console.log(valueInput);
    for(let i = 0, n = charset.length; i < valueInput; i++){
        setSenha(senha += charset.charAt(Math.floor(Math.random() * n)));
    }
}

export function copyClip(senhaRef){
    const textoParaCopiar = senhaRef.current.innerText;
    navigator.clipboard.writeText(textoParaCopiar);
    alert("Senha copiada!");
    console.log(senhaRef);
}