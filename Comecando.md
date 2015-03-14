# SVN #

O Subversion é uma ferramenta de versionamento de projetos.
Serve para enviar, baixar e reverter arquivos de um projeto.
Além de organizar, ser portável para qualquer máquina, aparecer bonito aqui na web, permite retroceder caso alguém envie algo errado.

Como?
bom, tem uma pasta num servidor, neste caso ele está no Google. a gente basicamente copia as coisas de lá, mexe e manda de volta. Cada vez que mandamos de volta, é salva uma nova cópia.

# Instalando #

Simples, vá até [O Site do TortoiseSVN](http://tortoisesvn.net/downloads.html) e baixe o programa, instale e tal.

Perceba agora que no menu de contexto (Botão Direito numa pasta), existem 2 opções: **SVN Checkout..** e **TortoiseSVN**.

Pronto!

# WTF is dis? #

  * **Checkout** - o ato de transformar uma simples pasta em uma pasta que sabe aonde o servidor está, seu usuário no servidor, e permite as ações do SVN.
  * **Update** - uma vez feito o Checkout, a pasta pode ser Atualizada para sincronizar as alterações com o servidor. deve ser feito toda vez antes de um
  * **Commit** - a ação de enviar suas alterações bugadas para o servidor.

Avançado:
  * **Show Log** - exibe o log de commits para um arquivo ou pasta, por data, usuário, arquivos, alterações e o carai^4.
  * **Revert** - reverte um arquivo para a versão atual. é um Update for çado.
  * **Revision** - não é uma ação, mas sim o número de commits realizados desde ever.
  * **HEAD revision** - a 1ª revisão
  * **Diff** - mostra o que já foi alterado, comparando suas alterações com a atual no servidor

# Fazendo Checkout #
  1. pós instalar felizmente o SVN, escolha um cantinho aconchegante do seu pc, de preferência longe de toda a bagunça e crie uma pasta chamada "Dropit".
  1. bra o Prompt de comando (é possivel fazer sem ele, mas o repositório do google necessita disso), e digite os comandos `svn checkout https://dropit-fatec-tg.googlecode.com/svn/trunk/ --username` **SEU EMAIL @GMAIL** `caminho\para\a\pasta\Dropit`.
  1. uando for fazer commit/update, vai pedir um usuário e senha. usuário é seu email do google, igual o inserido no prompt, e senha me peçam =D


---


detalhe, esse projeto, como qualquer outro do Google Code, é público, então sem senhas aqui.