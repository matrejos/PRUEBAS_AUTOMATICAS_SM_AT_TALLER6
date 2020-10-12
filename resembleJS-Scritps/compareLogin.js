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
        await fs.readFile("screenshots/login.spec.js/Login Tests -- makes a wrong login attemp.png"),
        await fs.readFile("screenshots/login.spec.js/Login Tests -- makes a wrong login attemp (1).png"),
        options
    );
    await fs.writeFile("compareImages/DiferenciasLogin.png", data.getBuffer());

    /*
    var diff = resemble("screenshots/login.spec.js/Login Tests -- makes a wrong login attemp.png")
    .compareTo("screenshots/login.spec.js/Login Tests -- makes a wrong login attemp (1).png")
    .ignoreColors()
    .onComplete(function(data) {
        console.log(data);
        /*
	{
	  misMatchPercentage : 100, // %
	  isSameDimensions: true, // or false
	  dimensionDifference: { width: 0, height: -1 }, // defined if dimensions are not the same
	  getImageDataUrl: function(){}
	}
    });

    */
}

getDiff();