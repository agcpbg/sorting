describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single item array', function(){
  	var arr = [1];
  	expect(bubbleSort(arr)).toEqual(arr);
  })
});