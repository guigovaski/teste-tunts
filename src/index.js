const xl = require("excel4node");
const wb = new xl.Workbook();
const ws = wb.addWorksheet('Countries List');
const { get_countries: gc } = require("./api/api.js");

const styleHeading = wb.createStyle({
    font: {
        color: '#808080',
        size: 12,
        bold: true,
    }
});

async function getCountries() {
    const res = await gc();

    return res.map(arr => {
        return {
            name: arr.name.common,
            area: String(arr.area),
            capital: arr.capital ? arr.capital[0] : "-",
            currencies: arr.currencies ? Object.keys(arr.currencies)[0] : "-",
        }
    });
}

let headingColumnIndex = 1;
let rowIndex = 2;

async function populateData(response) {
    const res = await getCountries();

    const heading = Object.keys(res[0]);

    // heading populate
    for (let i in heading) {
        ws.cell(1, headingColumnIndex++).string(heading[i]).style(styleHeading);
    }

    // data populate
    res.forEach((item) => {
        let columnIndex = 1;

        for (let i in item) {
            ws.cell(rowIndex, columnIndex++).string(item[i]);
        }
        rowIndex++;
    });

    return wb.write("src/files/ExcelFile.xlsx", response);
}

module.exports = {
    populateData,
}
