function resolverEquacao() {
    // Obtém os valores dos coeficientes a, b e c
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // Atualiza o visor da equação
    const equacaoDiv = document.getElementById('equacao');
    equacaoDiv.innerHTML = `Equação: ${a}x² ${b >= 0 ? '+ ' : '- '}${Math.abs(b)}x ${c >= 0 ? '+ ' : '- '}${Math.abs(c)} = 0`;

    // Calcula o discriminante
    const discriminante = b * b - 4 * a * c;

    // Elemento onde os resultados serão exibidos
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    // Passo 1: Mostrar o discriminante
    resultadoDiv.innerHTML += `<p><strong>Passo 1:</strong> Calcular o discriminante:</p>`;
    resultadoDiv.innerHTML += `<p>Δ = b² - 4ac = ${b}² - 4(${a})(${c}) =<br>${b * b} - ${4 * a * c} = ${discriminante}</p>`;

    // Passo 2: Verificar o discriminante e calcular as raízes
    if (discriminante > 0) {
        // Duas raízes reais diferentes
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        resultadoDiv.innerHTML += `<p><strong>Passo 2:</strong> Discriminante > 0, então temos duas raízes reais diferentes.</p>`;
        resultadoDiv.innerHTML += `<p>x1 = (-b + √Δ) / 2a = (${b} + √${discriminante}) / 2(${a}) = ${x1}</p>`;
        resultadoDiv.innerHTML += `<p>x2 = (-b - √Δ) / 2a = (${b} - √${discriminante}) / 2(${a}) = ${x2}</p>`;
    } else if (discriminante === 0) {
        // Uma raiz real
        const x = -b / (2 * a);
        resultadoDiv.innerHTML += `<p><strong>Passo 2:</strong> Discriminante = 0, então temos uma raiz real.</p>`;
        resultadoDiv.innerHTML += `<p>x = -b / 2a = -(${b}) / 2(${a}) = ${x}</p>`;
    } else {
        // Raízes complexas
        const parteReal = -b / (2 * a);
        const parteImaginaria = Math.sqrt(-discriminante) / (2 * a);
        resultadoDiv.innerHTML += `<p><strong>Passo 2:</strong> Discriminante < 0, então temos duas raízes complexas.</p>`;
        resultadoDiv.innerHTML += `<p>x1 = (-b + √(-Δ)i) / 2a = (${b} + √${-discriminante}i) / 2(${a}) = ${parteReal} + ${parteImaginaria}i</p>`;
        resultadoDiv.innerHTML += `<p>x2 = (-b - √(-Δ)i) / 2a = (${b} - √${-discriminante}i) / 2(${a}) = ${parteReal} - ${parteImaginaria}i</p>`;
    }
}