---

description: Instruções para implementação de interfaces a partir de designs do Figma, priorizando fidelidade visual, reutilização de componentes existentes e boas práticas de desenvolvimento front-end.
applyTo: "**/*.{html,scss,css,sass,ts,tsx,js,jsx}"
--------------------------------------------------

# Objetivo

Ao implementar interfaces baseadas em um design do Figma, preserve a fidelidade visual e estrutural do projeto. Não introduza alterações estéticas ou funcionais que não estejam explicitamente solicitadas.

# Regras obrigatórias

## Fidelidade ao design

* Não altere o layout definido no Figma.
* Preserve espaçamentos, margens, alinhamentos e proporções entre elementos.
* Respeite dimensões, posicionamentos, hierarquia visual e organização dos componentes.
* Não simplifique, reorganize ou omita elementos da interface sem solicitação explícita.

## Componentes

* Não remova componentes existentes.
* Reutilize componentes já presentes no projeto sempre que possível.
* Evite criar componentes duplicados quando já existir uma implementação equivalente.
* Mantenha consistência com o Design System adotado pelo projeto.

## Estilos

* Utilize CSS Grid e Flexbox conforme a estrutura indicada pelo design.
* Preserve tipografia, cores, bordas, sombras e raios de borda especificados no Figma.
* Utilize SCSS/CSS organizado e reutilizável, evitando duplicação de estilos.

## Responsividade

* Mantenha o comportamento responsivo previsto no design.
* Não elimine adaptações para diferentes tamanhos de tela.
* Preserve breakpoints e alinhamentos durante o redimensionamento.

## Acessibilidade

* Utilize HTML semântico sempre que possível.
* Inclua atributos ARIA quando apropriado.
* Associe corretamente labels aos campos de formulário.
* Garanta contraste adequado e navegação acessível.

# Sequência recomendada para implementação

1. Construir a estrutura HTML semântica.
2. Aplicar estilos CSS/SCSS.
3. Implementar ajustes de responsividade.
4. Adicionar lógica TypeScript/JavaScript.
5. Integrar comportamento dinâmico e consumo de dados apenas após a interface estar fiel ao design.

# Prioridade

Em caso de conflito entre otimização de código e fidelidade ao Figma, priorize a fidelidade ao design, salvo instrução explícita em contrário.

## Uso do Figma

- Considere o Figma como fonte única da verdade para a interface.
- Não faça inferências ou simplificações visuais quando o design fornecer uma definição explícita.
- Em caso de dúvida sobre um detalhe do layout, prefira seguir o Figma em vez de assumir uma implementação alternativa.