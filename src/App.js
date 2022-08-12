import GetInTouch from "./components/GetInTouch";
import People from "./components/people";

function App() {
  return (
    <div className="App">
      <section className="grid md:grid-cols-3">
        <article className="bg-blue-500">
          <h1 className="text-lg md:text-xl lg:text-2xl text-red-700">
            Hello world!
          </h1>
          <img src="https://picsum.photos/200" alt="placeholder" />
          <p>
            Sint id adipisicing excepteur elit incididunt ipsum reprehenderit
            aliqua aliqua exercitation consequat amet. Nostrud ex ullamco
            voluptate sit. Minim eu id fugiat labore irure nulla est do est aute
            nostrud. Elit nulla exercitation Lorem consequat duis ut proident
          </p>
        </article>
        <article className="bg-blue-500">
          <h1 className="text-lg md:text-xl lg:text-2xl text-red-700">
            Hello world!
          </h1>
          <img src="https://picsum.photos/200" alt="placeholder" />
          <p>
            Sint id adipisicing excepteur elit incididunt ipsum reprehenderit
            aliqua aliqua exercitation consequat amet. Nostrud ex ullamco
            voluptate sit. Minim eu id fugiat labore irure nulla est do est aute
            nostrud. Elit nulla exercitation Lorem consequat duis ut proident
          </p>
        </article>
        <article className="bg-blue-500">
          <h1 className="text-lg md:text-xl lg:text-2xl text-red-700">
            Hello world!
          </h1>
          <img src="https://picsum.photos/200" alt="placeholder" />
          <p>
            Sint id adipisicing excepteur elit incididunt ipsum reprehenderit
            aliqua aliqua exercitation consequat amet. Nostrud ex ullamco
            voluptate sit. Minim eu id fugiat labore irure nulla est do est aute
            nostrud. Elit nulla exercitation Lorem consequat duis ut proident
          </p>
        </article>
      </section>
      <section>
        <People />
      </section>

      <GetInTouch />
    </div>
  );
}

export default App;
