const generateUniqId = require('../../src/utils/generateUniqId');

describe('Generate Unique Id', () => {
    it('should generate an unique id', () =>{
        const id = generateUniqId();

        expect(id).toHaveLength(8);
    })
})