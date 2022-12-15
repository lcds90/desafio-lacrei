# Desafio Lacrei 🏳️‍🌈 | Front end ✨🌈

Esse projeto envolve em recriar um layout de acordo com o figma para o voluntariado da Lacrei.

## Tarefas ✅

### Execução 🏗️

- [ ] Replicar layout de acordo com figma
- [ ] Executar navegação entre as telas
- [ ] Fazer deploy da aplicação
- [ ] Responsividade

---

### Desenvolvimento 🖥️

- [ ] Next.js
- [ ] Styled components
- [ ] Typescript
- [ ] Testes

---

## Recursos

**[Figma](https://www.figma.com/file/rinPq1hNUad5M5P4B9Sl23/Desafio?node-id=2%3A15&t=apIxxo3pcKbKGRX4-0)**: Acesse o figma para ter acesso ao layout 

[**Aplicação**](https://desafio-lacrei-five.vercel.app): Confira como deve ficar a aplicação após ser finalizada

# Detalhes técnicos

Este projeto foi gerado a partir do [template de styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components), usando uma solução de estilo diferente de [styled-jsx](https://github.com/vercel/styled-jsx) que também oferece suporte a estilos universais.
Isso significa que podemos fornecer os estilos necessários para a primeira renderização no HTML e, em seguida, carregar o restante no cliente.
Neste projeto está sendo utilizado [styled-components](https://github.com/styled-components/styled-components).

Este projeto usa o [SWC](https://nextjs.org/docs/advanced-features/compiler#styled-components) baseado em Rust em Next.js para melhor desempenho do que o Babel.

## Nota

Ao utilizar um [Link](https://nextjs.org/docs/api-reference/next/link) de `next/link` dentro de um styled-component, o [as](https://styled-components. com/docs/api#as-polymorphic-prop) fornecido por `styled` colidirá com o prop `as` do Link e fará com que styled-components lance um erro `Invalid tag`. Para evitar isso, você pode usar o prop recomendado [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) de styled-components ou usar um prop nomeado diferente para passar para um `styled` Ligação.

<details>
<summary>Expandir exemplo</summary>
<br />

**components/StyledLink.js**

```javascript
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
```

**pages/index.js**

```javascript
import StyledLink from '../components/StyledLink'

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
)
```

</details>
