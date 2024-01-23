---
date: 2023-12-16
cssclasses:
  - page
path: content
filename: how-to-reuse-dataviewjs-code
title: Как переиспользовать код с помощью dataviewjs
share: true
menu: true
blog: false
toc: false
collapse: false
weight: 
tags:
  - dataview
  - dataviewjs
Статус:
  - закончено
Тема:
  - "[[Картотека/Obsidian|Obsidian]]"
Тип: "[[Публикации/Публикации]]"
---



Иногда код dataviewjs получается слишком большим, или один и тот же кусок кода нужно использовать несколько раз в разных местах. Поэтому хочется не писать его весь в заметке, а часть кода вынести в отдельный модуль.Теоретически это можно сделать при помощи стандартного метода `require`, но проблема в том, что он не работает на мобильном.

Раньше я использовала для этого плагин CustomJS, но теперь выяснила, как можно обойтись стандартным функционалом Dataview. 

Для этого используется функция `dv.view()`.

Сначала создаём файл с расширением `.js`, например, `my_сode.js`, и кладём его в любое место в своём хранилище Обсидиана. Для примера положим его в папку scripts. Пишем в нём весь код, который хотим переиспользовать. Например, напишем там следующий код:

```js
dv.paragraph("Hello world!")
```

Затем в заметке в блоке `dataviewjs` пишем:

```js
await dv.view("scripts/my_code")
```

При этом весь код, содержащийся в файле `my_code.js` автоматически исполняется и рендерится. Но что если мы не хотим ничего сразу рендерить, а хотим вернуть какие-то функции или переменные, которые можно использовать позже? Это можно сделать следующим образом.

В файле `my_code.js` пишем:

```js
this.myFunc = (x) => {
	dv.paragraph(x)
}

this.myVar = "Hello world!"
```

И в заметке в блоке `dataviewjs` пишем:

```js
await dv.view("scripts/my_code")

myFunc(myVar)
```

Подобным же образом можно переиспользовать любые функции или переменные.

**Замечание:** При таком способе все функции и переменные присваиваются глобальному объекту `window`, что не очень безопасно, потому что можно случайно перезаписать какие-то существующие свойства или методы. Кажется, что безопаснее было бы использовать промежуточный объект. 

Например, в файле `my_code.js` пишем:

```js
const myFunc = (x) => {
	dv.paragraph(x)
}

const myVar = "Hello world!"

this.myObject = {myFunc, myVar}
```

И в заметке в блоке `dataviewjs` пишем:

```js
await dv.view("scripts/my_code")

const {myFunc, myVar} = myObject

myFunc(myVar)
```

У объекта `myObject` должно быть уникальное имя, не совпадающее ни с одним из свойств объекта `window`, но с одним объектом это легче проконтролировать, чем со множеством функций и переменных, которые мы можем использовать.

Можно также использовать класс вместо объекта. В файле `my_code.js` пишем:

```js
this.myClass = class myClass {
	myFunc() {
		dv.paragraph("Hello world!")
	}
}
```

И в заметке в блоке `dataviewjs` пишем:

```js
await dv.view("scripts/my_code")

const newClass = new myClass

newClass.myFunc()
```

