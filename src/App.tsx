import { Textarea } from "./components/ui/textarea";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { makefile } from "./maketext";

function App() {
  return (
    <div
      id="Viewport"
      className="w-screen box-border py-6 px px-14 h-screen bg-black justify-center"
    >
      <div
        id="Container"
        className="bg-slate-800 w-full p-3 h-full rounded-2xl text-center flex flex-col gap-5 grid"
      >
        <h1 className="text-white">Make Text</h1>

        <Input placeholder="Insert name file" type="text" id="namefile"></Input>
        <Textarea id="textarea" placeholder="put Text Here"></Textarea>
        <div className="flex gap-4">
          <div></div>

          <Button id="button" onClick={makefile} className="flex-1">
            Guardar Texto
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
