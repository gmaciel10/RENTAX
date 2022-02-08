**RF** => Requisitos funcionais

**RNF** => Requisitos não funcionais

**RN** => Regra de negócio

# Cadastro de carro

**RF**
    Deve ser possível cadastrar um novo carro.
    Deve ser possível listar todas as categorias.

**RN**
    Não deve ser possível cadastrar um carro com uma placa já existente.
    Não deve ser possível alterar a placa de um carro já cadastrado.
    O carro deve ser cadastrado com disponibilidade por padrão.
    O usuário responsável pelo cadastro deve ser um usuário do grupo admin.

# Listagem de carros

**RF**
    Deve ser possível listar todos os carros disponíveis.
    Deve ser possível listar os carros disponíveis pelo nome da cotegoria.
    Deve ser possível listar os carros disponíveis pelo nome da marca.
    Deve ser possível listar os carros disponíveis pelo nome do carro.

**RN**
    O usuário não precisará estar logado no sistema.

# Cadastro de especificação no carro

**RF**
    Deve ser possível cadastrar uma especificação para um carro.
    Deve ser possível listar todas as especificações.
    Deve ser possível listar todos os carros.

**RN**
    Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
    Não deve ser possívek cadastrar uma especificalção já existente para o mesmo carro.
    O usuário responsável pelo cadastro deve ser um usuário do grupo admin.

# Cadastro de imagens do carro

**RF**
    Deve ser possível cadastrar a imagem do acarro.
    Deve ser possível listar todos os carros.

**RNF**
    Utilizar o multer para uploads dos arquivos.

**RN**
    O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
    O usuário responsável pelo cadastro deve ser um usuário do grupo admin.

# Aluguel de carro

**RF**
    Deve ser possível cadastrar um aluguel.

**RNF**

**RN**
    O aluguel deve ter duração minima de 24 horas.
    Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
    Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.