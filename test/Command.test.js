const {expect} = require("chai");
const Command = require("../Command");
const fs = require("fs");
let uuid = require('uuid').v4;

describe('#save', ()=>{

    const fileName = '2022-01-28-orders.csv';
    afterEach(()=>{
        fs.rmSync(fileName);
    })

    it("should write command header to file", () => {
        // Given
        const command = new Command();

        // When
        command.save()

        const fileContent = fs.readFileSync(fileName, {encoding: "utf-8"});

        // Then
        expect(fileContent).to.contains("id; Date;Perpend Palets;Copper Wire Coils;Copper Wire Meters;\n");
    })

    it("should write 5 prepend and 2 meters of copper wire command to file", () => {
        // Given
        const command = new Command();
        const id = uuid();
        command.addPrepend(5);
        command.addCopperWire(2);

        // When
        command.save(id)

        const fileContent = fs.readFileSync(fileName, {encoding: "utf-8"});

        // Then
        const expectedLine = `${id};2022-01-28;5;0;2\n`
        expect(fileContent).to.contains(expectedLine);
    })
})
