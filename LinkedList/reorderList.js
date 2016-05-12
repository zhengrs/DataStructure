var reorderList = function( head ){
	if( !head || !head.next || !head.next.next)	return head;

	var first = head,
		second,
		last2,
		last;

	while(first && ( second=first.next ) && second.next){

		last2 = first;
		while(last2.next.next){
			last2 = last2.next;
		}

		last = last2.next;

		last2.next = null;
		last.next = second;
		first.next = last;

		first = second;
	}

};
