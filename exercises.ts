function findSuma(): number[] | undefined {
    console.log("---------find_suma----------");
    const expected = 6;
    const nums = [3, 2, 4, 5];
    console.log(`${nums} - exp:${expected}`);

    for (let ind1 = 0; ind1 < nums.length; ind1++) {
        for (let ind2 = 0; ind2 < nums.length; ind2++) {
            if (ind1 > ind2) {
                if (expected === nums[ind1] + nums[ind2]) {
                    return [ind1, ind2];
                }
            }
        }
    }
    return undefined;
}

function faltante(): number[] {
    console.log("---------faltante----------");
    const nums = [3, 0, 1, 5];
    console.log(`${nums}`);
    nums.sort((a, b) => a - b);
    const miss: number[] = [];

    for (let i = nums[0]; i < nums.length; i++) {
        if (i < nums.length - 1 && (nums[i + 1] - nums[i]) !== 1) {
            miss.push(nums[i] + 1);
        }
    }
    return miss;
}

function palindromo(): string {
    console.log("---------palindromo----------");
    let pal = "A man, a plan, a canal, Panama!";
    console.log(`${pal}`);
    pal = pal.replace(/[\s,!.]/g, "").toLowerCase();

    for (let ind = 0; ind < pal.length; ind++) {
        if (pal[ind] !== pal[pal.length - 1 - ind]) {
            return "not palindromo";
        }
    }
    return "palindromo";
}

function rotarMatriz(): number[][] {
    console.log("---------rotar_matriz----------");
    const mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    console.log(`${mat}`);
    const mat2: number[][] = [[], [], []];

    for (let i = mat.length - 1; i >= 0; i--) {
        for (let j = 0; j < mat[i].length; j++) {
            mat2[j].push(mat[i][j]);
        }
    }
    return mat2;
}

function ocurrencias(): void {
    console.log("---------ocurrencias----------");
    const word = "hello world";
    console.log(`${word}`);
    const noSpaces = word.replace(/ /g, "");
    const newW = new Set(noSpaces.split(""));
    const dictOc: { [key: string]: number } = {};

    newW.forEach(char => dictOc[char] = 0);

    for (const char of noSpaces) {
        dictOc[char]++;
    }
    console.log(dictOc);
}

function cantidadOcurrencias(): number {
    console.log("---------cantidad_ocurrencias----------");
    const nums = [1, 2, 3, 1, 1, 4];
    const target = 1;
    let amount = 0;
    console.log(`${nums} target:${target}`);

    for (const num of nums) {
        if (num === target) {
            amount++;
        }
    }
    return amount;
}

function anagrams(): string {
    console.log("---------anagrams----------");
    const s1 = "anagram";
    const s2 = "nagaram";

    const a = s1.split("").sort().join("");
    const b = s2.split("").sort().join("");
    return a === b ? "is anagrams" : "not anagrams";
}

function maxNumList(): number {
    console.log("---------max_num_list----------");
    const nums = [1, 3, 5, 7, 9, 2, 4, 6, 8];
    console.log(nums);

    let max = nums[0];
    for (const num of nums) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

function groupPrefix(): string[][] {
    console.log("---------group_prefix----------");
    const input = ["flower", "flow", "flight"];
    console.log(input);
    let index = 0;
    let cond = true;

    while (cond) {
        cond = input[0][index] === input[1][index] && input[1][index] === input[2][index];
        index++;
        if (!cond) {
            break;
        }
    }

    const prefix = input[0].substring(0, index - 1);
    console.log(prefix);

    const newSet = new Set(input.map(word => word.substring(0, index - 1)));
    console.log(newSet);

    const final: string[][] = Array.from(newSet).map(() => []);
    for (const word of input) {
        const pref = word.substring(0, index - 1);
        final[Array.from(newSet).indexOf(pref)].push(word);
    }
    return final;
}

function groupAnagrams(): string[][] {
    console.log("---------group_anagrams----------");
    const anamOrig = ["listen", "silent", "enlist", "inlets", "hello", "world"];
    console.log(anamOrig);
    const anamSort: string[] = anamOrig.map(word => word.split("").sort().join(""));
    const amountAnam = new Set(anamSort);

    const list: string[][] = Array.from(amountAnam).map(() => []);
    for (let ind1 = 0; ind1 < anamSort.length; ind1++) {
        for (let ind2 = 0; ind2 < Array.from(amountAnam).length; ind2++) {
            if (Array.from(amountAnam)[ind2] === anamSort[ind1]) {
                list[ind2].push(anamOrig[ind1]);
                break;
            }
        }
    }
    console.log(list);
    return list;
}

function groupAnagrams2(): void {
    console.log("---------group_anagrams 2----------");
    const input = ["listen", "silent", "enlist", "inlets", "hello", "world"];
    console.log(input);
    const diction: { [key: string]: string[] } = {};

    for (const pal of input) {
        const clave = pal.split("").sort().join("");
        if (!diction[clave]) {
            diction[clave] = [];
        }
        diction[clave].push(pal);
    }
    console.log(Object.values(diction));
}



// Llama a las funciones aquí
console.log(findSuma());
console.log(faltante());
console.log(palindromo());
console.log(rotarMatriz());
console.log(ocurrencias());
console.log(cantidadOcurrencias());
console.log(anagrams());
console.log(maxNumList());
console.log(groupPrefix());
console.log(groupAnagrams());



function reverseString(str: string): string {return str.split('').reverse().join('');}
console.log(reverseString("hola")); // "aloh"


function countVowels(str: string): number {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hola Mundo")); // 4



function filterEvenNumbers(numbers: number[]): number[] {return numbers.filter(num => num % 2 === 0);}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]



function sumArray(numbers: number[]): number {return numbers.reduce((acc, num) => acc + num, 0);}
console.log(sumArray([1, 2, 3, 4, 5])); // 15



function isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false



function findMax(numbers: number[]): number {return Math.max(...numbers);}
console.log(findMax([1, 2, 3, 4, 5])); // 5



function flattenArray<T>(arr: T[][]): T[] {return arr.flat();}
console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]