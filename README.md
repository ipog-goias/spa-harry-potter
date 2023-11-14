# SpaHarryPotter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8.

# CLI para criar estrutura do projeto

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