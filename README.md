# Desafio Técnico QA - Agibank 🚀

![Java API Tests](https://github.com/FernandoDamasioAlves/Desafio-QA-Agi-PJ/actions/workflows/java-tests.yml/badge.svg)

Solução completa de automação cobrindo testes de **API**, **Web (E2E)** e **Performance**, com foco em qualidade, organização e reprodutibilidade.

---

## 📌 Objetivo

Validar:

- A funcionalidade de busca do Blog do Agi
- A integridade dos endpoints da Dog API
- O desempenho do fluxo de compra no BlazeDemo

---

## 🛠️ Tecnologias Utilizadas

| Camada      | Tecnologias                              |
|-------------|------------------------------------------|
| Web         | Cypress                                  |
| API         | Java + RestAssured + JUnit 5 + Maven     |
| Performance | Apache JMeter                            |
| CI/CD       | GitHub Actions                           |

---

## 📁 Estrutura do Projeto

```
Desafio-QA-Agi-PJ/
│
├── api-dog-java/
├── web-cypress/
├── performance-jmeter/
└── README.md
```

---

## ⚙️ Pré-requisitos

- Node.js (v18+)
- Java (v17+)
- Maven (v3.8+)
- Apache JMeter (v5.5+)

---

## 🚀 Como Executar

### Web (Cypress)
```bash
cd web-cypress
npm install
npx cypress run
```

### API (Java)
```bash
cd api-dog-java
mvn clean test
```

### Performance (JMeter)
- Abrir o arquivo `.jmx` no JMeter
- Executar o plano de teste
- Ou consultar os resultados no `.csv`

---

## 🌐 Testes Web

### Cenários Automatizados

| # | Cenário | Resultado |
|---|---------|-----------|
| 1 | Pesquisa com termo válido — valida que o sistema retorna resultados relevantes | ✅ |
| 2 | Pesquisa sem resultados — valida comportamento quando não há retorno | ✅ |

> 📌 Estes cenários foram escolhidos por representarem os fluxos principais e de exceção da funcionalidade de busca.

---

## 🔌 Testes de API

### Endpoints Testados

| Método | Endpoint                    |
|--------|-----------------------------|
| GET    | `/breeds/list/all`          |
| GET    | `/breed/{breed}/images`     |
| GET    | `/breeds/image/random`      |

### Validações
- Status code 200
- Estrutura da resposta
- Dados não vazios

---

## 📈 Resultados da Execução

| Camada       | Status              |
|--------------|---------------------|
| Web (Cypress)| ✅ 2/2 cenários passando |
| API (Java)   | ✅ BUILD SUCCESS (3 testes) |

---

## 🚀 Testes de Performance

### Resultados

| Métrica      | Resultado  | Critério de Aceitação |
|--------------|------------|-----------------------|
| Throughput   | ~176 req/s | 250 req/s             |
| Percentil 90 | ~667 ms    | < 2.000 ms ✅         |
| Taxa de erro | ~0.66%     | —                     |

### 📊 Análise

O sistema atendeu ao critério de tempo de resposta (p90 < 2s), porém não atingiu o throughput esperado de 250 req/s.

Fatores:
- Execução em ambiente público (BlazeDemo)
- Limitação de recursos locais
- Capacidade do servidor alvo
- Configuração de carga

> 📌 Apesar de não atingir o throughput máximo, o sistema apresentou estabilidade, com baixa taxa de erro e tempo de resposta consistente.

---

## ⚙️ CI/CD (GitHub Actions)

Este repositório possui um workflow configurado para executar os testes de API automaticamente a cada push na branch principal, garantindo a integridade do código.

---

## 👨🏾‍💻 Autor

Desenvolvido por Fernando Damasio Senior QA Engineer focado em qualidade contínua.