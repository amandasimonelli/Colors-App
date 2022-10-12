import chroma from "chroma-js";
// import chroma, { hex } from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette){
    // Empty array that will generate each color and pallete with the data associated in seedColors.js
    let newPalette = {
        palleteName: starterPalette.palleteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    };

    // Build a new colors object that contains each level set to an empty array from const levels.
    for(let level of levels) {
        newPalette.colors[level] = [];
    }

    // Loop over every color by calling generateScale function.
    // color.color from seeColors.js list with "10"=== numberOfColors to call.
    // .reverse() to reverse color list so it matches the direction of getRange() 
    // which is set from dark to middle to light. This direction is generated this way because
    // the colors appear too dark if const end = black.
    for (let color of starterPalette.colors) {
        let scale = getScale(color.color, 10).reverse();
        for (let i in scale){
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0)")
            })
        }
    }

    return newPalette;
}

// Define the color ranges. Generate an array with 3 different color values.
// chroma(hexColor).darken(1.4)[to get hex value in chroma js].hex() === start at darkest color
// hexColor === middle color / regular color
// end === const end, as well as the end of the range
function getRange(hexColor){
    const end="#fff";
    return [
        chroma(hexColor)
        .darken(1.4)
        .hex(),
        hexColor,
        end
    ]
}

//generate a scale with all the different colors and take lightest color
//that assigns it to the lowest level all the way to the darkest color 
//with the highest level.
function getScale(hexColor, numberOfColors){
    return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors);
}

export {generatePalette};