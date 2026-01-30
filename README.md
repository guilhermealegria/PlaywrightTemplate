# PlaywrightTemplate

Estrutura básica baseada em functional abstraction (funções puras e fluxos) para Playwright em JavaScript.

## Estrutura
- `src/selectors`: mapeamento de locators
- `src/actions`: ações atômicas em cima dos locators
- `src/flows`: fluxos compostos (cenários)
- `src/utils`: helpers e dados
- `tests`: specs Playwright

## Como rodar
1) Instale dependências: `npm install`
2) Instale os browsers do Playwright (uma vez): `npx playwright install --with-deps`
3) Execute: `npm test`
