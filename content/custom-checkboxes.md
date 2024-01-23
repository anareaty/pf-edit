---
date: 2023-09-08
cssclasses: 
path: content
filename: custom-checkboxes
title: Кастомные чекбоксы в Obsidian
share: true
menu: true
blog: false
toc: false
collapse: false
weight: 10
Статус:
  - закончено
tags:
  - Obsidian
  - css
  - checkboxes
Блог: "[[Paperless Forest]]"
Тип: "[[Публикации/Публикации]]"
---


В [[./obsidian|Обсидиане]] очень удобно использовать свои собственные чекбоксы, например, такие:
![[./images/check.jpg|check.jpg]]

Есть темы для Обсидиана, которые уже поддерживают некоторые из подобных чекбоксов, но можно назначить свои собственные при помощи css: 


```css
input[data-task="h"]:checked,
li[data-task="h"] > input:checked,
li[data-task="h"] > p > input:checked {
  --checkbox-marker-color: transparent;
  border: none;
  border-radius: 0;
  background-image: none;
  background-color: currentColor;
  -webkit-mask-size: var(--checkbox-icon);
  -webkit-mask-position: 50% 50%;

  color: var(--color-red);
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='18' height='18' %3E%3Cpath fill='none' d='M0 0H24V24H0z'/%3E%3Cpath d='M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z'/%3E%3C/svg%3E");
}
```

Ссылки на svg-иконки, которые подставляются в свойство "-webkit-mask-image", можно брать, например, тут: [Remix Icon](https://remixicon.com/)

Если надо сделать чекбокс некликабельным:

```css
.HyperMD-task-line[data-task="h"] > .task-list-label, 
input[data-task="h"],
li[data-task="h"] > input, 
li[data-task="h"] > p > input
 {
  pointer-events: none;
}
```

Шаблон этого сайта поддерживает некоторые кастомные чекбоксы, но не все:

- [n] [n]
- [r] [r]
- [>] [>]

Безопаснее использовать буквы, а не символы.
