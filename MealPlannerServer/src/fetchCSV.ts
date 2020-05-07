import fs = require('fs');
import readline = require('readline');

interface Units {
  "name":string;
  "grammage": number;
}

interface ResourceJSON {
  "name": string;
  "units": Units[];
  "energy": number;
  "prot": number;
  "carb": number;
  "fat": number;
  "fib": number;
  "allergens": string[];
  "category": string[];
}

const nameExtensions : string[] = [
  ' - kus',
  ' ks',
  ' - lžíce',
  ' - lžička',
  ' - stroužek',
  ' - krajíc',
  ' - kulička'
]
const units : string[] = [
  'g',
  'ml',
  'kus',
  'střední kus',
  'polévková lžíce',
  'kávová lžička',
  'kulička',
  'stroužek',
  'krajíc'
]

processLineByLine('./assets/example.csv')

async function processLineByLine(fileName: string) {
  const fileStream = fs.createReadStream(fileName, 'utf8');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let l = 0;
  let resources = []

  for await (const line of rl) {
    if(l<2){  // skip first two lines
      l++;
      continue;
    }
    let lineJSON = processJson(line)
    resources.push(lineJSON)

  }
  console.log("RESOURCES BEFORE: ", JSON.stringify(resources, null, 2))
  compareResources(resources)
  console.log("RESOURCES AFTER: ", JSON.stringify(resources, null, 2))
}

// compareResources takes an array of objects representing resources and compare resource with each other
// if names match ("banany" === "banany - stredni kus") it merge them and delete the one with extension
function compareResources(resources: ResourceJSON[]) {
  for(let i: number = 0; i<resources.length; i++){
    for(let j: number = 0; j<nameExtensions.length; j++) {
      if(resources[i].name.endsWith(nameExtensions[j])) {
        if(findDuplicate(resources, i, nameExtensions[j])){   // duplicate was found, merged and resource at i position deleted
          // i--;
        } else {  // no true duplicate, just changed the name

        }
        // console.log(resources[i].name)
        break;
      }
    }
  }
  // console.log(JSON.stringify(resources, null, 2))
}

// if duplicate was found, return true
// if duplicate was not found change name and return false
function findDuplicate(resources: ResourceJSON[], position: number, extension: string) : boolean {
  let nameWithoutEx: string = resources[position].name.replace(extension, "")
  console.log(`My name without extension is:  "${nameWithoutEx}"`)
  for(let i: number = 0; i<resources.length; i++) {
    if(i === position){continue};
    if(resources[i].name === nameWithoutEx) { // duplicate found
      mergeResources(resources, i, position)
      return true;
      // console.log(resources[i].name)
    }
  }
  // no duplicate here
  resources[position].name = nameWithoutEx;
  return false;
}

// mergeResources will add units of duplicate to units of parent and remove duplicate
function mergeResources(resources: ResourceJSON[], noExtension: number, withExtension: number) {
  if(resources[withExtension].units.length > 1) { // check if in duplicate is only one unit, (because it should be)
    console.log("something went wrong");
    process.exit(1)
  }
  resources[noExtension].units.push(resources[withExtension].units[0])
  resources = resources.splice(withExtension, 1); // remove duplicated resource
}

// processLine takes a line and split it correctly into array of columns
function processLine(str: string) :string[]{
  let columns: string[] = []
  for(let i: number=0; i<str.length; i++) { // get string character by character
    let column: string = ""
    while(str[i] !== "," && i != str.length) {  // while i find next quote
      if(str[i] === '"'){     // is there a double quote?
        i++
        while(str[i] !== '"'){    // continue after you find next one
          column += str[i];
          i++;
        }
        i++; continue;  // dont include second double quote at the end
      }
      column += str[i];
      i++;
    }
    columns.push(column)
    if(str[i+1] == ","){
      columns.push('');
    }
  }
  return columns
}

// processJson takes a line, use processLine to split it into columns and then format it into correct JSON
function processJson(line:string): ResourceJSON{
  let arr: string[] = processLine(line)
  if(arr.length != 12) {
    console.log("ERROR, the line wasn't processed correctly", arr)
    process.exit(1)
  }
  let strJSON: string = `
  {
    "name": "${arr[1]}",
    "units": [
      {
        "name":"${arr[2]}",
        "grammage": "${arr[3]}"
      }
    ],
    "energy": "${arr[4]}",
    "prot": "${arr[6]}",
    "carb": "${arr[7]}",
    "fat": "${arr[8]}",
    "fib": "${arr[9]}",
    "allergens": "${arr[10]}",
    "category": "${arr[11]}"
  }
  `
  return JSON.parse(strJSON);
}
