//pegar o texto
//pegar o botao

export async function makefile() {
  const textarea = document.querySelector("#textarea") as HTMLInputElement;
  const texto = textarea.value;
  const blob = await new Blob([texto]);
  const url = URL.createObjectURL(blob);
  const namefile = document.querySelector("#namefile") as HTMLInputElement;
  await setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000 * 25);

  StartDownload(url, namefile.value);

  //criar um objeto a,adicionar o href e o donwload
}

function StartDownload(url: string, filename: string) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
}
//adicionar um evento ao clicar neste botao que pegará o texto
//criar uma file.txt na maquina e por o texto dentro dela
//BAIXAR ARQUIVO
