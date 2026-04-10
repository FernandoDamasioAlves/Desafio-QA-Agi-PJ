# Desafio Técnico QA - Agibank 🚀

Solução completa de automação cobrindo testes de **API**, **Web (E2E)** e **Performance**, com foco em qualidade, organização e reprodutibilidade.

---

## 📌 Objetivo

Validar:

- A funcionalidade de busca do Blog do Agi
- A integridade dos endpoints da Dog API
- O desempenho do fluxo de compra no BlazeDemo

---

## 🛠️ Tecnologias Utilizadas

- **Web:** Cypress
- **API:** Java + RestAssured + JUnit 5 + Maven
- **Performance:** Apache JMeter

---

## 📁 Estrutura do Projeto

Desafio-QA-Agi-PJ/
│
├── api-dog-java/
├── web-cypress/
├── performance-jmeter/
└── README.md


---

## ⚙️ Pré-requisitos

- Node.js (v18+)
- Java (v11+)
- Maven (v3.8+)
- Apache JMeter (v5.5+)

---

## 🚀 Como Executar

### Web (Cypress)
```bash
cd web-cypress
npm install
npx cypress run

API (Java)

cd api-dog-java
mvn clean test

Performance (JMeter)
Abrir o arquivo .jmx no JMeter
Executar o plano de teste
Ou consultar os resultados no .csv

Testes Web
Cenários Automatizados
Pesquisa com termo válido
Valida que o sistema retorna resultados relevantes
Pesquisa sem resultados
Valida comportamento quando não há retorno

📌 Estes cenários foram escolhidos por representarem os fluxos principais e de exceção da funcionalidade de busca.

Testes de API
Endpoints Testados
GET /breeds/list/all
GET /breed/{breed}/images
GET /breeds/image/random
Validações
Status code 200
Estrutura da resposta
Dados não vazios

📈 Resultados da Execução
Web (Cypress)
✔️ 2/2 cenários passando
API (Java)
✔️ BUILD SUCCESS (3 testes)

🚀 Testes de Performance

Resultados

| Métrica      | Resultado  |
| ------------ | ---------- |
| Throughput   | ~176 req/s |
| Percentil 90 | ~667 ms    |
| Taxa de erro | ~0.66%     |


Critério de Aceitação
250 requisições por segundo
p90 < 2 segundos


📊 Análise

O sistema atendeu ao critério de tempo de resposta (p90 < 2s), porém não atingiu o throughput esperado de 250 req/s.

Possíveis fatores:

Execução em ambiente público (BlazeDemo)
Limitação de recursos locais
Capacidade do servidor alvo
Configuração de carga

📌 Apesar de não atingir o throughput máximo, o sistema apresentou estabilidade, com baixa taxa de erro e tempo de resposta consistente.


⚙️ CI/CD (GitHub Actions)

Este repositório possui um workflow configurado para executar os testes de API automaticamente a cada push na branch principal, garantindo a integridade do código.

👨🏾‍💻 Autor

Desenvolvido por um Senior QA Engineer / SDET focado em qualidade contínua.

