document.getElementById("calcular").addEventListener("click", function () {
  const valorVenda = parseFloat(document.getElementById("valor_venda").value);
  const itensVendidos = document.getElementById("itens_vendidos").value;
  const irpf = parseFloat(document.getElementById("irpf").value);
  const pis = parseFloat(document.getElementById("pis").value);
  const cofins = parseFloat(document.getElementById("cofins").value);
  const inss = parseFloat(document.getElementById("inss").value);
  const issqn = parseFloat(document.getElementById("issqn").value);

  if (
    isNaN(valorVenda) ||
    itensVendidos.trim() === "" ||
    isNaN(irpf) ||
    isNaN(pis) ||
    isNaN(cofins) ||
    isNaN(inss) ||
    isNaN(issqn)
  ) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  const valorIRPF = (irpf / 100) * valorVenda;
  const valorPIS = (pis / 100) * valorVenda;
  const valorCOFINS = (cofins / 100) * valorVenda;
  const valorINSS = (inss / 100) * valorVenda;
  const valorISSQN = (issqn / 100) * valorVenda;
  const totalImpostos = valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;
  const valorLiquido = valorVenda - totalImpostos;
  const resultado = `
    <h2>Nota Fiscal</h2>
    <p><strong>Itens Vendidos:</strong> ${itensVendidos}</p>
    <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
    <p><strong>Valor Líquido (após impostos):</strong> R$ ${valorLiquido.toFixed(2)}</p>
    <table>
      <thead>
        <tr>
          <th>Imposto</th>
          <th>Porcentagem (%)</th>
          <th>Valor Calculado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>IRPF</td>
          <td>${irpf}%</td>
          <td>R$ ${valorIRPF.toFixed(2)}</td>
        </tr>
        <tr>
          <td>PIS</td>
          <td>${pis}%</td>
          <td>R$ ${valorPIS.toFixed(2)}</td>
        </tr>
        <tr>
          <td>COFINS</td>
          <td>${cofins}%</td>
          <td>R$ ${valorCOFINS.toFixed(2)}</td>
        </tr>
        <tr>
          <td>INSS</td>
          <td>${inss}%</td>
          <td>R$ ${valorINSS.toFixed(2)}</td>
        </tr>
        <tr>
          <td>ISSQN</td>
          <td>${issqn}%</td>
          <td>R$ ${valorISSQN.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  `;

  document.getElementById("resultado").innerHTML = resultado;
});
