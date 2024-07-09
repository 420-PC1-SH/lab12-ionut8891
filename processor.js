
function processor(transmission) {
    if (!transmission.includes("::")) {
        throw new Error('Data is invalid ; should contain "::"');
    }
    let parts = transmission.split("::");
    let id = parseInt(parts[0], 10);
    return {
        id: id
    };
}



module.exports = processor;
