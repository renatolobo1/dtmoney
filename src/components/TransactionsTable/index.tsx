import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Web site</td>
            <td className="deposit">R$1.000</td>
            <td>Desenvolvimento</td>
            <td>29/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Web site</td>
            <td className="withdraw">- R$500</td>
            <td>Desenvolvimento</td>
            <td>29/02/2021</td>
          </tr>
        </tbody>

      </table>
    </Container>
  );
}