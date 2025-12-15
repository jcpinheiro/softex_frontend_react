Instação das dependências
- [React Router Dom]

   ```npm install react-router-dom```

- [Biblioteca Tailwindcss]

  ```npm install tailwindcss @tailwindcss/vite```

[Cofigurar o arquivo vite.config.ts]

````
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})

````

No arquivo index.css na pasta raiz, adicionar a seguinte linha de comando

``` @import "tailwindcss"; ```


- [Biblioteca de Icones de React]

  ```npm install react-icons```

  
- [Instalar o JSON Server para simular o consumo de uma API]

  ```npm install -g json-server```

Depois abra o terminal no diretorio raiz do projeto  e execute o comando

  ```  json-server --watch db.json ```

Instale a biblioteca axios para consumir a API

  ``` npm install axios ```

Instale a biblioteca react-hot-toast

  ``` npm install react-hot-toast  ```