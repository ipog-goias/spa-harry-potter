# SpaHarryPotter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8.

# CLI para criar estrutura do projeto

```shell
ng new spa-harry-potter
```

## Entrar na pasta do projeto
```shell
cd spa-harry-potter
```

```shell
ng g m core
CREATE src/app/core/core.module.ts (190 bytes)
```
```shell
ng g m shared
CREATE src/app/shared/shared.module.ts (192 bytes)
```
```shell
ng g m characters --routing
CREATE src/app/characters/characters-routing.module.ts (253 bytes)
CREATE src/app/characters/characters.module.ts (296 bytes)
 ```
 ```shell
ng g c characters/characters-list
CREATE src/app/characters/characters-list/characters-list.component.css (0 bytes)
CREATE src/app/characters/characters-list/characters-list.component.spec.ts (616 bytes)
CREATE src/app/characters/characters-list/characters-list.component.ts (237 bytes)
UPDATE src/app/characters/characters.module.ts (414 bytes)
```
```shell
ng g c characters/characters-detail
CREATE src/app/characters/characters-detail/characters-detail.component.css (0 bytes)
CREATE src/app/characters/characters-detail/characters-detail.component.html (32 bytes)
CREATE src/app/characters/characters-detail/characters-detail.component.spec.ts (630 bytes)
CREATE src/app/characters/characters-detail/characters-detail.component.ts (245 bytes)
UPDATE src/app/characters/characters.module.ts (538 bytes)
```
```shell
ng g m spells --routing  
CREATE src/app/spells/spells-routing.module.ts (249 bytes)
CREATE src/app/spells/spells.module.ts (280 bytes)
```
```shell
ng g c spells/spells-list  
CREATE src/app/spells/spells-list/spells-list.component.css (0 bytes)
CREATE src/app/spells/spells-list/spells-list.component.html (26 bytes)
CREATE src/app/spells/spells-list/spells-list.component.spec.ts (588 bytes)
CREATE src/app/spells/spells-list/spells-list.component.ts (221 bytes)
UPDATE src/app/spells/spells.module.ts (382 bytes)
```
```shell
ng g c spells/spells-detail
CREATE src/app/spells/spells-detail/spells-detail.component.css (0 bytes)
CREATE src/app/spells/spells-detail/spells-detail.component.html (28 bytes)
CREATE src/app/spells/spells-detail/spells-detail.component.spec.ts (602 bytes)
CREATE src/app/spells/spells-detail/spells-detail.component.ts (229 bytes)
UPDATE src/app/spells/spells.module.ts (490 bytes)
```

## Preparar o projeto para subir ao github
1. Criar o um repositorio no github
2. Para o projeto existente executar os seguinte comandos:

### Adicionar um 'remote', ou seja, onde iremos 'guardar' o nosso código-fonte
```shell
git remote add origin git@github.com:ipog-goias/spa-harry-potter.git
```

### Alterar o nome da branch master para main
```shell
git branch -M main
```
### Adicionar arquivos para commit
```shell
git add .
```

### Fazer o commit dos arquivos com alguma mensagem
```shell
git commit -m "feat: estrutura inicial do projeto"
```
### Publicar (push) o projeto no github.
```shell
git push -u origin main

Enumerating objects: 60, done.
Counting objects: 100% (60/60), done.
Delta compression using up to 8 threads
Compressing objects: 100% (52/52), done.
Writing objects: 100% (60/60), 127.50 KiB | 953.00 KiB/s, done.
Total 60 (delta 15), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (15/15), done.
To github.com:ipog-goias/spa-harry-potter.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'
```

## Criando camada de serviço (service)

### Service spells

```shell
ng g s spells/spells       
CREATE src/app/spells/spells.service.spec.ts (357 bytes)
CREATE src/app/spells/spells.service.ts (135 bytes)
```
### Service characters
```shell
ng g s characters/characters
CREATE src/app/characters/characters.service.spec.ts (377 bytes)
CREATE src/app/characters/characters.service.ts (139 bytes)
```