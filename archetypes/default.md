---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ dateFormat "2006-01-02" .Date }}
year: "{{ dateFormat "2006" .Date }}"
draft: true
featured_image: ""
url: "{{ dateFormat "2006" .Date }}/{{ dateFormat "01" .Date }}/{{ .TranslationBaseName | title }}"
tags:
-
categories:
- 
---
tl;dr
<!-- more -->