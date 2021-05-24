// Importing a JSON file from 'WordsAPI'
const myJson = `
    {
        "word": "development",
        "results": [
          {
            "definition": "processing a photosensitive material in order to make an image visible",
            "partOfSpeech": "noun",
            "synonyms": [
              "developing"
            ],
            "typeOf": [
              "processing"
            ],
            "hasTypes": [
              "underdevelopment"
            ],
            "derivation": [
              "develop"
            ],
            "examples": [
              "the development and printing of his pictures took only two hours"
            ]
          },
          {
            "definition": "the act of making some area of land or water more profitable or productive or useful",
            "partOfSpeech": "noun",
            "synonyms": [
              "exploitation"
            ],
            "typeOf": [
              "utilization",
              "exercise",
              "employment",
              "usage",
              "use",
              "utilisation"
            ],
            "hasTypes": [
              "water development",
              "overutilization",
              "overutilisation",
              "overuse",
              "capitalisation",
              "overexploitation",
              "water project",
              "capitalization",
              "unitisation",
              "unitization",
              "land development",
              "water program",
              "electrification",
              "commercialization",
              "commercialisation"
            ],
            "derivation": [
              "develop"
            ],
            "examples": [
              "the development of Alaskan resources"
            ]
          },
          {
            "definition": "a process in which something passes by degrees to a different stage (especially a more advanced or mature stage)",
            "partOfSpeech": "noun",
            "synonyms": [
              "evolution"
            ],
            "typeOf": [
              "physical process",
              "process"
            ],
            "hasTypes": [
              "unfolding",
              "flowering",
              "growth",
              "assibilation",
              "deepening"
            ],
            "derivation": [
              "develop"
            ],
            "examples": [
              "the development of his ideas took many years",
              "the slow development of her skill as a writer"
            ]
          },
          {
            "definition": "(biology) the process of an individual organism growing organically; a purely biological unfolding of events involved in an organism changing gradually from a simple to a more complex level",
            "partOfSpeech": "noun",
            "synonyms": [
              "growing",
              "growth",
              "maturation",
              "ontogenesis",
              "ontogeny"
            ],
            "inCategory": [
              "biological science",
              "biology"
            ],
            "hasCategories": [
              "isometry"
            ],
            "typeOf": [
              "organic process",
              "biological process"
            ],
            "hasTypes": [
              "cytogeny",
              "amelogenesis",
              "angiogenesis",
              "anthesis",
              "apposition",
              "auxesis",
              "blossoming",
              "caenogenesis",
              "cainogenesis",
              "cenogenesis",
              "cohesion",
              "cultivation",
              "culture",
              "cytogenesis",
              "dentition",
              "efflorescence",
              "florescence",
              "flowering",
              "foliation",
              "fructification",
              "gametogenesis",
              "germination",
              "habit",
              "inflorescence",
              "infructescence",
              "intussusception",
              "juvenescence",
              "kainogenesis",
              "kenogenesis",
              "leafing",
              "life cycle",
              "masculinisation",
              "masculinization",
              "morphogenesis",
              "myelinisation",
              "myelinization",
              "neurogenesis",
              "odontiasis",
              "palingenesis",
              "proliferation",
              "psychogenesis",
              "psychomotor development",
              "psychosexual development",
              "recapitulation",
              "rooting",
              "sprouting",
              "suppression",
              "teething",
              "teratogenesis",
              "vegetation",
              "virilisation",
              "virilization"
            ],
            "hasParts": [
              "gastrulation"
            ],
            "antonyms": [
              "nondevelopment"
            ],
            "derivation": [
              "developmental",
              "develop"
            ],
            "examples": [
              "he proposed an indicator of osseous development in children"
            ]
          },
          {
            "definition": "act of improving by expanding or enlarging or refining",
            "partOfSpeech": "noun",
            "typeOf": [
              "improvement"
            ],
            "hasTypes": [
              "broadening",
              "advancement",
              "product development",
              "working out",
              "elaboration",
              "progress"
            ],
            "derivation": [
              "develop"
            ],
            "examples": [
              "he congratulated them on their development of a plan to meet the emergency",
              "they funded research and development"
            ]
          },
          {
            "definition": "a district that has been developed to serve some purpose",
            "partOfSpeech": "noun",
            "typeOf": [
              "district",
              "dominion",
              "territorial dominion",
              "territory"
            ],
            "hasTypes": [
              "housing development",
              "housing estate"
            ],
            "derivation": [
              "develop"
            ],
            "examples": [
              "such land is practical for small park developments"
            ]
          },
          {
            "definition": "a recent event that has some relevance for the present situation",
            "partOfSpeech": "noun",
            "typeOf": [
              "modification",
              "alteration",
              "change"
            ],
            "hasTypes": [
              "ramification",
              "complication",
              "twist",
              "turn of events",
              "turn",
              "phenomenon"
            ],
            "derivation": [
              "develop"
            ],
            "examples": [
              "recent developments in Iraq",
              "what a revolting development!"
            ]
          },
          {
            "definition": "a state in which things are improving; the result of developing (as in the early part of a game of chess)",
            "partOfSpeech": "noun",
            "inCategory": [
              "chess game",
              "chess"
            ],
            "typeOf": [
              "improvement",
              "melioration"
            ],
            "hasTypes": [
              "underdevelopment"
            ],
            "derivation": [
              "develop"
            ],
            "examples": [
              "after he saw the latest development he changed his mind and became a supporter",
              "in chess your should take care of your development before moving your queen"
            ]
          },
          {
            "definition": "(music) the section of a composition or movement (especially in sonata form) where the major musical themes are developed and elaborated",
            "partOfSpeech": "noun",
            "inCategory": [
              "music"
            ],
            "typeOf": [
              "section",
              "subdivision"
            ]
          }
        ],
        "syllables": {
          "count": 4,
          "list": [
            "de",
            "vel",
            "op",
            "ment"
          ]
        },
        "pronunciation": {
          "all": "dɪ'vɛləpmənt"
        },
        "frequency": 4.13
      }
`;

// Parsing the JSON file into an object
const obj = JSON.parse(myJson);
// console.log(obj);
// console.log(obj["results"]);

// Targetting the 'meaningsbtn' from the DOM and adding a click event in it.
let meaningsbtn = document.getElementById("meaningsbtn");
meaningsbtn.addEventListener("click", () => {
  //   console.log("Someone clicked the button");
  //   On clicking the button the function display will get fired.
  display();
});

// Function - Displays the results on the webpage
let display = () => {
  let results = obj["results"];
  let html = "";
  results.forEach((element) => {
    html += `<li class="list-group-item active">${element.definition}</li>`;
  });
  let defines = document.getElementById("defines");
  defines.innerHTML = html;
};
