(function(){

	var LinkedNode = function(val){
		this.data = val;
		this.next = null;
	};


	var rotateRight = function( head, k ){
		if( !head || k<0 ) return head;

		var n,
				node,
				m,
				pre_node,
				counter;

		n = 1;
		node = head; // not null
		while( node.next ){
			n++;
			node = node.next;
		}

		node.next = head; // connect end to begin

		k = k%n;	// k's range [0,n-1]
		m = n-k;  // m is the index of new head , zero-based . m's range[1,n]

		if( m == 0 )	return head;

		pre_node = null;
		node = head;
		counter = 0;

		while( node && counter<m){
			pre_node = node;
			node = node.next;
			counter++;
		}

		pre_node.next = null;
		return node;

	};

	(function(){

		var l = new LinkedList();
		l.append(1);
		l.append(2);
		l.append(3);
		l.append(4);
		l.append(5);

		var h = rotateRight(l.head, 1928376);
		print(h);

	})();

})();
