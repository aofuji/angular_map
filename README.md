# Urban Map Catanduva

Aplicacao Angular 21 organizada como workspace Nx com uma estrutura inicial de
microfrontend.

## O que foi feito

- O projeto Angular CLI foi migrado para um workspace Nx integrado.
- A aplicacao principal foi movida para `apps/urban-map-catanduva`.
- Foi criado um microfrontend remoto em `apps/urban-map-remote`.
- A federacao foi configurada com `@angular-architects/native-federation-v4`,
  compativel com Angular 21.
- O host carrega o remote em tempo de execucao pela rota `/mfe`.
- O manifesto do host fica em
  `apps/urban-map-catanduva/src/assets/federation.manifest.json`.

## Aplicacoes

| App | Papel | Porta |
| --- | --- | --- |
| `urban-map-catanduva` | Host/shell principal | `4200` |
| `urban-map-remote` | Microfrontend remoto | `4201` |

O host espera encontrar o remote em:

```text
http://localhost:4201/remoteEntry.json
```

## Como buildar

```bash
npm run build:remote
npm run build
```

Ou usando Nx diretamente:

```bash
npx nx build urban-map-remote --configuration development
npx nx build urban-map-catanduva --configuration development
```

## Como rodar

Depois do build, suba os dois artefatos estaticos em terminais separados.

Remote:

```bash
cd dist/apps/urban-map-remote/browser
python3 -m http.server 4201
```

Host:

```bash
cd dist/urban-map-catanduva/browser
python3 -m http.server 4200
```

Abra o host no navegador:

```text
http://localhost:4200
```

Use o link `Microfrontend` no topo para carregar o remote.

## Scripts uteis

```bash
npm run start:remote
npm run start:host
npm run build:remote
npm run build
```

Observacao: neste ambiente, o `nx serve` encerrou imediatamente sem manter o dev
server ativo. Por isso, o fluxo validado foi `build` + servidor estatico com
`python3 -m http.server`.

## Arquivos principais

- `nx.json`: configuracao do workspace Nx.
- `apps/urban-map-catanduva/project.json`: targets do host.
- `apps/urban-map-remote/project.json`: targets do remote.
- `apps/urban-map-catanduva/src/app/app.routes.ts`: rota `/mfe`.
- `apps/urban-map-catanduva/src/assets/federation.manifest.json`: endereco do remote.
- `apps/urban-map-remote/federation.config.mjs`: exposicao do componente remoto.
