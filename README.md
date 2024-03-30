
# Projeto de Testes Automatizados com Playwright e Cucumber

Este projeto é uma implementação de testes automatizados para uma aplicação web utilizando Playwright e Cucumber. O objetivo é automatizar os testes de funcionalidades específicas, como login, para garantir a qualidade e a estabilidade do software.

## Pré-requisitos

- Node.js (versão 20 ou superior)
- Playwright
- Cucumber

## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/eliezer-castro/pw-cucumber.git
   ```
2. Navegue até o diretório do projeto:
   ```
   cd pw-cucumber
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Execução dos Testes

Para executar os testes, use o seguinte comando:

```
npm test
```

Isso iniciará o Playwright e executará os testes definidos no diretório `tests/step_definitions`.

## Estrutura do Projeto

- `tests/step_definitions`: Contém os arquivos de definição de passos para os testes do Cucumber.
- `tests/features`: Contém os arquivos de recursos do Cucumber, que definem os cenários de teste em linguagem natural.



## Licença  

Este projeto está licenciado sob a licença MIT - veja o arquivo `LICENSE` para mais detalhes.
