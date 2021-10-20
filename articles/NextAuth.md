# Sistema de autenticação com NextAuth
É fácil criar um sistema se autenticação simpes com NextAuth.

## Primeiros passos
1. Crie um arquivo chamado […nextauth].js dentro de /pages/api/auth
2. Crie nesse arquivo “NextAuth” e passe como argumento um objeto
O objeto que passamos como argumento para NextAuth é simples. contém apenas uma array de provedores de autenticação, que chamaremos de “providers”.

## Usando Github como provedor de autenticação
Caso usemos o Github como provedor de autenticação, precisamos passar como argumento um objeto simples. Esse objeto deve conter duas propriedades principais: “clientId” e “clientSecret”. Essas informações podem ser obtidas em sua conta do Github em Setting > Developers settings > OAuth Apps.

Ao configurarmos “OAuth Apps” no Github, podemos preencher quase todos os campos intuitivamente. O campo mais importante é “Authorization callback URL”. Nós podemos preencher esse campo da seguinte forma <URL>/api/auth/callback.

Talvez você queira também passar uma terceira propriedade como argumento para GithubProvider, a propriedade “scope”. Essa propriedade define a quais informações do usuários solicitaremos acesso. O valor “read:user” para esta propriedade especificará que desejamos apenas acessar dados básicos do usuário, como nome, email, avatar etc.


## Funções principais

### signIn()
Para efetivarmos a autenticação, podemos usar a função "signIn()" que pode ser importada de ‘next-auth/client’. Quando chamarmos essa função, devemos passar como argumento, uma string com o nome do provedor de autenticação.

### useSession()
Este é um hook que nos ajuda a saber se o usuário está ou não logado. Esse hook retorna uma array com o objeto “session”. Com esse objeto, podemos acessar o usuário logado e seus dados.

### Provider ‘next-auth/client’
Provider é um “contexto” existente em “NextAuth” que pode ser usado para compartilhar as informações de autenticação de usuário para todas as páginas e componentes da aplicação. Basta incluirmos a tag desse contexto em nosso _app.