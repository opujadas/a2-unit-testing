import { VoteComponent } from './vote.component'; 



describe('VoteComponent', () => 
{
	let component : VoteComponent; 


	// BOrdels factorisés

	beforeEach(() => {
		component = new VoteComponent();
	});

	it('should increment total votes when uploaded', () =>   {

  	component.upVote(); 

  	expect(component.totalVotes).toBe(1); 
  });

  it('should decrement total votes when downloaded', () =>   {

  	component.downVote(); 

  	expect(component.totalVotes).toBe(-1); 
  });

});