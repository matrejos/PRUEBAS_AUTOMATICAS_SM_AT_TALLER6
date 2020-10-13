const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");

async function getDiff(testID, path) {
    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: "movement",
            transparency: 0.3,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: "antialiasing"
    };

    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function
    const data = await compareImages(
        await fs.readFile(path + testID + "_VRT_colorPallete-master_1.png"),
        await fs.readFile(path + testID + "_VRT_colorPallete-master_2.png"),
        options
    );
    await fs.writeFile(path + testID + "_VRT_colorPallete-master_3.png", data.getBuffer());
}

console.log(' Test ID -> ' + (process.argv[2]));
console.log(' Path -> ' + (process.argv[3]));
getDiff(process.argv[2], process.argv[3]);