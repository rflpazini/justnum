# justnum
jQuery plugin to allow people digit only numbers in a input

## Demo
Quer ver como funciona? 

Acesse a página de demonstração [aqui](http://rflpazini.github.io/justnum)

## Instalação

Instale usando o [Bower](http://bower.io/):

```sh
$ bower install justnum
```

ou baixe o [ZIP](https://github.com/rflpazini/justnum/archive/master.zip)

##Uso

1. Importe o [jQuery](https://jquery.com) ou baixe ele para seu projeto:

    ```html
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    ```

2. Importe o justnum para seu projeto também:
    
    ```html
    <script src="bower_components/justnum/dist/justnum.min.js"></script>
    ```
3. Escolha qual `input` irá receber o plugin e pronto:

   ```html
   <script>
      $('input').justnum();
   </script>  
   ```
  
#Propriedades

##Liberar o uso de pontos e vírgulas

Caso precise que o usuário insira pontos e vírgulas nos campos, basta liberar a propriedade `allow`:

```html
<script>
    $('input').justnum({
      allow: true
    });
</script>  
````

##Destruir os eventos

Quer parar o plugin? Basta passar método `destroy` no plugin:

```html
<script>
    $('input').justnum('destroy');
</script>  
```

##Licensa

[MIT License](http://rflpazini.mit-license.org/) © Rafael Pazini
