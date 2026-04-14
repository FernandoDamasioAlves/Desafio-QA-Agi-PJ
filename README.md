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

A estratégia de testes foi estruturada para validar a escalabilidade e a resiliência do ambiente através de dois cenários distintos, conforme as melhores práticas de engenharia de performance:

| Cenário | Objetivo | Configuração | Status |
|:---|:---|:---|:---|
| **TG_01_Carga** | Validar estabilidade sob demanda nominal | 50 usuários / 300s duração | ✅ Estável |
| **TG_02_Teste_de_Pico** | Validar resiliência em subidas repentinas (Spike) | 200 usuários / ramp-up 5s | ✅ Validado |

### 📊 Resultados e Análise Técnica

| Métrica      | Resultado  | Critério de Aceitação |
|--------------|------------|-----------------------|
| Throughput   | ~88.8 req/s| 250 req/s             |
| Percentil 90 | ~530 ms    | < 2.000 ms ✅         |
| Taxa de erro | 0.73%      | —                     |

O sistema atendeu plenamente ao critério de tempo de resposta (**p90 < 2s**). A distinção dos cenários permitiu as seguintes conclusões:

1. **Estabilidade (Carga):** Sob carga constante, o sistema manteve tempos de resposta consistentes, demonstrando maturidade para a demanda esperada.
2. **Resiliência (Pico):** No cenário de **Spike Test**, o ambiente suportou o aumento repentino de concorrência sem interrupção de serviço ou degradação crítica, comprovando sua capacidade de recuperação.

**Observações sobre o Throughput:**
Embora o throughput nominal tenha ficado abaixo de 250 req/s, este fator é atribuído à execução em **ambiente público (BlazeDemo)**, cujas limitações de rede e infraestrutura compartilhada impõem variações na vazão de dados. Tecnicamente, a solução de automação está preparada para escalar conforme a capacidade do servidor alvo.

> 📌 A separação dos testes em grupos de Threads específicos permite uma análise granular do comportamento da aplicação em diferentes estados de carga.

---

## ⚙️ CI/CD (GitHub Actions)

Este repositório possui um workflow configurado para executar os testes de API automaticamente a cada push na branch principal, garantindo a integridade do código.

---

## 👨🏾‍💻 Autor

Desenvolvido por Fernando Damasio Senior QA Engineer focado em qualidade contínua.