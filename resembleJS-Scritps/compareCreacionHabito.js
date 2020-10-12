const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");

async function getDiff() {
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
        await fs.readFile("screenshots/CreacionHabito.spec.js/Creacion de Habito -- makes a wrong login attemp.png"),
        await fs.readFile("screenshots/CreacionHabito.spec.js/Creacion de Habito -- makes a wrong login attemp (1).png"),
        options
    );
    await fs.writeFile("compareImages/DiferenciasCreacionHabito.png", data.getBuffer());
}

getDiff();