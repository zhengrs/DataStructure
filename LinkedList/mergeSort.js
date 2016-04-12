(function(){

	var merge = function( h1, h2 ){
		if( !h1 )	return h2;
		if( !h2 )	return h1;

		var head = null,
				node1 = h1,
				node2 = h2;
				node = head;

		if( node1.val < node2.val ){
			head = node1;
			node = head;
			node1 = node1.next;
		}
		else{
			head = node2;
			node = head;
			node2 = node2.next;
		}

		while( node1 && node2 ){
			if( node1.val<node2.val ){
				node.next = node1;
				node = node.next;
				node1 = node1.next;
			}
			else{
				node.next = node2;
				node = node.next;
				node2 = node2.next;
			}
		}

		while( node1 ){
			node.next = node1;
			node = node.next;
			node1 = node1.next;
		}

		while( node2 ){
			node.next = node2;
			node = node.next;
			node2 = node2.next;
		}

		node.next = null;
		return head;
	};

	var mergeSort = function(head){

		if( !head || !head.next )	return head;

		var n=0,
				node = head,
				m,
				i;

		while(node){
			n++;
			node = node.next;
		}

		m = Math.floor((n-1)/2);

		i = 0;
		node = head;
		while( i<m ){
			node = node.next;
			i++;
		}

		var head1 = head;
		var head2 = node.next;

		node.next = null;	// cut the connection between two lists

		var h1 = mergeSort(head1),
				h2 = mergeSort(head2);

		return merge( h1, h2 );
	};



})();
