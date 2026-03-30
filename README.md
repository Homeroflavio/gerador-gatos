# 🐱 Gerador de Gatinhos

Um pequeno aplicativo web que gera **imagens aleatórias de gatos** a cada clique.

O projeto foi desenvolvido utilizando **HTML, CSS e JavaScript**, consumindo uma API pública para exibir novas imagens de gatos dinamicamente.

---

## 🚀 Demonstração

🔗 **Acesse o projeto online:**
[https://homeroflavio.github.io/gerador-gatinhos](https://homeroflavio.github.io/gerador-gatos/)

---

## ✨ Funcionalidades

* 🐱 Gerar imagens aleatórias de gatos
* 🔢 Contador de gatinhos gerados
* 🧹 Botão para limpar a galeria
* 📜 Scroll automático ao gerar novos gatos
* 📱 Layout responsivo (desktop e mobile)

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* API pública **Cat as a Service**

---

## 🔌 API utilizada

O projeto consome a API:

https://cataas.com/cat

Cada requisição retorna uma **imagem aleatória de gato**, que é exibida na galeria.

---

## 📂 Estrutura do projeto

```
gerador-gatos
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📸 Como funciona

1. Clique em **Gerar Gatinho**
2. A aplicação busca uma nova imagem da API
3. O gato aparece na galeria
4. O contador é atualizado automaticamente

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido como atividade prática para:

* consumir **APIs públicas**
* manipular o **DOM com JavaScript**
* criar um **site responsivo**
* realizar **deploy de um projeto web**

---

## 📱 Versão PWA (Progressive Web App)

Este projeto foi evoluído para um **PWA (Progressive Web App)**, permitindo que o site funcione como um aplicativo instalado no dispositivo.

### 🚀 Funcionalidades PWA

* 📲 Pode ser instalado no celular ou desktop
* ⚡ Carregamento rápido com cache (Service Worker)
* 🌐 Funciona parcialmente offline
* 🎨 Ícone personalizado na tela inicial

### ⚙️ Tecnologias utilizadas no PWA

* `manifest.json` → configuração do app
* `service-worker.js` → cache e funcionamento offline

### 📥 Como instalar

1. Acesse o site
2. No navegador, clique em **"Instalar"** ou **"Adicionar à tela inicial"**
3. O app será instalado como um aplicativo nativo

---

## 📳 Recurso de Hardware

O projeto também utiliza um recurso de hardware do dispositivo:

* Vibração ao gerar um novo gatinho (`navigator.vibrate`)

Isso melhora a interatividade, principalmente em dispositivos móveis.

---

## 👨‍💻 Autor

Projeto desenvolvido por **Homero Flávio**.
