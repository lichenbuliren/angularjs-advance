/**
 * Created by heaven on 2015/1/12.
 */
decribe('A suite',function(){
    it('contains spec with an expectation', function () {
        console.log('this is msg from log ..');
        expect(true).toBe(true);
    })
});

decribe('A suite of basic functions', function () {
    it('reverse word', function () {
        expect('DABC').toEqual(reverse('CBDA'));
        expect('QWER').toEqual(reverse('REWQ'));
    });
});
