# Formas #

As formas (ou shapes) são a matéria-prima do jogo, usadas para formar objetos e ganhar tudo.

Como fazer em puro html nos deixava com limitações, decidi usar imagens para isso. Assim, podemos variar cor, textura, forma, e o shapeholder de todas as formas.

# Composição #

- As imagens devem estar no formato PNG. Primeiro porque está fixo no código, e depois por causa do suporte de png à transparência.
- O fundo das imagens deve ser transparente. Isso por causa de arrastar uma por cima da outra, se o fundo não for transparente, as bordas irão sobrepor a imagem de baixo, causando glitches feios visuais.

## Nome ##

_/src/img/holders/_ & _/src/img/shapes/_

As imagens necessitam de um [ShapeHolder](https://code.google.com/p/dropit-fatec-tg/wiki/Nomenclatura) correspondente.

Em [holders/](https://code.google.com/p/dropit-fatec-tg/source/browse/#svn%2Ftrunk%2Fsrc%2Fimg%2Fholders), deve ser salva a imagem com bordas pretas e fundo vazio, que é o local aonde as formas de fundo preenchido serão arrastadas e colocadas. Também podem ser adicionadas duas irmãs dessa imagem ShapeHolder:
  * **forma`_`placehoder.png**: Imagem "vazia" correspondente à forma
  * **forma`_`highlight`_`grab.png**: Estado da imagem vazia quando a forma correspondente é pegada. sugiro apenas uma troca de cor da borda.
  * **forma`_`highlight`_`hover.png**: Estado da imagem quando a forma correspondente pegada é passada por cima desta. sugiro outra troca de cor.

Em [shapes/](https://code.google.com/p/dropit-fatec-tg/source/browse/#svn%2Ftrunk%2Fsrc%2Fimg%2Fshapes), vão as possíveis cores e texturas da forma. Como o windows automaticamente adiciona " (n)" a imagens renomeadas em conjunto, usei esse mesmo padrão
para estas imagens. devem ficar assim:
  * **forma (1).png**
  * **forma (2).png**
  * **forma (3).png**

# Código #

Como utilizamos apenas Javascript, as formas não são automaticamente reconhecidas. é necessário indicar o código de que estas imagens existem .

_Obs: isto será feito pelo arquivo JSON quando ele existir_

Sintaxe do código indicando as formas:

**nome\_da\_forma** : { 'count' : **N** },

Exemplo:

```json

shapes = {
'forma_lol' : {
'count' : 8
},
'forma_teste' : {
'count' : 55
},
'forma_numero_3' : {
'count' : 2
}
}
```