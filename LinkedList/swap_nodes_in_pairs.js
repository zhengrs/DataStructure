(function(){

	var LinkedNode = function(val){
		this.data = val;
		this.next = null;
	};

	var swapPairs = function( head ){

		if( !head )	return head;

		var pNode = head,	a, b; 	// swap a and b every time

		if( head && head.next ){
			a = head.next;
			head.next = a.next;
			a.next = head;
			head = a;
			pNode = head.next;
		}
		else{
			return head;
		}

		while( pNode && (a=pNode.next) && (b=a.next) ){
			// swap a and b
			pNode.next = b;
			a.next = b.next;
			b.next = a;

			pNode = a; // tricky here 
		}

		return head;
	};

	(function(){

		var l = new LinkedList();
		l.append(1);
		l.append(2);
		l.append(3);
		l.append(4);
		l.append(5);
		l.append(6);
		l.append(7);
		l.append(8);
		l.append(9);
		l.append(10);

		var h = swapPairs(l.head);
		print(h);

	})();

})();
