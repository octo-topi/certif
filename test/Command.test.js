const {expect} = require("chai");
const Command = require("../Command");
const fs = require("fs");

it("should", () => {
    // Given
    const command = new Command()

    // When
    command.save()
    const fileContent = fs.readFileSync("test/a.csv", {encoding: "utf-8"});

    // Then
    expect(fileContent).to.deep.equal("foo\n");
})
