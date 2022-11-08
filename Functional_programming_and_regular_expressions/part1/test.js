
describe("sum", function(){
    it("sum array of numbers",function(){
        assert.equal(sum([1,2,3,4,5]),15);
    });
});


describe("multiply", function(){
    it("multiply the numbers in an array",function(){
        assert.equal(multiply([1,2,3,4,5]),120);
    });
});


describe("reverse", function(){
    it("Reverses a string",function(){
        assert.equal(reverse("Alazar"),"razalA");
    });
});

describe("filterLongWords", function(){
    it("Filters out the longest word from array of strings",function(){
        assert.deepEqual(filterLongWords(["JS","can","be","hard","for","Noobs"],3),['hard','Noobs']);

    });
});
