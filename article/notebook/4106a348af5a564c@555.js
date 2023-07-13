import define1 from "./87e37d7b508e7300@235.js";
import define2 from "./1104ceb0818de884@99.js";
import define3 from "./d023ca6992ad3177@460.js";
import define4 from "./09403b146bada149@519.js";
import define5 from "./7764a40fe6b83ca1@437.js";
import define6 from "./9bed702f80a3797e@402.js";

function _1(md){return(
md`# Observable Tutorial &ndash; Part I`
)}

function _2(toc){return(
toc("h2,h3")
)}

function _3(md){return(
md`## Cell Types`
)}

function _4(md){return(
md`This is a markdown cell`
)}

function _5(htl){return(
htl.html` <ul>
   <li>This is</li>
   <li>an HTML</li>
   <li>cell.</li>
</ul> `
)}

function _foo(){return(
"This is a JavaScript cell"
)}

function _7(md){return(
md`Different cells have different pinning behavior by default.`
)}

function _8(htl){return(
htl.html`<svg width="200" height="200" viewBox="0 0 200 200">
  <rect width="100%" height="100%" fill="hsl(216deg 100% 13%)" />
</svg>`
)}

function _9(md){return(
md`This is markdown in a JavaScript cell using a **template literal**`
)}

function _10(md,foo){return(
md`This is too. ${foo}.`
)}

function _11(foo,md){return(
md`Dynamic insertion also works in regular markdown cells: ${foo[0]}`
)}

function _12(tex){return(
tex`\sum_{n=0}^{\infty} \frac{1}{n^2}`
)}

function _13(tex){return(
tex.block`\int_0^\infty \sin x \, \mathrm{d}x`
)}

function _14(html,tex){return(
html`You can use <i>any</i> combination: ${tex`\TeX`}`
)}

function _15(md){return(
md`\`md\`, \`tex\`, and \`html\` are part of the [Observable standard library](https://observablehq.com/@observablehq/stdlib).

Cells are run based on the topology of the notebooks graph (similar to relationships of cells in a spreadsheet).
More information: [How Observable Runs](https://observablehq.com/@observablehq/how-observable-runs)`
)}

function _16(md){return(
md`## JavaScript Cells

The [Observable Grammar](https://observablehq.com/@observablehq/observable-grammar) defines four types of JavaScript cells:

### Expression`
)}

function _17(){return(
1 + 1
)}

function _18(){return(
"Just a string"
)}

function _19(md){return(
md`### Block`
)}

function _20()
{
  let foo = ""
  for (let i = 0; i < 10; ++i) {
    foo += i
  }
  return foo
}


function _21(md){return(
md`### Named Cells`
)}

function _namedCell(){return(
1 + 7
)}

function _23(md){return(
md`Here, \`namedCell\` is not really a variable but the name given to the cell. You can view cells as functions and you can refernce named cells to obtain the function output.`
)}

function _anotherOne(namedCell){return(
namedCell + 3
)}

function _25(md){return(
md`There are four types of named cells:
  - Identifier = Expression
  - Identifier = Block
  - FunctionExpression
  - ClassExpression`
)}

function _blockCell(anotherOne)
{
  let foo = 0
  for (let i = 0; i < anotherOne; ++i) {
    foo += i**2
  }
  return foo
}


function _functionCell(){return(
function functionCell(x) {
  return Math.sqrt(x)
}
)}

function _28(functionCell,blockCell){return(
functionCell(blockCell)
)}

function _Rectangle(){return(
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
)}

function _30(Rectangle,namedCell,functionCell,blockCell){return(
new Rectangle(namedCell, functionCell(blockCell))
)}

function _31(md){return(
md`The *Identifier* (i.e., name of the cell) can be of one of three types:
  - IdentifierName
  - \`viewof\` IdentifierName
  - \`mutable\` IdentifierName

Mutables are not covered in this tutorial. See [here](https://observablehq.com/@observablehq/mutable) for an introduction.

### Import Cells`
)}

function _33(foobar){return(
foobar
)}

function _34(md){return(
md`## Views & Inputs

Views allow us to separate how a cell's output is shown (*view*) from the *value* of that cell when it is later referenced.`
)}

function _radioValue(Inputs){return(
Inputs.radio(["A", "B", "C"], {label: "Option", value: "A"})
)}

function _36(radioValue){return(
radioValue
)}

function _37(md){return(
md`This is a shorthand for defining the two separately:`
)}

function _explicitView(Inputs){return(
Inputs.radio(["A", "B", "C"], {label: "Option", value: "A"})
)}

function _39(explicitView){return(
explicitView
)}

function _explicitValue(Generators,explicitView){return(
Generators.input(explicitView)
)}

function _41(explicitValue){return(
explicitValue
)}

function _42(md){return(
md`Views can be as simple as single built-in [Inputs](https://observablehq.com/@observablehq/inputs).

They can also be complex code blocks using DOM elements.

Some examples: [Introduction to Views](https://observablehq.com/@observablehq/views)

## Imports & Remixing

Simple import of named cells or function cells:`
)}

function _44(ramp){return(
ramp(t => `hsl(${t * 360},100%,50%)`)
)}

function _45(md){return(
md`You can also import views:`
)}

function _47(year){return(
year
)}

function _48($0){return(
$0
)}

function _49(chartMoon){return(
chartMoon
)}

function _50(md){return(
md`Create some data:`
)}

function _myData(){return(
[
  { letter: "Thumb", frequency: 0.6 },
  { letter: "Index", frequency: 0.85 },
  { letter: "Middle", frequency: 1 },
  { letter: "Ring", frequency: 0.9 },
  { letter: "Pinky", frequency: 0.75 }
]
)}

function _52(md){return(
md`Import a chart from another notebook, but use \`myData\` instead of the data used there:`
)}

function _54(barChart){return(
barChart
)}

function _55(md){return(
md`More information: [Introduction to imports](https://observablehq.com/@observablehq/import)`
)}

function _56(md){return(
md`## Data & File Attachments

Define directly as above for \`myData\`. Another example:`
)}

function _movies(){return(
[
  { title: "Deadpool", year: 2016 },
  { title: "Jurassic Park", year: 1993 },
  { title: "Star Wars", year: 1977 },
  { title: "The Godfather", year: 1972 },
  { title: "Snow White and the Seven Dwarfs", year: 1927 }
]
)}

function _pokemon(__query,FileAttachment,invalidation){return(
__query(FileAttachment("pokemon.csv"),{from:{table:"pokemon"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _59(pokemon){return(
pokemon.length
)}

function _60(pokemon){return(
pokemon
)}

function _photo(FileAttachment){return(
FileAttachment("pexels-carlos-zuluaga-15967635.jpg").image()
)}

function _iris(FileAttachment){return(
FileAttachment("iris.json").json()
)}

function _63(md){return(
md`More info: [File attachments](https://observablehq.com/@observablehq/file-attachments)`
)}

function _weatherData(d3){return(
d3.csv(
  "https://raw.githubusercontent.com/vega/vega-datasets/master/data/weather.csv"
)
)}

function _65(md){return(
md`## Observable Plot

Observable has [built-in plotting functions](https://observablehq.com/plot).`
)}

function _66(pokeScatter){return(
pokeScatter.legend("color")
)}

function _pokeScatter(Plot,pokemon){return(
Plot.plot({
  marks: [
    Plot.dot(pokemon, {x: "speed", y: "hp", stroke: "type1"})
  ]
})
)}

function _pokeBar(Plot,pokemon,yMax){return(
Plot.plot({
  color: {
    legend: true
  },
  marks: [
    Plot.rectY(pokemon, Plot.binX({y: "count"}, {x: "speed", fill: "type1"})),
    Plot.ruleY([0])
  ],
  y: {
    domain: [0, yMax]
  }
})
)}

function _yMax(Inputs){return(
Inputs.range([1, 150], {label: "Y Max", step: 1})
)}

function _70(md){return(
md`## Vega Lite

Observable Plot is similar in spirit to [Vega Lite](https://vega.github.io/vega-lite/).`
)}

function _72(vl,pokemon){return(
vl.markCircle()
  .data(pokemon)
  .encode(
    vl.x().fieldQ("speed"),
    vl.y().fieldQ("hp"),
    vl.color().fieldN("type")
  )
  .render()
)}

function _73(htl){return(
htl.html`<div id="vis"></div>`
)}

function _vlSpec(pokemon,maxBins)
{
  return {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: 400,
    data: {
      values: pokemon
    },
    mark: "bar",
    encoding: {
      y: {aggregate: "count"},
      x: {
        field: "speed",
        type: "quantitative",
        bin: {
          maxbins: maxBins}
        
      },
      color: {field: "type1"},
      tooltip: {field: "type1"}
    }
  }
}


function _maxBins(Inputs){return(
Inputs.range([5, 20], {label: "Max no. of bins", step: 1})
)}

function _embed(require){return(
require("vega-embed@6")
)}

function _77(embed,vlSpec){return(
embed(vlSpec)
)}

function _78(md){return(
md`## Access Management

Manage access (in menu at the top) for different users/groups:
  - Public
  - Workspace
  - Individuals

Everyone with view only access can make local changes and fork your notebook.

## Embedding

You can embed notebook cells as HTML in other website, e.g., Codepen, GitHub pages.

The notebook has to be published to embed cells and the cell has to have a name.

Clicking on the 3 dots menu for a cell and clicking on 'Embed' will open a popup where you can select which cells you want to embed.

Further reading:
- [Embed a notebook in a React app](https://observablehq.com/@observablehq/how-to-embed-a-notebook-in-a-react-app)
- [Advanced embedding and downloading](https://observablehq.com/@observablehq/advanced-embeds)`
)}

function _79(md){return(
md`## Documentations & Tutorials

- [YouTube playlist 'Learning Observable'](https://www.youtube.com/playlist?list=PLOHIJAFwtkEfEsafMd9BY3KWsRrz7FV5e)
- [Observable Tutorials](https://observablehq.com/tutorials)
- [Observable: The User Manual](https://observablehq.com/@observablehq/user-manual)
- [Observable for Jupyter Users](https://observablehq.com/@observablehq/observable-for-jupyter-users)
- [Observable JavaScript](https://observablehq.com/@observablehq/observable-javascript)`
)}

function _80(md){return(
md`## Appendix

Because cells are evaluated dynamically, you can put any extra definitions that you don't want your viewers to see directly at the bottom of the notebook in an Appendix section.`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["pokemon.csv", {url: new URL("./files/pokemon.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["iris.json", {url: new URL("./files/5ec15d18b0d73d26ce1a9a450128aaba97d50bca688a7f121e594f95ad350e021b1ed61c305c473ef2907945c4fa4c6a2b487c3ae78c1cb50e7da80774d3ea54.json", import.meta.url), mimeType: "application/json", toString}],
    ["pexels-carlos-zuluaga-15967635.jpg", {url: new URL("./files/ef65ca1b8d349bbaa7f802f09cc7b7349f56240df8ea8d8dab3bfe84a8eac232f1e9e73d0053e1fb1b0f2c3cbe37fb7a40a9b10d01dd8dcc651b39f0e6008405.jpeg", import.meta.url), mimeType: "image/jpeg", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["toc"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["htl"], _5);
  main.variable(observer("foo")).define("foo", _foo);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer()).define(["htl"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer()).define(["md","foo"], _10);
  main.variable(observer()).define(["foo","md"], _11);
  main.variable(observer()).define(["tex"], _12);
  main.variable(observer()).define(["tex"], _13);
  main.variable(observer()).define(["html","tex"], _14);
  main.variable(observer()).define(["md"], _15);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer()).define(_17);
  main.variable(observer()).define(_18);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer()).define(_20);
  main.variable(observer()).define(["md"], _21);
  main.variable(observer("namedCell")).define("namedCell", _namedCell);
  main.variable(observer()).define(["md"], _23);
  main.variable(observer("anotherOne")).define("anotherOne", ["namedCell"], _anotherOne);
  main.variable(observer()).define(["md"], _25);
  main.variable(observer("blockCell")).define("blockCell", ["anotherOne"], _blockCell);
  main.variable(observer("functionCell")).define("functionCell", _functionCell);
  main.variable(observer()).define(["functionCell","blockCell"], _28);
  main.variable(observer("Rectangle")).define("Rectangle", _Rectangle);
  main.variable(observer()).define(["Rectangle","namedCell","functionCell","blockCell"], _30);
  main.variable(observer()).define(["md"], _31);
  const child1 = runtime.module(define1);
  main.import("chart", "foobar", child1);
  main.variable(observer()).define(["foobar"], _33);
  main.variable(observer()).define(["md"], _34);
  main.variable(observer("viewof radioValue")).define("viewof radioValue", ["Inputs"], _radioValue);
  main.variable(observer("radioValue")).define("radioValue", ["Generators", "viewof radioValue"], (G, _) => G.input(_));
  main.variable(observer()).define(["radioValue"], _36);
  main.variable(observer()).define(["md"], _37);
  main.variable(observer("explicitView")).define("explicitView", ["Inputs"], _explicitView);
  main.variable(observer()).define(["explicitView"], _39);
  main.variable(observer("explicitValue")).define("explicitValue", ["Generators","explicitView"], _explicitValue);
  main.variable(observer()).define(["explicitValue"], _41);
  main.variable(observer()).define(["md"], _42);
  const child2 = runtime.module(define2);
  main.import("ramp", child2);
  main.variable(observer()).define(["ramp"], _44);
  main.variable(observer()).define(["md"], _45);
  const child3 = runtime.module(define3);
  main.import("chart", "chartMoon", child3);
  main.import("viewof year", child3);
  main.import("year", child3);
  main.variable(observer()).define(["year"], _47);
  main.variable(observer()).define(["viewof year"], _48);
  main.variable(observer()).define(["chartMoon"], _49);
  main.variable(observer()).define(["md"], _50);
  main.variable(observer("myData")).define("myData", _myData);
  main.variable(observer()).define(["md"], _52);
  const child4 = runtime.module(define4).derive([{name: "myData", alias: "alphabet"}], main);
  main.import("chart", "barChart", child4);
  main.variable(observer()).define(["barChart"], _54);
  main.variable(observer()).define(["md"], _55);
  main.variable(observer()).define(["md"], _56);
  main.variable(observer("movies")).define("movies", _movies);
  main.variable(observer("pokemon")).define("pokemon", ["__query","FileAttachment","invalidation"], _pokemon);
  main.variable(observer()).define(["pokemon"], _59);
  main.variable(observer()).define(["pokemon"], _60);
  main.variable(observer("photo")).define("photo", ["FileAttachment"], _photo);
  main.variable(observer("iris")).define("iris", ["FileAttachment"], _iris);
  main.variable(observer()).define(["md"], _63);
  main.variable(observer("weatherData")).define("weatherData", ["d3"], _weatherData);
  main.variable(observer()).define(["md"], _65);
  main.variable(observer()).define(["pokeScatter"], _66);
  main.variable(observer("pokeScatter")).define("pokeScatter", ["Plot","pokemon"], _pokeScatter);
  main.variable(observer("pokeBar")).define("pokeBar", ["Plot","pokemon","yMax"], _pokeBar);
  main.variable(observer("viewof yMax")).define("viewof yMax", ["Inputs"], _yMax);
  main.variable(observer("yMax")).define("yMax", ["Generators", "viewof yMax"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], _70);
  const child5 = runtime.module(define5);
  main.import("vl", child5);
  main.variable(observer()).define(["vl","pokemon"], _72);
  main.variable(observer()).define(["htl"], _73);
  main.variable(observer("vlSpec")).define("vlSpec", ["pokemon","maxBins"], _vlSpec);
  main.variable(observer("viewof maxBins")).define("viewof maxBins", ["Inputs"], _maxBins);
  main.variable(observer("maxBins")).define("maxBins", ["Generators", "viewof maxBins"], (G, _) => G.input(_));
  main.variable(observer("embed")).define("embed", ["require"], _embed);
  main.variable(observer()).define(["embed","vlSpec"], _77);
  main.variable(observer()).define(["md"], _78);
  main.variable(observer()).define(["md"], _79);
  main.variable(observer()).define(["md"], _80);
  const child6 = runtime.module(define6);
  main.import("toc", child6);
  return main;
}
