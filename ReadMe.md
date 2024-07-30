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

---

<h1>ENGLISH VERSION ✅</h1>

# Changelog

## [1.0.0] - 2024-07-20

### Added

- Full implementation of the API using TypeScript, Node.js, MongoDB, and Express.
- Configuration of initial routes `emailsOfUsers` and `user delete`.
- Integration of the `nodemon` library for automatic restarts during development.
- Addition of the `.gitignore` file to exclude unnecessary files from version control.

### Changed

- Updated `package.json` to include necessary dependencies.
- Configured `nodemon` to automatically restart the server in response to code changes.

### Fixed

- Fixed initial setup errors in the server configuration.

## [1.0.1] - 2024-07-24

### Added

- Implemented check to ensure that users are not duplicated.

### Changed

- Updated the `register` route.

### Fixed

- Fixed issues with user creation.

## [2.0.0] - 2024-07-25

### Added

- Developed user controllers in `controllers`.
- Implemented email validation to enhance data integrity.

### Changed

- Refactored all routes to improve organization and efficiency.

### Fixed

- (No fixes in this version.)

## [2.0.1] - 2024-07-25

### Added

- (No additions in this version.)

### Changed

- (No changes in this version.)

### Fixed

- Fixed issue with deleting a user.

## [3.0.0] - 2024-07-30

### Added

- Implemented JWT authentication to restrict access to certain routes, enhancing application security.
- Created the login route for user authentication.

### Changed

- Adjusted the login route to improve functionality and security.

### Fixed

- Fixed issue preventing users from accessing private routes.
