(function(){

	var LinkedNode = function(val){
		this.data = val;
		this.next = null;
	};

	var reverse = function( head ){
		if( !head || !head.next )	return head;

		var node = head,
				pre_node = null,
				next_node;

		while( node ){
			next_node = node.next;
			node.next = pre_node;
			pre_node = node;
			node = next_node;
		}

		head = pre_node;
		return head;
	};

	(function(){

		var l = new LinkedList();
		l.append(1);
		l.append(2);
		

		var h = reverse(l.head);
		print(h);

	})();

})();
