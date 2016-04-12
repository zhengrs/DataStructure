
(function(){

	var swapNodesInPairs = function( head ){
		if( !head || !head.next )	return head;

		var pre,
				a,
				b;

		a = head;
		b = head.next;
		
		a.next = b.next;
		b.next = a;
		head = b;

		pre = a;

		while( pre && (a=pre.next) && (b=a.next) ){
			a.next = b.next;
			b.next = a;
			pre.next = b;

			pre = a;
		}

		return head;
	};

})();
