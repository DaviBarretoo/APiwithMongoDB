# Changelog

## [1.0.0] - 2024-07-20

### Added

- Implementação completa da API utilizando TypeScript, Node.js, MongoDB e Express.
- Configuração das rotas iniciais `emailsOfUsers` e `userdelete`.
- Integração da biblioteca `nodemon` para reinicialização automática durante o desenvolvimento.
- Inclusão do arquivo `.gitignore` para a exclusão de arquivos desnecessários do controle de versão.

### Changed

- Atualização do `package.json` para incluir as dependências necessárias.
- Configuração do `nodemon` para reiniciar automaticamente o servidor em resposta a alterações no código.

### Fixed

- Correção de erros iniciais na configuração do servidor.

## [1.0.1] - 2024-07-24

### Added

- Implementação de verificação para garantir que o usuário não seja duplicado.

### Changed

- Atualização da rota de `register`.

### Fixed

- Correção de problemas na criação de usuários.

## [2.0.0] - 2024-07-25

### Added

- Desenvolvimento dos controladores de usuários em `controllers`.
- Implementação de validação de e-mail para aprimorar a integridade dos dados.

### Changed

- Refatoração das rotas para melhorar a organização e eficiência.

### Fixed

- (Nenhuma correção nesta versão.)

## [2.0.1] - 2024-07-25

### Added

- (Nenhuma adição nesta versão.)

### Changed

- (Nenhuma alteração nesta versão.)

### Fixed

- Correção de erro ao deletar um usuário.

## [3.0.0] - 2024-07-30

### Added

- Implementação de autenticação JWT para restringir o acesso a rotas específicas, aumentando a segurança da aplicação.
- Criação da rota de login para autenticação de usuários.

### Changed

- Ajuste na rota de login para melhorar a funcionalidade e segurança.

### Fixed

- Correção do problema que impedia usuários de acessar rotas privadas.

## [3.0.1] - 2024-08-03

### Added

- Rota para atualização de dados do Usuários

### Changed

-

### Fixed

- Correção de segurança no `SECRET TOKEN`.
